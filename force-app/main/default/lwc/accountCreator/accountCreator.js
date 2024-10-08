import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountCreator extends LightningElement {
    @track accountName = '';
    @track accountPhone = '';

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handlePhoneChange(event) {
        this.accountPhone = event.target.value;
    }

    createAccount() {
        const fields = { 'Name': this.accountName, 'Phone': this.accountPhone };

        const recordInput = { apiName: 'Account', fields };

        createRecord(recordInput)
            .then(account => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created successfully!',
                        variant: 'success',
                    }),
                );
                // Clear input fields
                this.accountName = '';
                this.accountPhone = '';
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating account',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}
