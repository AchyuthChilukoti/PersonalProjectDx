public with sharing class CaseDetails_SmartEscalationDashboard {
    
    @AuraEnabled
    public static EscalationWrapper getEscalationCases() {
        Id userId = UserInfo.getUserId();
        List<Case> userCases = [
            SELECT Id, CaseNumber, Subject, Status, Due_Date__c
            FROM Case
            WHERE OwnerId = :userId AND Status != 'Closed' AND Due_Date__c != null
        ];

        DateTime now = DateTime.now();
        Integer criticalHours = Integer.valueOf(Label.SLA_Critical_Hours); 
        Integer warningHours = Integer.valueOf(Label.SLA_Warning_Hours); 

        List<Case> criticalList = new List<Case>();
        List<Case> warningList = new List<Case>();
        List<Case> safeList = new List<Case>();

        for (Case c : userCases) {
            Long hoursToDue = (c.Due_Date__c.getTime() - now.getTime()) / (1000 * 60 * 60);

            if (hoursToDue <= criticalHours) {
                criticalList.add(c);
            } else if (hoursToDue <= warningHours) {
                warningList.add(c);
            } else {
                safeList.add(c);
            }
        }

        EscalationWrapper wrapper = new EscalationWrapper();
        wrapper.criticalCases = criticalList;
        wrapper.warningCases = warningList;
        wrapper.safeCases = safeList;

    return wrapper;
    }

    public class EscalationWrapper {
        @AuraEnabled public List<Case> criticalCases { get; set; }
        @AuraEnabled public List<Case> warningCases { get; set; }
        @AuraEnabled public List<Case> safeCases { get; set; }
    }
}