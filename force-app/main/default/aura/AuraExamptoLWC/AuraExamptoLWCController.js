({
    doInit : function(component, event, helper) {
        console.log('Init method called recordId = ' + component.get("v.recordId"));
    },
    hanldleClose : function(component,event){ 
        $A.get("e.force:refreshView").fire();
        $A.get("e.force:closeQuickAction").fire(); 
    },
    onChangeMethod :function(component,event){
        console.log('onChangeMethod called');
        console.log('onChangeMethod called checkboxValue -'+component.find("checkbox").get("v.value"));
       
        //let checkbox = cmp.get("v.checked");
        let checkbox = event.getSource().get("v.checked");
        console.log('checkbox1--'+checkbox);
        checkbox = !checkbox;
        console.log('checkbox2--'+checkbox);
    }
})
