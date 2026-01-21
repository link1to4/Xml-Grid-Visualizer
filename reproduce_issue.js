const prettifyXML = (xml) => {
    let formatted = '';
    let indent = '';
    const tab = '  '; // 2 spaces indentation

    // Simple regex-based formatter
    xml.split(/>\s*</).forEach(function (node) {
        if (node.match(/^\/\w/)) indent = indent.substring(tab.length);
        formatted += indent + '<' + node + '>\r\n';
        if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;
    });

    return formatted.substring(1, formatted.length - 3);
};

const userXml = `<?xml version="1.0" encoding="utf-8"?>
<Pip3B13ShippingOrderConfirmationNotification>
	<fromRole>
		<PartnerRoleDescription>
			<ContactInformation>
				<contactName>Irene Wu</contactName>
				<EmailAddress>irenew@spil.com.tw</EmailAddress>
			</ContactInformation>
        </PartnerRoleDescription>
    </fromRole>
</Pip3B13ShippingOrderConfirmationNotification>`;

console.log("--- User XML Test ---");
const result = prettifyXML(userXml);
console.log(result);

// Check for duplication
if (result.match(/contactName.*contactName/s)) {
    console.log("BOOM! Duplication detected for contactName");
}
