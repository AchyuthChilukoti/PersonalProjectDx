trigger UpdateLeadEndTime on Account (before insert, before update) {
    for (Account accRecord : Trigger.new) {
        // Check if the status has been changed to "Complete"
        if (accRecord.Rating == 'Cold' && (Trigger.isInsert || Trigger.oldMap.get(accRecord.Id).Rating != 'Cold')) {
            // Get the current system time as Datetime
            Datetime currentDateTime = System.now();
            
            // Extract the time portion
            Time currentTime = currentDateTime.time();
            
            // Update the EndTime__c field with the current system time (time portion)
            accRecord.EndTime__c = currentTime;
        }
    }
}