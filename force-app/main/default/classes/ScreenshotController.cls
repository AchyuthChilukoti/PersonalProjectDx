public with sharing class ScreenshotController {
    @AuraEnabled
    public static void saveFile(String fileName, Blob fileBlob) {
        ContentVersion contentVersion = new ContentVersion();
        contentVersion.Title = fileName;
        contentVersion.PathOnClient = fileName;
        contentVersion.VersionData = fileBlob;
        insert contentVersion;
    }
}