({
    doInit : function(component, event, helper) {
        console.log('Init method called');
    },
    callLWCMethod: function (component, event, helper) {
        // Call the JavaScript method in the LWC
        var lwcComponent = component.find("childCmp");
        lwcComponent.callLWCMethod();
    },
    handleMessageFromLWC : function(component, event, helper) {
        console.log('222222222222');
        var message = event.getParam("message");
        component.set("v.messageFromLWC", message);
    }
})