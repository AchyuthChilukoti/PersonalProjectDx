({
    doInit: function(component, event, helper) {
        var action = component.get("c.getTreeGridData");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                component.set("v.gridColumns", data.columns);
                component.set("v.gridData", data.data);
            }
        });
        $A.enqueueAction(action);
    }
})
