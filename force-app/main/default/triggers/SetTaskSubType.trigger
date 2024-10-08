trigger SetTaskSubType on Task (before insert) {
    for (Task t : Trigger.new) {
        if (t.TaskSubType == null) {
            t.TaskSubType = 'Call'; 
        }
    }
}