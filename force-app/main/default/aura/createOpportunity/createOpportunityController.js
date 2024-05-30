({    
    doInit: function(component, event, helper) {
        
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Opportunity",
            "defaultFieldValues": {
                'AccountId' : component.get('v.companyId')
            }
        });
        createRecordEvent.fire();
    }
})
