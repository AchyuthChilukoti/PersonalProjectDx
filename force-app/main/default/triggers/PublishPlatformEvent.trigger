trigger PublishPlatformEvent on Account (after insert, after update) {

    if(trigger.isUpdate &&trigger.isAfter){
        List<Employee_On_Boarding__e> publishEvents = new List<Employee_On_Boarding__e>();
        for(Account acc :trigger.new){
            Employee_On_Boarding__e eob = new Employee_On_Boarding__e();
            eob.Name_of_Employee__c = acc.Name;
            eob.Phone__c = acc.Phone;
            eob.Salary__c = acc.AnnualRevenue;
            publishEvents.add(eob);
        }
        if(publishEvents.size()>0){
            EventBus.publish(publishEvents);
        }
    }
}