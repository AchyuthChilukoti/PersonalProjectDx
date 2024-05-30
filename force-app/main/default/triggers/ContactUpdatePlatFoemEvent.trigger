trigger ContactUpdatePlatFoemEvent on Contact (after update) {
    if(trigger.isUpdate &&trigger.isAfter){
        List<TestPlatFormEvent__e> publishEvents = new List<TestPlatFormEvent__e>();
        for(Contact con :trigger.new){
            TestPlatFormEvent__e tpe = new TestPlatFormEvent__e();
            tpe.ConId__c = con.id;
            tpe.ContactId__c = 'xcvbvnm';
            tpe.NumberCustomField__c = 78909;
            publishEvents.add(tpe);
        }
        if(publishEvents.size()>0){
            EventBus.publish(publishEvents);
        }
    }
}