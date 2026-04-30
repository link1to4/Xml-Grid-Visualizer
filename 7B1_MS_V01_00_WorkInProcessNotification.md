# WorkInProcess Report Schema（含完整 XPath）

## 欄位說明
- **序號**：文件中的欄位編號
- **出現次數**：`1`=必填、`0..1`=選填、`1..n`=至少一筆、`0..n`=零至多筆
- **欄位名稱**：原始 Schema 欄位名稱
- **XPath**：對應的完整 XPath（根節點為 `/Pip7B1WorkInProcessNotification`）

---

## 根節點

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 13 | 1 | GlobalDocumentFunctionCode | `/Pip7B1WorkInProcessNotification/GlobalDocumentFunctionCode` |
| 14 | 1 | thisDocumentGenerationDateTime.DateTimeStamp | `/Pip7B1WorkInProcessNotification/thisDocumentGenerationDateTime/DateTimeStamp` |
| 15 | 1 | thisDocumentIdentifier.ProprietaryDocumentIdentifier | `/Pip7B1WorkInProcessNotification/thisDocumentIdentifier/ProprietaryDocumentIdentifier` |

---

## fromRole.PartnerRoleDescription

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 1 | 1 | fromRole.PartnerRoleDescription | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription` |
| 2 | 1 | ContactInformation | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/ContactInformation` |
| 3 | 1 | contactName.FreeFormText | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/ContactInformation/contactName/FreeFormText` |
| 4 | 1 | EmailAddress | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/ContactInformation/EmailAddress` |
| 5 | 0..1 | facsimileNumber.CommunicationsNumber | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/ContactInformation/facsimileNumber/CommunicationsNumber` |
| 6 | 1 | telephoneNumber.CommunicationsNumber | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/ContactInformation/telephoneNumber/CommunicationsNumber` |
| 7 | 1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/GlobalPartnerRoleClassificationCode` |
| 8 | 1 | PartnerDescription | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/PartnerDescription` |
| 9 | 1 | BusinessDescription | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/PartnerDescription/BusinessDescription` |
| 10 | 1 | GlobalBusinessIdentifier | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/PartnerDescription/BusinessDescription/GlobalBusinessIdentifier` |
| 11 | 0..1 | GlobalSupplyChainCode | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/PartnerDescription/BusinessDescription/GlobalSupplyChainCode` |
| 12 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/fromRole/PartnerRoleDescription/PartnerDescription/GlobalPartnerClassificationCode` |

---

## toRole.PartnerRoleDescription

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 16 | 1 | toRole.PartnerRoleDescription | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription` |
| 17 | 0..1 | ContactInformation | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/ContactInformation` |
| 18 | 1 | contactName.FreeFormText | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/ContactInformation/contactName/FreeFormText` |
| 19 | 1 | EmailAddress | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/ContactInformation/EmailAddress` |
| 20 | 0..1 | facsimileNumber.CommunicationsNumber | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/ContactInformation/facsimileNumber/CommunicationsNumber` |
| 21 | 1 | telephoneNumber.CommunicationsNumber | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/ContactInformation/telephoneNumber/CommunicationsNumber` |
| 22 | 1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/GlobalPartnerRoleClassificationCode` |
| 23 | 1 | PartnerDescription | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/PartnerDescription` |
| 24 | 1 | BusinessDescription | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/PartnerDescription/BusinessDescription` |
| 25 | 1 | GlobalBusinessIdentifier | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/PartnerDescription/BusinessDescription/GlobalBusinessIdentifier` |
| 26 | 0..1 | GlobalSupplyChainCode | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/PartnerDescription/BusinessDescription/GlobalSupplyChainCode` |
| 27 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/toRole/PartnerRoleDescription/PartnerDescription/GlobalPartnerClassificationCode` |

---

## WorkInProcessReport

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 28 | 1 | WorkInProcessReport | `/Pip7B1WorkInProcessNotification/WorkInProcessReport` |
| 29 | 1..n | WorkInProcess | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess` |
| 30 | 1 | Choice | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice` |

---

