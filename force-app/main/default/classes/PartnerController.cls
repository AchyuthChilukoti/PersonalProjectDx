public with sharing class PartnerController {
    @AuraEnabled
    public static AccountPartner createPartner(String accountId, String partnerAccountId,
    String role) {
        List<String> partnerTypeToCheck = new List<String>{'Distributor','Sales Representative','Global Distributor / Stocking Distributor'};
        // Query the partner account's Type field to check if it's a valid "Partner"
        List<Account> partnerAccountList = [SELECT Id, Type FROM Account WHERE
        Id = :partnerAccountId AND (Type IN : partnerTypeToCheck)];
        // Verify the Type of Account (Assume "Partner" as a valid type)
        List<AccountPartner> accPartner = [select id from AccountPartner where AccountFromId =:accountId AND AccountToId =:partnerAccountId ];
        AccountPartner accountPartner = new AccountPartner();
        accountPartner.AccountFromId = accountId;
        accountPartner.AccountToId = partnerAccountId;
        accountPartner.Role = role;
        if(accPartner.size() == 0 && !String.isBlank(accountPartner.AccountFromId)
        && !String.isBlank(accountPartner.AccountToId) && !String.isBlank(accountPartner.Role))
        {
            try {
                insert accountPartner;
            } catch (Exception e) {
               system.debug(e);
            }
        }else if(accPartner.size() > 0){
            system.debug('jj');
        }else{
            system.debug('ghg');
        }
        return accountPartner;
    }
}