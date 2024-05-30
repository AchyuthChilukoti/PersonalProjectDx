trigger LeadBeforeTrigger on Lead (before insert, before update) {
    for (Lead lead : Trigger.new) {
        // Check if the Rating field is being updated or if the lead is being created
        if (Trigger.isInsert || Trigger.isUpdate) {
            // Assign the Description field the value of the Rating field
            lead.Description = lead.Rating;

            // Assign the Rating field the value 'Cold'
            lead.Rating = 'Cold';
        }
    }
}