## Choice > ManufacturingLot > primaryLot.Lot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 31 | — | ManufacturingLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot` |
| 32 | 0..1 | lotTraceCode.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/lotTraceCode/ProprietaryReferenceIdentifier` |
| 33 | 1 | primaryLot.Lot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot` |
| 34 | 1 | GlobalLotCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/GlobalLotCode` |
| 35 | 1 | GlobalLotStatusCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/GlobalLotStatusCode` |
| 36 | 0..1 | GlobalPriorityCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/GlobalPriorityCode` |
| 37 | 1 | GlobalWorkInProcessLocationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/GlobalWorkInProcessLocationCode` |
| 38 | 1 | LotIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotIdentification` |
| 39 | 1 | primaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotIdentification/primaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 40 | 0..1 | secondaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotIdentification/secondaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 41 | 0..1 | LotQualityStatusCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQualityStatusCode` |
| 42 | 1..n | LotQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQuantity` |
| 43 | 0..1 | BinNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQuantity/BinNumber` |
| 44 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQuantity/GlobalLotQuantityClassificationCode` |
| 45 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQuantity/GlobalProductUnitOfMeasureCode` |
| 46 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotQuantity/ProductQuantity` |

---

## Choice > ManufacturingLot > LotShipment

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 47 | 0..1 | LotShipment | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment` |
| 48 | 0..1 | actualCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/actualCompletionDate/DateTimeStamp` |
| 49 | 0..1 | actualCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/actualCompletionQuantity/ProductQuantity` |
| 50 | 0..1 | actualShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/actualShipDate/DateTimeStamp` |
| 51 | 0..1 | actualShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/actualShipQuantity/ProductQuantity` |
| 52 | 0..1 | currentScheduledCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledCompletionDate/DateTimeStamp` |
| 53 | 0..1 | currentScheduledCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledCompletionQuantity/ProductQuantity` |
| 54 | 0..1 | currentScheduledShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledShipDate/DateTimeStamp` |
| 55 | 0..1 | currentScheduledShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledShipQuantity/ProductQuantity` |
| 56 | 0..1 | DocumentReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference` |
| 57 | 0..1 | DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/DateTimeStamp` |
| 58 | 1 | GlobalDocumentReferenceTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/GlobalDocumentReferenceTypeCode` |
| 59 | 0..1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/GlobalPartnerRoleClassificationCode` |
| 60 | 0..1 | LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/LineNumber` |
| 61 | 1 | ProprietaryDocumentIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/ProprietaryDocumentIdentifier` |
| 62 | 0..1 | RevisionNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/RevisionNumber` |
| 63 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/GlobalProductUnitOfMeasureCode` |
| 64 | 0..1 | originalScheduledCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledCompletionDate/DateTimeStamp` |
| 65 | 0..1 | originalScheduledCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledCompletionQuantity/ProductQuantity` |
| 66 | 0..1 | originalScheduledShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledShipDate/DateTimeStamp` |
| 67 | 0..1 | originalScheduledShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledShipQuantity/ProductQuantity` |
| 68 | 0..1 | shipToLocation.PhysicalLocation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation` |
| 69 | 0..1 | GlobalLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/GlobalLocationIdentifier` |
| 70 | 0..n | PartnerLocationIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification` |
| 71 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryDomainIdentifier` |
| 72 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryIdentifierAuthority` |
| 73 | 1 | ProprietaryLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryLocationIdentifier` |

---

## Choice > ManufacturingLot > OrderReference

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 74 | 0..1 | manufacturingDateCode.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/manufacturingDateCode/ProprietaryReferenceIdentifier` |
| 75 | 1 | OrderReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference` |
| 76 | 1..n | DocumentReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference` |
| 77 | 0..1 | DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/DateTimeStamp` |
| 78 | 1 | GlobalDocumentReferenceTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/GlobalDocumentReferenceTypeCode` |
| 79 | 0..1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/GlobalPartnerRoleClassificationCode` |
| 80 | 0..1 | LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/LineNumber` |
| 81 | 1 | ProprietaryDocumentIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/ProprietaryDocumentIdentifier` |
| 82 | 0..1 | RevisionNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/RevisionNumber` |
| 83 | 0..1 | workOrderCompletedPercent.PercentAmount | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/OrderReference/workOrderCompletedPercent/PercentAmount` |

