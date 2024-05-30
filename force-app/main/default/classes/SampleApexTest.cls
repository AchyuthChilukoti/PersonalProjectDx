@isTest
private class SampleApexTest{
static testMethod void validateSampleApex() {
Car__c c = new Car__c(Name='BMW', Price__c=100000);
 
Test.startTest();
insert c;
Test.stopTest();
 
// Retrieve the record
c = [SELECT Price__c FROM Car__c WHERE Id =:c.Id];
 
// Test that the trigger correctly updated the price
System.assertEquals(90000, c.Price__c);
}
}