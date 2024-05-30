({
    init : function (component, event, helper) {
        console.log('*************');
        var createRecordEvent2 = $A.get("e.force:createRecord");
        createRecordEvent2.setParams({
            "entityApiName": "Contact",
           // "recordTypeId": recordTypeId,
            "defaultFieldValues": {
                'LastName':'test'
            }
    
        });
        console.log('helloTEST123TY----') ;
        createRecordEvent2.fire();    
    },
})