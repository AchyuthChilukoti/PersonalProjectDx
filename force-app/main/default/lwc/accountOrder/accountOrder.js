import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

// Fields to fetch
import ORDER_FIELD from '@salesforce/schema/Account.Order__c';

export default class AccountOrder extends LightningElement {
    @api recordId; // Record Id passed from the parent component or record page

    @wire(getRecord, { recordId: '$recordId', fields: [ORDER_FIELD] })
    account;

    get order() {
        return this.account.data ? this.account.data.fields.Order__c.value : null;
    }
}