---

## Choice > ManufacturingLot > PreviousLot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 84 | 0..1 | PreviousLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot` |
| 85 | 1 | LotIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification` |
| 86 | 1 | primaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification/primaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 87 | 0..1 | secondaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification/secondaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 88 | 1..n | LotQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity` |
| 89 | 0..1 | BinNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/BinNumber` |
| 90 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/GlobalLotQuantityClassificationCode` |
| 91 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/GlobalProductUnitOfMeasureCode` |
| 92 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/ProductQuantity` |
| 93 | 0..1 | previousLotType.GlobalLotCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/previousLotType/GlobalLotCode` |
| 94 | 1 | ProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification` |
| 95 | 0..1 | GlobalProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/GlobalProductIdentifier` |
| 96 | 0..n | PartnerProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification` |
| 97 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/GlobalPartnerClassificationCode` |
| 98 | 1 | ProprietaryProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/ProprietaryProductIdentifier` |
| 99 | 0..1 | revisionIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/revisionIdentifier/FreeFormText` |

---

## Choice > ManufacturingLot > ProductIdentification

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 100 | 1 | ProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification` |
| 101 | 0..1 | GlobalProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification/GlobalProductIdentifier` |
| 102 | 0..n | PartnerProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification` |
| 103 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/GlobalPartnerClassificationCode` |
| 104 | 1 | ProprietaryProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/ProprietaryProductIdentifier` |
| 105 | 0..1 | revisionIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/revisionIdentifier/FreeFormText` |

---

## Choice > ManufacturingLot > ProprietaryPartInformation

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 106 | 0..n | ProprietaryPartInformation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProprietaryPartInformation` |
| 107 | 1 | GlobalWorkInProcessPartTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProprietaryPartInformation/GlobalWorkInProcessPartTypeCode` |
| 108 | 1 | ProprietaryPartIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/ProprietaryPartInformation/ProprietaryPartIdentifier` |

---

## Choice > ManufacturingLot > SubLot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 109 | 0..n | SubLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/SubLot` |
| 110 | 1 | (Lot) | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/SubLot/Lot` |

---

## Choice > ManufacturingLot > transferManufacturingTo

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 111 | 0..1 | transferManufacturingTo.PartnerLocationDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription` |
| 112 | 1 | BusinessDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription` |
| 113 | 0..1 | businessName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/businessName/FreeFormText` |
| 114 | 0..1 | GlobalBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/GlobalBusinessIdentifier` |
| 115 | 0..n | PartnerBusinessIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification` |
| 116 | 1 | ProprietaryBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryBusinessIdentifier` |
| 117 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryDomainIdentifier` |
| 118 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryIdentifierAuthority` |
| 119 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/GlobalPartnerClassificationCode` |
| 120 | 0..1 | PhysicalLocation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation` |
| 121 | 0..1 | GlobalLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/GlobalLocationIdentifier` |
| 122 | 0..n | PartnerLocationIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification` |
| 123 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryDomainIdentifier` |
| 124 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryIdentifierAuthority` |
| 125 | 1 | ProprietaryLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryLocationIdentifier` |
| 126 | 0..1 | PhysicalAddress | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress` |
| 127 | 0..1 | addressLine1.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine1/FreeFormText` |
| 128 | 0..1 | addressLine2.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine2/FreeFormText` |
| 129 | 0..1 | addressLine3.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine3/FreeFormText` |
| 130 | 0..1 | cityName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/cityName/FreeFormText` |
| 131 | 0..1 | GlobalCountryCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/GlobalCountryCode` |
| 132 | 0..1 | NationalPostalCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/NationalPostalCode` |
| 133 | 0..1 | postOfficeBoxIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/postOfficeBoxIdentifier/FreeFormText` |
| 134 | 0..1 | regionName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/regionName/FreeFormText` |
| 135 | 0..1 | transferToManufacturingLine.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/primaryLot/Lot/transferToManufacturingLine/FreeFormText` |

---

