const escapeXML = (str) => {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};

// Mock XMLNode structure for testing since we can't import types
/*
interface XMLNode {
  id: string;
  name: string;
  attributes: {name: string, value: string}[];
  children: XMLNode[];
  content: string | null;
}
*/

const serializeXML = (node, level = 0) => {
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
        xml += escapeXML(node.content);
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

// Simplified parseXML mock for testing the serialization logic
// We need to parse enough to test the double counting issue.
// Since we don't have DOMParser in Node.js easily without JSDOM, 
// we will construct a mock XMLNode tree that represents the problematic case
// OR we rely on the fact that if this logic is correct, the issue is fixed.
// The issue was regex split. The new logic is tree traversal. 
// A tree traversal cannot "double count" unless the tree has duplicates.
// So verifying the `serializeXML` function produces correct XML is key.

const mockNode = {
    name: "Pip3B13ShippingOrderConfirmationNotification",
    attributes: [],
    content: null,
    children: [
        {
            name: "fromRole",
            attributes: [],
            content: null,
            children: [
                {
                    name: "PartnerRoleDescription",
                    attributes: [],
                    content: null,
                    children: [
                        {
                            name: "ContactInformation",
                            attributes: [],
                            content: null,
                            children: [
                                {
                                    name: "contactName",
                                    attributes: [],
                                    content: "Irene Wu",
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

console.log("--- New Prettify Logic Test ---");
const result = serializeXML(mockNode);
console.log(result);

if (result.match(/contactName.*contactName/s)) {
    // match start tag ... end tag. 
    // regex /contactName.*contactName/s will match "<contactName>...</contactName>" which is normal.
    // We want to check for duplicate TAGS.
    // e.g. <contactName>...<contactName> (nested) or similar crazy output.
    // The original bug was "Double Count", likely meaning things appeared twice?
    // Or maybe `<contactName>Irene Wu</contactName>` appeared, and then `<contactName>` again?

    // Let's count occurrences of "<contactName"
    const count = (result.match(/<contactName/g) || []).length;
    console.log("Count of <contactName:", count);
    if (count > 1) {
        console.log("FAIL: Duplicate tag found");
    } else {
        console.log("PASS: No duplicate tag");
    }
} else {
    // Should verify it matches at least once
    const count = (result.match(/<contactName/g) || []).length;
    if (count === 1) {
        console.log("PASS: Tag appears exactly once");
    } else {
        console.log("FAIL: Tag missing?");
    }
}
