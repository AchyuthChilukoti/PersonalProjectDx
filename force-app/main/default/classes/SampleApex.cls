public class SampleApex{
    //comments added
    public static void applyDiscount(Car__c[] Cars) {
    for(Car__c c :Cars){
    c.Price__c *= 0.9;
    }
    }
}