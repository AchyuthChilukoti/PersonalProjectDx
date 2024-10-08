({
    init : function(component, event, helper) {
        component.set("v.isOpenModal", true);
    },

    openModal : function(component, event, helper) {
        component.set("v.isOpen", true);
    },

    closeModal : function(component, event, helper) {
        component.set("v.isOpen", false);
    },

    handleSave : function(component, event, helper) {
        // Add your save logic here
        component.set("v.isOpen", false);
    }
})