## Choice > ManufacturingLot > WaferInformation

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 136 | 0..n | WaferInformation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation` |
| 137 | 1 | WaferIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferIdentification` |
| 138 | 1 | primaryWaferIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferIdentification/primaryWaferIdentifier/ProprietaryReferenceIdentifier` |
| 139 | 0..1 | secondaryWaferIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferIdentification/secondaryWaferIdentifier/ProprietaryReferenceIdentifier` |
| 140 | 1 | WaferQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferQuantity` |
| 141 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferQuantity/GlobalLotQuantityClassificationCode` |
| 142 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferQuantity/GlobalProductUnitOfMeasureCode` |
| 143 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ManufacturingLot/WaferInformation/WaferQuantity/ProductQuantity` |

---

## Choice > ProcessManufacturingLot > primaryLot.Lot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 144 | — | ProcessManufacturingLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot` |
| 145 | 0..1 | lotTraceCode.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/lotTraceCode/ProprietaryReferenceIdentifier` |
| 146 | 1 | primaryLot.Lot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot` |
| 147 | 1 | GlobalLotCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/GlobalLotCode` |
| 148 | 1 | GlobalLotStatusCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/GlobalLotStatusCode` |
| 149 | 0..1 | GlobalPriorityCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/GlobalPriorityCode` |
| 150 | 1 | GlobalWorkInProcessLocationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/GlobalWorkInProcessLocationCode` |
| 151 | 1 | LotIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotIdentification` |
| 152 | 1 | primaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotIdentification/primaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 153 | 0..1 | secondaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotIdentification/secondaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 154 | 0..1 | LotQualityStatusCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQualityStatusCode` |
| 155 | 1..n | LotQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQuantity` |
| 156 | 0..1 | BinNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQuantity/BinNumber` |
| 157 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQuantity/GlobalLotQuantityClassificationCode` |
| 158 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQuantity/GlobalProductUnitOfMeasureCode` |
| 159 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotQuantity/ProductQuantity` |

---

## Choice > ProcessManufacturingLot > LotShipment

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 160 | 0..1 | LotShipment | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment` |
| 161 | 0..1 | actualCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/actualCompletionDate/DateTimeStamp` |
| 162 | 0..1 | actualCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/actualCompletionQuantity/ProductQuantity` |
| 163 | 0..1 | actualShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/actualShipDate/DateTimeStamp` |
| 164 | 0..1 | actualShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/actualShipQuantity/ProductQuantity` |
| 165 | 0..1 | currentScheduledCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledCompletionDate/DateTimeStamp` |
| 166 | 0..1 | currentScheduledCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledCompletionQuantity/ProductQuantity` |
| 167 | 0..1 | currentScheduledShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledShipDate/DateTimeStamp` |
| 168 | 0..1 | currentScheduledShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/currentScheduledShipQuantity/ProductQuantity` |
| 169 | 0..1 | DocumentReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference` |
| 170 | 0..1 | DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/DateTimeStamp` |
| 171 | 1 | GlobalDocumentReferenceTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/GlobalDocumentReferenceTypeCode` |
| 172 | 0..1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/GlobalPartnerRoleClassificationCode` |
| 173 | 0..1 | LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/LineNumber` |
| 174 | 1 | ProprietaryDocumentIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/ProprietaryDocumentIdentifier` |
| 175 | 0..1 | RevisionNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/DocumentReference/RevisionNumber` |
| 176 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/GlobalProductUnitOfMeasureCode` |
| 177 | 0..1 | originalScheduledCompletionDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledCompletionDate/DateTimeStamp` |
| 178 | 0..1 | originalScheduledCompletionQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledCompletionQuantity/ProductQuantity` |
| 179 | 0..1 | originalScheduledShipDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledShipDate/DateTimeStamp` |
| 180 | 0..1 | originalScheduledShipQuantity.ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/originalScheduledShipQuantity/ProductQuantity` |
| 181 | 0..1 | shipToLocation.PhysicalLocation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation` |
| 182 | 0..1 | GlobalLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/GlobalLocationIdentifier` |
| 183 | 0..n | PartnerLocationIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification` |
| 184 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryDomainIdentifier` |
| 185 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryIdentifierAuthority` |
| 186 | 1 | ProprietaryLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/LotShipment/shipToLocation/PhysicalLocation/PartnerLocationIdentification/ProprietaryLocationIdentifier` |

