import { XMLNode, XMLAttribute, ParseResult } from './types';

// Generate a unique ID for React keys
const generateId = (): string => Math.random().toString(36).substr(2, 9);

export const parseXML = (xmlString: string): ParseResult => {
  if (!xmlString || xmlString.trim() === '') {
    return { root: null, error: null };
  }

  // Remove XML declaration (<?xml ... ?>) if present.
  // This is necessary because we wrap the content in a dummy root <__root__>,
  // and the XML declaration must appear at the very start of the document, not inside an element.
  let sanitizedXml = xmlString.replace(/^\s*<\?xml[^>]*\?>/i, '');

  // Remove DOCTYPE declaration (<!DOCTYPE ... >) if present.
  // DOCTYPEs are not allowed inside the dummy root wrapper.
  // This regex handles basic DOCTYPE declarations.
  sanitizedXml = sanitizedXml.replace(/^\s*<!DOCTYPE[^>]*>/i, '');

  const parser = new DOMParser();
  // Wrap in a dummy root to handle fragments (multiple top-level nodes) safely.
  // This ensures snippets like "<A>...</A><A>...</A>" are parsed correctly.
  const wrappedXml = `<__root__>${sanitizedXml}</__root__>`;
  const doc = parser.parseFromString(wrappedXml, "text/xml");

  const errorNode = doc.querySelector("parsererror");
  if (errorNode) {
    return { root: null, error: "Invalid XML: " + errorNode.textContent };
  }

  const convertNode = (domNode: Element): XMLNode => {
    const attributes: XMLAttribute[] = [];
    if (domNode.hasAttributes()) {
      for (let i = 0; i < domNode.attributes.length; i++) {
        const attr = domNode.attributes[i];
        attributes.push({ name: attr.name, value: attr.value });
      }
    }

    const children: XMLNode[] = [];
    let content = "";

    domNode.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        children.push(convertNode(child as Element));
      } else if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.CDATA_SECTION_NODE) {
        const text = child.nodeValue?.trim();
        if (text) {
          content += text + " ";
        }
      }
    });

    return {
      id: generateId(),
      name: domNode.nodeName,
      attributes,
      children,
      content: content.trim() || null,
    };
  };

  try {
    const rootWrapper = doc.documentElement; // <__root__>
    const convertedWrapper = convertNode(rootWrapper);

    // Smart Unwrapping:
    // If the wrapper has only one child element and no text/attributes (standard valid XML), return that child.
    if (
      convertedWrapper.children.length === 1 &&
      (!convertedWrapper.content) &&
      convertedWrapper.attributes.length === 0
    ) {
      return { root: convertedWrapper.children[0], error: null };
    }

    // If it's a fragment (multiple roots), return the wrapper but rename it to 'root' or 'Document'
    convertedWrapper.name = "root";
    return { root: convertedWrapper, error: null };

  } catch (e: any) {
    return { root: null, error: "Parsing error: " + e.message };
  }
};


const escapeXML = (str: string): string => {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const serializeXML = (node: XMLNode, level: number = 0): string => {
  const indent = '  '.repeat(level);
  let xml = `${indent}<${node.name}`;

  if (node.attributes.length > 0) {
    node.attributes.forEach(attr => {
      xml += ` ${attr.name}="${escapeXML(attr.value)}"`;
    });
  }

  const hasChildren = node.children.length > 0;
  const hasContent = node.content !== null && node.content.length > 0;

  if (!hasChildren && !hasContent) {
    xml += '/>';
    return xml;
  }

  xml += '>';

  if (hasContent) {
    xml += escapeXML(node.content!);
  }

  if (hasChildren) {
    xml += '\r\n';
    node.children.forEach(child => {
      xml += serializeXML(child, level + 1) + '\r\n';
    });
    xml += indent;
  }

  xml += `</${node.name}>`;
  return xml;
};

export const prettifyXML = (xml: string): string => {
  const { root, error } = parseXML(xml);
  if (error || !root) {
    return xml; // Fallback to original if parsing fails
  }

  // Check for XML declaration in the original string
  const declarationMatch = xml.match(/^\s*<\?xml[^>]*\?>/i);
  let result = '';

  if (declarationMatch) {
    result += declarationMatch[0] + '\r\n';
  } else {
    // Optional: Add default declaration if none exists? 
    // For now, let's only preserve if it was there to avoid forcing it on fragments.
    // Actually, user's example had it.
  }

  // If the parsed root was a wrapper for a fragment, we might want to unwrap?
  // parseXML logic: "If ... return { root: convertedWrapper.children[0] }" -> singular root
  // "Else ... convertedWrapper.name = "root"; return { root: convertedWrapper }" -> fragment wrapper

  // If parseXML returned a generated "root" wrapper that wasn't in original (implicit),
  // we might be indenting everything under it.
  // The current parseXML logic tries to be smart:
  // if 1 child -> returns that child as root.
  // if multiple -> returns wrapper named "root".

  // If we have a wrapper named "root" that WAS generated (how do we know?), 
  // we might want to serialize its CHILDREN instead of the root itself?
  // `parseXML` doesn't explicitly flag "generated". 
  // But standard XML has 1 root. 
  // If `parseXML` returns a node named "root" with ID generated, check if input had <root>?
  // Actually, valid XML 1.0 has exactly one root element. 
  // If the user pasted a fragment (multiple top levels), `parseXML` wrapped it in `<root>`.
  // If we serialize `<root>...</root>`, we change the content by adding a container.
  // But `prettify` usually assumes a document.
  // Let's stick to simple serialization of the Result Root. 
  // If the user provided a fragment, they get it wrapped in a root, which makes it valid XML.
  // Wait, if I paste `<a>...</a><b>...</b>`, parseXML returns `<root><a>...</a><b>...</b></root>`.
  // Prettify will output `<root>...`. That seems acceptable for "Visualizer". 
  // But for "Prettify" text transformation... maybe less so.
  // But strictly, `<a></a><b></b>` is invalid XML document.

  return result + serializeXML(root);
};

export const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
  </book>
  <book category="children">
    <title lang="en">Harry Potter</title>
    <author>J.K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
  <book category="web">
    <title lang="en">Learning XML</title>
    <author>Erik Ray</author>
    <year>2003</year>
    <price>39.95</price>
  </book>
</bookstore>`;