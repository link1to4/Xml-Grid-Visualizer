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
  const sanitizedXml = xmlString.replace(/^\s*<\?xml[^>]*\?>/i, '');

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

export const prettifyXML = (xml: string): string => {
  let formatted = '';
  let indent = '';
  const tab = '  '; // 2 spaces indentation
  
  // Simple regex-based formatter
  xml.split(/>\s*</).forEach(function(node) {
      if (node.match( /^\/\w/ )) indent = indent.substring(tab.length); 
      formatted += indent + '<' + node + '>\r\n';
      if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;              
  });
  
  return formatted.substring(1, formatted.length-3);
};

export const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<Pip3B12ShippingOrderRequest>
  <fromRole>
    <PartnerRoleDescription>
      <GlobalPartnerRoleClassificationCode>Shipper</GlobalPartnerRoleClassificationCode>
      <PartnerDescription>
        <BusinessDescription>
          <GlobalBusinessIdentifier>038142600</GlobalBusinessIdentifier>
          <GlobalSupplyChainCode>Semiconductor Manufacturing</GlobalSupplyChainCode>
          <businessName>
            <FreeFormText>RENESAS ELECTRONICS AMERICA INC.</FreeFormText>
          </businessName>
        </BusinessDescription>
        <GlobalPartnerClassificationCode>Manufacturer</GlobalPartnerClassificationCode>
      </PartnerDescription>
    </PartnerRoleDescription>
  </fromRole>
  <GlobalDocumentFunctionCode>Request</GlobalDocumentFunctionCode>
  <thisDocumentIdentifier>
    <ProprietaryDocumentIdentifier>8000008528</ProprietaryDocumentIdentifier>
  </thisDocumentIdentifier>
  <toRole>
    <PartnerRoleDescription>
      <GlobalPartnerRoleClassificationCode>Shipping Provider</GlobalPartnerRoleClassificationCode>
      <PartnerDescription>
        <BusinessDescription>
          <GlobalBusinessIdentifier>656132354</GlobalBusinessIdentifier>
          <GlobalSupplyChainCode>Semiconductor Manufacturing</GlobalSupplyChainCode>
          <businessName>
            <FreeFormText>Siliconware Precision Ind. Co.Ltd</FreeFormText>
          </businessName>
        </BusinessDescription>
        <GlobalPartnerClassificationCode>Contract Manufacturer</GlobalPartnerClassificationCode>
      </PartnerDescription>
    </PartnerRoleDescription>
  </toRole>
</Pip3B12ShippingOrderRequest>`;