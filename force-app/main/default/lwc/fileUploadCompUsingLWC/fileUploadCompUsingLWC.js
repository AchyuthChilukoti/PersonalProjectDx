import { LightningElement } from 'lwc';

export default class FileUploadCompUsingLWC extends LightningElement {

    isActiveContract = false;
    documents=[
        {
        'Amount__c': 500,
        'CurrencyIsoCode':'USD',
        'Description__c':'Testing',
        'Content_Version_Id__c': 123456
        },
        {
        'Amount__c': 1000,
        'CurrencyIsoCode':'USD',
        'Description__c':'Testing2',
        'Content_Version_Id__c': 789012
        }
    ];

    navigateToEditDirectCostPage(event){
        console.log('***** Inside navigateToEditDirectCostPage Method');
        console.log('document data value  '+event.target.value);
    }
}