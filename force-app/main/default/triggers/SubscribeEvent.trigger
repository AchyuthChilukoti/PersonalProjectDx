trigger SubscribeEvent on Employee_On_Boarding__e (after insert) {
    /*List<Account> acc = new List<Account>();
    for(Employee_On_Boarding__e empBoarding : trigger.new){
        acc.add(new Account(Name=empBoarding.Name_of_Employee__c, Phone=empBoarding.Phone__c, AnnualRevenue=empBoarding.Salary__c));
    }
    if(acc.size()>0){
        insert acc;
    }*/
    System.debug('In subscription trigger');
}