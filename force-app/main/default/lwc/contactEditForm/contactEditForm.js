import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactEditForm extends LightningElement {
    @api recordId;  // This will receive the Contact Id from Aura
    
    handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        try {
            const fields = event.detail.fields;
            this.template.querySelector('lightning-record-edit-form').submit(fields); // Programmatically submit form
        } catch (error) {
            this.showError(error);
        }
    }

    handleSuccess() {
        // Handle logic after the record is successfully updated
        // You can show a success message or navigate away
        const evt = new ShowToastEvent({
            title: "Success",
            message: "Contact record updated successfully.",
            variant: "success",
        });
        this.dispatchEvent(evt);

        // Optionally, close the modal or redirect to the contact record page
    }
    showError(error) {
        const evt = new ShowToastEvent({
            title: "Error updating record",
            message: error.body ? error.body.message : error.message,
            variant: "error",
        });
        this.dispatchEvent(evt);
    }
}