---

## Choice > ProcessManufacturingLot > OrderReference

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 187 | 0..1 | manufacturingDateCode.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/manufacturingDateCode/ProprietaryReferenceIdentifier` |
| 188 | 1 | OrderReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference` |
| 189 | 1..n | DocumentReference | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference` |
| 190 | 0..1 | DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/DateTimeStamp` |
| 191 | 1 | GlobalDocumentReferenceTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/GlobalDocumentReferenceTypeCode` |
| 192 | 0..1 | GlobalPartnerRoleClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/GlobalPartnerRoleClassificationCode` |
| 193 | 0..1 | LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/LineNumber` |
| 194 | 1 | ProprietaryDocumentIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/ProprietaryDocumentIdentifier` |
| 195 | 0..1 | RevisionNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/DocumentReference/RevisionNumber` |
| 196 | 0..1 | workOrderCompletedPercent.PercentAmount | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/OrderReference/workOrderCompletedPercent/PercentAmount` |

---

## Choice > ProcessManufacturingLot > PreviousLot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 197 | 0..1 | PreviousLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot` |
| 198 | 1 | LotIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification` |
| 199 | 1 | primaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification/primaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 200 | 0..1 | secondaryLotIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotIdentification/secondaryLotIdentifier/ProprietaryReferenceIdentifier` |
| 201 | 1..n | LotQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity` |
| 202 | 0..1 | BinNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/BinNumber` |
| 203 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/GlobalLotQuantityClassificationCode` |
| 204 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/GlobalProductUnitOfMeasureCode` |
| 205 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/LotQuantity/ProductQuantity` |
| 206 | 0..1 | previousLotType.GlobalLotCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/previousLotType/GlobalLotCode` |
| 207 | 1 | ProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification` |
| 208 | 0..1 | GlobalProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/GlobalProductIdentifier` |
| 209 | 0..n | PartnerProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification` |
| 210 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/GlobalPartnerClassificationCode` |
| 211 | 1 | ProprietaryProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/ProprietaryProductIdentifier` |
| 212 | 0..1 | revisionIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/PreviousLot/ProductIdentification/PartnerProductIdentification/revisionIdentifier/FreeFormText` |

---

## Choice > ProcessManufacturingLot > ProductIdentification

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 213 | 1 | ProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification` |
| 214 | 0..1 | GlobalProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification/GlobalProductIdentifier` |
| 215 | 0..n | PartnerProductIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification` |
| 216 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/GlobalPartnerClassificationCode` |
| 217 | 1 | ProprietaryProductIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/ProprietaryProductIdentifier` |
| 218 | 0..1 | revisionIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProductIdentification/PartnerProductIdentification/revisionIdentifier/FreeFormText` |

---

