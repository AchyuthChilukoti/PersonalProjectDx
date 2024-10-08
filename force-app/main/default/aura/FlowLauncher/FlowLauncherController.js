({
    launchFlow: function(component, event, helper) {
        // var ref = component.get("v.pageReference");
        // var state = ref.state;
        // var context = state.inContextOfRef;
        // console.log('ref'+JSON.stringify(ref));
        // console.log('state'+JSON.stringify(state));
        // console.log('context'+JSON.stringify(context));
        // var flow = component.find("flowData");
        // var inputVariables = [
        //     // Add input variables if needed
        // ];
        // var flowName = component.get("v.flowName");

        // flow.startFlow(flowName, inputVariables);
        component.set('v.start',true);
    },
    handleFlowStatusChange: function(component, event, helper) {
        // Handle flow status changes here
        var ref = component.get("v.pageReference");
        var state = ref.state;
        var context = state.inContextOfRef;
        console.log('ref'+JSON.stringify(ref));
        console.log('state'+JSON.stringify(state));
        console.log('context'+JSON.stringify(context));
        var flow = component.find("flowData");
        var inputVariables = [
            // Add input variables if needed
        ];
        var flowName = component.get("v.flowName");

        flow.startFlow(flowName, inputVariables);
    }
})