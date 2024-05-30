trigger ContactAfterInsertPE on Contact (after insert) {
    // if(trigger.isInsert &&trigger.isAfter){
        List<TestPlatFormEvent__e> publishEvents = new List<TestPlatFormEvent__e>();
        for(Contact con :trigger.new){
            TestPlatFormEvent__e tpe = new TestPlatFormEvent__e();
            tpe.ContactId__c = con.Id;
            tpe.NumberCustomField__c = 123456789;
            publishEvents.add(tpe);
        }
        if(publishEvents.size()>0){
            EventBus.publish(publishEvents);
        }
   // }
}