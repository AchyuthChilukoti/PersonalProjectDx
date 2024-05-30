import { LightningElement } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LdsCreateRecord extends LightningElement {
    strName;
    strAccountNumber;
    strRating='--Select--';
    strWebSite;
    strPhone;
    recordId;
    showToolTip = false;


    responseData;
    headerVal = '';
    headers = {};
    csvHeader;
   
    requestType;
    responseType;
    inputEndPoint='';
    isLoading = false;
    showJson = false;
    downloadresult = false;
  
//add dynamic row changes

filterList = [];
keyIndex = 0;
isSpinner = false;


    // Change Handlers.
    nameChangedHandler(event){
        this.strName = event.target.value;
    }
    numberChangedHandler(event){
        this.strAccountNumber = event.target.value;
    }
    websiteChangedHandler(event){
        this.strWebSite = event.target.value;
    }
    phoneChangedHandler(event){
        this.strPhone = event.target.value;
    }
    ratingChangeHandler(event)
    {
        this.strRating=event.detail.value;
    }
    // Insert record.
    createAccount(){
        // Creating mapping of fields of Account with values
        var fields = {'Name' : this.strName, 'Rating' :this.strRating, 'AccountNumber' : this.strAccountNumber, 'Website' :this.strWebSite, 'Phone' : this.strPhone};
        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Account', fields};
        // LDS method to create record.
        createRecord(objRecordInput).then(response => {
            alert('Account created with Id: ' +response.id);
            const showSuccess =new ShowToastEvent({title:'Success',message:'Success Message',variant:'success'});
            this.dispatchEvent(showSuccess);
        }).catch(error => {
            alert('Error: ' +JSON.stringify(error));
        });
    }
    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'inProgress' },
            { label: 'Finished', value: 'Cold' },
        ];
    }

    showToolTipText(){
        
        this.showToolTip = true;
        console.log("Inside tooltip method onclick -->"+this.showToolTip);
    }

    // handleChange(event) {
    //     const index = event.currentTarget.dataset.index;
    //     /* const key = this.filterList[index].Value;
    //     const value = this.filterList[index].Value; */
      
    //     if (event.target.name === 'headerKey') {
    //       delete this.filterList[index].Value;
    //      // this.filterList[index][event.target.value] = value;
    //       this.filterList[index][key] = event.target.value;
    //       console.log('header key ' + event.target.value);
    //     } else if (event.target.name === 'headerValue') {
    //       delete this.filterList[index].Value;
    //       this.filterList[index][key] = event.target.value;
    //       console.log('header val ' + event.target.value);
    //     }
    //   }

      handleChange(event) {
        let index =+ 1;
        const keyInput = event.target.closest('td').previousElementSibling.querySelector('lightning-input[name="headerKey"]');
        const key = keyInput.value;
        const value = event.target.value;
      
        if (event.target.name === 'headerKey') {
          const updatedObj = { [key]: value };
          this.filterList[index] = updatedObj;
          console.log('header key ' + key);
        } else if (event.target.name === 'headerValue') {
          const updatedObj = { [key]: value };
          this.filterList[index] = updatedObj;
          console.log('header val ' + value);
        }
      }

      downloadUserDetails(){
        //this.isLoading = true;
        console.log(" @test download triggered.");
        console.log(" headers Map "+ JSON.stringify(this.filterList));
        let mapData =[];
        console.log("  headers exists ");
        /* for(let key in this.filterList){
            console.log(" headers test.");
            mapData.push({value:filterList[key], key:key}); 
            console.log(" headers mapData2 "+ JSON.stringify(mapData));
        } */

        /* this.lstAccounts.forEach(function(acc){
            console.log(acc.Name);
        }); */

        this.filterList.forEach(function(key){
            console.log('header test2'+this.filterList[key]);
        }); 

        console.log(" headers mapData "+ JSON.stringify(mapData));
        // this.inputEndPoint = this.template.querySelector(".inputVal").value;
        // this.requestType = this.template.querySelector(".requestType").value;
        // this.responseType = this.template.querySelector(".responseType").value;
        // if(this.inputEndPoint !=null && this.requestType!=null && this.responseType!=null){
        //     this.handleAPIResponse();
        //  } 
    }
}