trigger AccountTriggerFetchContacts on Account (after update) {

    if(Trigger.isAfter && Trigger.isUpdate){
        List<Contact> assCon = [Select id, LastName from Contact where AccountId=Trigger.newMap.keySet()];
    }
}