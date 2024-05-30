import { LightningElement, track } from 'lwc';
import template from './hostelManageHomeLWC.html';
import getAccountData from '@salesforce/apex/hostelRoomAvailableSearch.getAccountData';

export default class HostelManageHomeLWC extends LightningElement {

    searchKey='';
    @track accounts;

    // Link the HTML template
    static template = template;

    //This funcation will fetch the Account Name on basis of searchkey
    SearchAccountHandler(){
        this.searchKey = this.template.querySelector('[data-id="roomName"]').value;
        console.log('this.searchKey => '+this.searchKey);
        //call Apex method.
        getAccountData({textkey: this.searchKey})
        .then(result => {
                this.accounts = result;
                console.log('this.accounts '+JSON.stringify(this.accounts));
        })
        .catch(error =>{
            this.accounts = null;
        });

    }
    cols = [
        {label:'Account Name', fieldName:'Name' , type:'text'} ,
        {label:'Phone', fieldName:'Phone' , type:'Phone'} ,
        {label:'Industry', fieldName:'Industry' , type:'text'}
              
    ]
}