## Choice > ProcessManufacturingLot > ProprietaryPartInformation

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 219 | 0..n | ProprietaryPartInformation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProprietaryPartInformation` |
| 220 | 1 | GlobalWorkInProcessPartTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProprietaryPartInformation/GlobalWorkInProcessPartTypeCode` |
| 221 | 1 | ProprietaryPartIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/ProprietaryPartInformation/ProprietaryPartIdentifier` |

---

## Choice > ProcessManufacturingLot > SubLot

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 222 | 0..n | SubLot | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/SubLot` |
| 223 | 1 | (Lot) | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/SubLot/Lot` |

---

## Choice > ProcessManufacturingLot > transferManufacturingTo

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 224 | 0..1 | transferManufacturingTo.PartnerLocationDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription` |
| 225 | 1 | BusinessDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription` |
| 226 | 0..1 | businessName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/businessName/FreeFormText` |
| 227 | 0..1 | GlobalBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/GlobalBusinessIdentifier` |
| 228 | 0..n | PartnerBusinessIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification` |
| 229 | 1 | ProprietaryBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryBusinessIdentifier` |
| 230 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryDomainIdentifier` |
| 231 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryIdentifierAuthority` |
| 232 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/GlobalPartnerClassificationCode` |
| 233 | 0..1 | PhysicalLocation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation` |
| 234 | 0..1 | GlobalLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/GlobalLocationIdentifier` |
| 235 | 0..n | PartnerLocationIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification` |
| 236 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryDomainIdentifier` |
| 237 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryIdentifierAuthority` |
| 238 | 1 | ProprietaryLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryLocationIdentifier` |
| 239 | 0..1 | PhysicalAddress | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress` |
| 240 | 0..1 | addressLine1.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine1/FreeFormText` |
| 241 | 0..1 | addressLine2.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine2/FreeFormText` |
| 242 | 0..1 | addressLine3.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine3/FreeFormText` |
| 243 | 0..1 | cityName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/cityName/FreeFormText` |
| 244 | 0..1 | GlobalCountryCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/GlobalCountryCode` |
| 245 | 0..1 | NationalPostalCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/NationalPostalCode` |
| 246 | 0..1 | postOfficeBoxIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/postOfficeBoxIdentifier/FreeFormText` |
| 247 | 0..1 | regionName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferManufacturingTo/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/regionName/FreeFormText` |
| 248 | 0..1 | transferToManufacturingLine.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/primaryLot/Lot/transferToManufacturingLine/FreeFormText` |

---

## Choice > ProcessManufacturingLot > WaferInformation

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 249 | 0..n | WaferInformation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation` |
| 250 | 1 | WaferIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferIdentification` |
| 251 | 1 | primaryWaferIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferIdentification/primaryWaferIdentifier/ProprietaryReferenceIdentifier` |
| 252 | 0..1 | secondaryWaferIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferIdentification/secondaryWaferIdentifier/ProprietaryReferenceIdentifier` |
| 253 | 1 | WaferQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferQuantity` |
| 254 | 1 | GlobalLotQuantityClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferQuantity/GlobalLotQuantityClassificationCode` |
| 255 | 1 | GlobalProductUnitOfMeasureCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferQuantity/GlobalProductUnitOfMeasureCode` |
| 256 | 1 | ProductQuantity | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/Choice/ProcessManufacturingLot/WaferInformation/WaferQuantity/ProductQuantity` |

---

## WorkInProcess 共用欄位

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 257 | 1 | eventDateTime.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/eventDateTime/DateTimeStamp` |
| 258 | 1 | GlobalWorkInProcessTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/GlobalWorkInProcessTypeCode` |
| 259 | 1 | isPreviousNotificationSuperceded.AffirmationIndicator | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/isPreviousNotificationSuperceded/AffirmationIndicator` |
| 260 | 1 | manufacturedBy.PartnerLocationDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription` |
| 261 | 1 | BusinessDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription` |
| 262 | 0..1 | businessName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/businessName/FreeFormText` |
| 263 | 0..1 | GlobalBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/GlobalBusinessIdentifier` |
| 264 | 0..n | PartnerBusinessIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification` |
| 265 | 1 | ProprietaryBusinessIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryBusinessIdentifier` |
| 266 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryDomainIdentifier` |
| 267 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/BusinessDescription/PartnerBusinessIdentification/ProprietaryIdentifierAuthority` |
| 268 | 1 | GlobalPartnerClassificationCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/GlobalPartnerClassificationCode` |
| 269 | 0..1 | PhysicalLocation | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation` |
| 270 | 0..1 | GlobalLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/GlobalLocationIdentifier` |
| 271 | 0..n | PartnerLocationIdentification | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification` |
| 272 | 1 | ProprietaryDomainIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryDomainIdentifier` |
| 273 | 0..1 | ProprietaryIdentifierAuthority | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryIdentifierAuthority` |
| 274 | 1 | ProprietaryLocationIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PartnerLocationIdentification/ProprietaryLocationIdentifier` |
| 275 | 0..1 | PhysicalAddress | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress` |
| 276 | 0..1 | addressLine1.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine1/FreeFormText` |
| 277 | 0..1 | addressLine2.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine2/FreeFormText` |
| 278 | 0..1 | addressLine3.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/addressLine3/FreeFormText` |
| 279 | 0..1 | cityName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/cityName/FreeFormText` |
| 280 | 0..1 | GlobalCountryCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/GlobalCountryCode` |
| 281 | 0..1 | NationalPostalCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/NationalPostalCode` |
| 282 | 0..1 | postOfficeBoxIdentifier.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/postOfficeBoxIdentifier/FreeFormText` |
| 283 | 0..1 | regionName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturedBy/PartnerLocationDescription/PhysicalLocation/PhysicalAddress/regionName/FreeFormText` |
| 284 | 0..1 | manufacturingLine.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/manufacturingLine/FreeFormText` |

