public class AccountOrderController {
    public Account account { get; set; }

    // Constructor to accept the StandardController
    public AccountOrderController(ApexPages.StandardController controller) {
        // Get the Account record based on the passed id
        Id accountId = (Id)controller.getRecord().Id;
        if (accountId != null) {
            account = [SELECT Id, Order__c FROM Account WHERE Id = :accountId LIMIT 1];
        }
    }
}
