({
    handleClose : function(component,event){ 
        $A.get("e.force:refreshView").fire();
        $A.get("e.force:closeQuickAction").fire(); 
    }
})