---

## ProcessRouting

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 285 | 1 | ProcessRouting | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting` |
| 286 | 0..1 | operationLotDate.DateTimePeriod | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/operationLotDate/DateTimePeriod` |
| 287 | 0..1 | beginDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/operationLotDate/DateTimePeriod/beginDate/DateTimeStamp` |
| 288 | 0..1 | endDate.DateTimeStamp | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/operationLotDate/DateTimePeriod/endDate/DateTimeStamp` |
| 289 | 0..1 | previousProcessRoutingDescription.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/previousProcessRoutingDescription/FreeFormText` |
| 290 | 0..1 | previousProcessRoutingIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/previousProcessRoutingIdentifier/ProprietaryReferenceIdentifier` |
| 291 | 1 | processRoutingDescription.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/processRoutingDescription/FreeFormText` |
| 292 | 0..1 | processRoutingIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/processRoutingIdentifier/ProprietaryReferenceIdentifier` |
| 293 | 1 | WorkInProcessStage | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage` |
| 294 | 0..1 | workInProcessStageName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/workInProcessStageName/FreeFormText` |
| 295 | 1..n | WorkInProcessStep | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep` |
| 296 | 0..1 | alternateResourceIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/alternateResourceIdentifier/ProprietaryReferenceIdentifier` |
| 297 | 0..1 | GlobalEquipmentTypeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/GlobalEquipmentTypeCode` |
| 298 | 0..1 | inverseYield.PercentAmount | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/inverseYield/PercentAmount` |
| 299 | 0..1 | maximumStepNumber.LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/maximumStepNumber/LineNumber` |
| 300 | 0..1 | previousStepNumber.LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/previousStepNumber/LineNumber` |
| 301 | 0..1 | resourceIdentifier.ProprietaryReferenceIdentifier | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/resourceIdentifier/ProprietaryReferenceIdentifier` |
| 302 | 0..1 | resourceType.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/resourceType/FreeFormText` |
| 303 | 0..1 | stepNumber.LineNumber | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/stepNumber/LineNumber` |
| 304 | 0..1 | workInProcessStepName.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/workInProcessStepName/FreeFormText` |
| 305 | 0..1 | yield.PercentAmount | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/ProcessRouting/WorkInProcessStage/WorkInProcessStep/yield/PercentAmount` |

---

## QuantityChangeDescription

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 306 | 0..1 | QuantityChangeDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/QuantityChangeDescription` |
| 307 | 0..1 | GlobalChangeReasonCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/QuantityChangeDescription/GlobalChangeReasonCode` |
| 308 | 1 | GlobalWorkInProcessQuantityChangeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/QuantityChangeDescription/GlobalWorkInProcessQuantityChangeCode` |
| 309 | 0..1 | quantityChangeReasonDescription.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/QuantityChangeDescription/quantityChangeReasonDescription/FreeFormText` |

---

## StatusChangeDescription

| 序號 | 出現次數 | 欄位名稱 | XPath |
|------|----------|----------|-------|
| 310 | 0..1 | StatusChangeDescription | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/StatusChangeDescription` |
| 311 | 0..1 | GlobalChangeReasonCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/StatusChangeDescription/GlobalChangeReasonCode` |
| 312 | 1 | GlobalWorkInProcessStatusChangeCode | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/StatusChangeDescription/GlobalWorkInProcessStatusChangeCode` |
| 313 | 0..1 | statusChangeReasonDescription.FreeFormText | `/Pip7B1WorkInProcessNotification/WorkInProcessReport/WorkInProcess/StatusChangeDescription/statusChangeReasonDescription/FreeFormText` |
