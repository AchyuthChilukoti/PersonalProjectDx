import { LightningElement,wire,track } from 'lwc';
import getCustomSettings from '@salesforce/apex/CustomSettingsController.getSettings';
import updateCustomSettings from '@salesforce/apex/CustomSettingsController.updateCustomSettings';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class lWCtoUpdateCustomSettings extends LightningElement {

    @track field1;
    @track field2;

    // Wire the Apex method to get the custom settings
    @wire(getCustomSettings)
    wiredSettings({ data, error }) {
        console.log('**data1=>'+JSON.stringify(data));
        if (data) {
            console.log('**data=>'+JSON.stringify(data));
            this.field1 = data.Name__c;
            this.field2 = data.Age__c;
        } else if (error) {
            this.showToast('Error', 'Error loading settings', 'error');
        }
    }
    // Handle input field changes
    handleField1Change(event) {
        this.field1 = event.target.value;
    }
    handleField2Change(event) {
        this.field2 = event.target.value;
    }
    // Handle Save button click
    handleSave() {
        // Create a wrapper object with the necessary fields
        const wrapper = {
            values: {
                SettingName: this.field1,
                SettingAge: this.field2
            }
        };
    
        // Call the updateCustomSettings function with the wrapper
        updateCustomSettings({ wrapper })
            .then(() => {
                this.showToast('Success', 'Settings updated successfully', 'success');
            })
            .catch(error => {
                this.showToast('Error', 'Error updating settings', 'error');
                console.error('Error updating settings: ', error);
            });
    }
    // Show toast messages
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}