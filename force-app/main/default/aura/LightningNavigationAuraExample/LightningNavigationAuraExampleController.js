// auraNewAccountOverrideController.js
({
    handleCreateLoad: function (cmp, event, helper) {
        //var pageRef = cmp.get("v.pageReference");
        // var defaultFieldValues =
        // cmp.find("pageRefUtils").decodeDefaultFieldValues(pageRef.state.defaultFieldValues);
    
        // var nameFieldValue = cmp.find("nameField").set("v.value", defaultFieldValues.Name);
        // var numOfEmpFieldValue = cmp.find("numOfEmpField").set("v.value", defaultFieldValues.NumberOfEmployees);
        // var ownerIdFieldValue = cmp.find("ownerIdField").set("v.value", defaultFieldValues.OwnerId);
       
    },
    handleClick : function (cmp, event, helper) {
        var navService = cmp.find("navService");
        var pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "list"
            },
            state: {
            }
        }
        pageRef.state.defaultFieldValues = cmp.find("pageRefUtils");
        cmp.set("v.pageReference", pageRef);
        var defaultUrl = "#";

        // Generate a Link for the Aura Link example
        navService.generateUrl(pageRef)
        .then($A.getCallback(function(url) {
            cmp.set("v.url", url ? url : defaultUrl);
        }), $A.getCallback(function(error) {
            cmp.set("v.url", defaultUrl);
        }));
        navService.navigate(pageRef);
    }
})