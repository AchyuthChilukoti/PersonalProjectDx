public with sharing class CustomAccountSearch {

    @AuraEnabled
    public static list<Account> retriveAccs(String strAccName) {
        strAccName = '%' + strAccName + '%';
        list<Account> lstAccs = [SELECT  Id, Name, Industry, Phone, Rating From Account WHERE Name LIKE :strAccName];

        if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstAccs; 
    }

    @AuraEnabled
    public static void updateAccount(String id, String accName, String industry, String rating, String phone) {
        if (String.isNotBlank(id)) {
            Account acc = [SELECT Id, Name, Industry, Rating, Phone FROM Account WHERE Id = :id LIMIT 1];
            
            if (acc != null) {
                acc.Name = accName;
                acc.Industry = industry;
                acc.Rating = rating;
                acc.Phone = phone;
                update acc;
            }  
        } 
    }
}