import { LightningElement, api, track, wire } from 'lwc';
import createPartner from '@salesforce/apex/PartnerController.createPartner';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNTPARTNER from '@salesforce/schema/AccountPartner';
import { CloseActionScreenEvent } from 'lightning/actions';
import { RefreshEvent } from 'lightning/refresh';
import { NavigationMixin } from 'lightning/navigation';
import { getRecord, notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';

export default class CreatePartnerRecord extends LightningElement {

    @api recordId;  // This is the Account Id
    @track partnerAccountId;
    @track role;
    @track defaultRole = 'No Access';
    @track partnerRecId;
    inputRoleChanged = false;

    connectedCallback() {
        this.role = this.defaultRole;
    }

    @wire(getRecord, { recordId: '$partnerRecId', fields: [ACCOUNTPARTNER.AccountFromId, ACCOUNTPARTNER.AccountToId, ACCOUNTPARTNER.Role] })
    record;

    handlePartnerChange(event) {
        this.partnerAccountId = event.detail.value[0];
    }

    handleRoleChange(event) {
        this.inputRoleChanged = true;
        this.role = event.detail.value;
    }

    handleCancel(event) {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    // async createPartner(event) {
    //     event.stopPropagation();
    //     if (!this.inputRoleChanged) {
    //         this.role = this.defaultRole;
    //     }

    //     if (!this.partnerAccountId) {
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error',
    //                 message: 'Please select a Partner Account',
    //                 variant: 'error',
    //             }),
    //         );
    //         return;
    //     }

    //     if (!this.role) {
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error',
    //                 message: 'Please select a role for Partner Account.',
    //                 variant: 'error',
    //             }),
    //         );
    //         return;
    //     }

    //     try {
    //         await createPartner({
    //             accountId: this.recordId,
    //             partnerAccountId: this.partnerAccountId,
    //             role: this.role
    //         });

    //         // Notify that the record has been updated
    //         await notifyRecordUpdateAvailable([{recordId: this.recordId}]);

    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Success',
    //                 message: 'Partner created successfully',
    //                 variant: 'success'
    //             }),
    //         );
    //         this.partnerAccountId = '';
    //         this.dispatchEvent(new CloseActionScreenEvent());
    //     } catch (error) {
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error creating partner',
    //                 message: error.body.message,
    //                 variant: 'error',
    //             })
    //         );
    //         this.partnerAccountId = '';
    //     }
    // }

    async createPartner(event) {
        event.stopPropagation();
        if (!this.inputRoleChanged) {
            this.role = this.defaultRole;
        }
    
        if (!this.partnerAccountId) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Please select a Partner Account',
                    variant: 'error',
                }),
            );
            return;
        }
    
        if (!this.role) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Please select a role for Partner Account.',
                    variant: 'error',
                }),
            );
            return;
        }
    
        try {
            await createPartner({
                accountId: this.recordId,
                partnerAccountId: this.partnerAccountId,
                role: this.role
            });
    
            // Notify that the record has been updated
            await notifyRecordUpdateAvailable([{ recordId: this.recordId }]);
    
            // Refresh the related list
            this.dispatchEvent(new RefreshEvent());
    
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Partner created successfully',
                    variant: 'success'
                }),
            );
            this.partnerAccountId = '';
            this.dispatchEvent(new CloseActionScreenEvent());
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating partner',
                    message: error.body.message,
                    variant: 'error',
                })
            );
            this.partnerAccountId = '';
        }
    }
    
    refreshPage() {
        // Reloads the current page by navigating to it again
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,   // Record ID of the current page
                objectApiName: 'Account',  // Object name of the current record
                actionName: 'view'         // Action to perform (view)
            }
        });
    }
}