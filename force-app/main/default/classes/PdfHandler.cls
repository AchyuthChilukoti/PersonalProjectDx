public class PdfHandler {
    
    @AuraEnabled
    public static String processPdf(String fileUrl, Id caseId) {
        Blob pdfBlob = downloadPdf(fileUrl);
        
        if (pdfBlob != null) {
            // Upload PDF as ContentDocument and get the URL
            return uploadContentDocument(pdfBlob, 'DownloadedFile.pdf', caseId);
        } else {
            return null;
        }
    }
    
    // Method to download the PDF file
    private static Blob downloadPdf(String fileUrl) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(fileUrl);
        req.setMethod('GET');
        req.setHeader('Content-Type', 'application/pdf');
        req.setHeader('User-Agent', 'SalesforceApex');

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() == 200) {
            return res.getBodyAsBlob();
        } else {
            System.debug('Error: ' + res.getStatusCode() + ' - ' + res.getStatus());
            return null;
        }
    }
    
    // Method to upload PDF as ContentDocument and return the document URL
    private static String uploadContentDocument(Blob fileBlob, String fileName, Id caseId) {
        ContentVersion contentVersion = new ContentVersion();
        contentVersion.VersionData = fileBlob;
        contentVersion.PathOnClient = fileName;
        contentVersion.Title = fileName;
        contentVersion.IsMajorVersion = true;
        insert contentVersion;

        Id contentDocumentId = [SELECT ContentDocumentId FROM ContentVersion WHERE Id = :contentVersion.Id].ContentDocumentId;

        ContentDocumentLink cdl = new ContentDocumentLink();
        cdl.ContentDocumentId = contentDocumentId;
        cdl.LinkedEntityId = caseId;
        cdl.ShareType = 'V';
        cdl.Visibility = 'AllUsers';
        insert cdl;

        // Return the URL to access the ContentDocument
        return contentVersion.Id;
    }
}
