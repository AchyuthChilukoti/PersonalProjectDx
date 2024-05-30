trigger SampleTrigger on Car__c (before insert) {
    Car__c[] Cars = Trigger.new;
    SampleApex.applyDiscount(Cars);
    }