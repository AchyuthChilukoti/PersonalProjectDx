import { LightningElement, track, api, wire } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from 'lightning/navigation';
// import GetObjectAPINameFromID from '@salesforce/apex/WorkProRequestCreationFormController.GetObjectAPINameFromID';
// import GetFieldAPINamesFromFieldSet from '@salesforce/apex/WorkProRequestCreationFormController.GetFieldAPINamesFromFieldSet'
// import GetMappedFieldValues from '@salesforce/apex/WorkProRequestCreationFormController.GetMappedFieldValues'
// import GetPackageOptionsFromWorkPro from '@salesforce/apex/WorkProRequestCreationFormController.GetPackageOptionsFromWorkPro';


export default class workProRequestCreationForm extends NavigationMixin(LightningElement) {

    @api recordId;

    @track packageOptions = [];
    packageMap = {};
    objectNameLookupField;
    customFieldMap = [];
    standardFieldMap = [];
    standardFieldDefaults = {};
    lookupField = {};
    isLoading = true;
    submitDisabled = false;
    record_Id='003J1000004kSswIAE';


    @track hasCustomFields = false;
    @track packageName;
    @track packageId;
    @track siteId;
    @track mobilePhoneValue;

    connectedCallback(){
        this.isLoading=false;
    }

    handleLoad(event){
        //console.log('event###'+JSON.stringify(event.detail.records['003Ws0000032YryIAE'].fields));
        console.log('event###'+JSON.stringify(event.detail.records[this.record_Id].fields.HomePhone));
        console.log('event###'+JSON.stringify(event.detail.records[this.record_Id].fields.FirstName));
    }

    // @wire(GetObjectAPINameFromID, {recordId: '$recordId'})
    // _objectName({error, data}){
    //     if(data){
    //         // console.log('GetObjectAPIName: '+data);
    //         this.objectName = data;
    //         if(!this.objectName.endsWith('__c')) this.objectNameLookupField = this.objectName+'__c';
    //         else this.objectNameLookupField = this.objectName;
    //         GetMappedFieldValues({ objectName:this.objectName, recordId:this.recordId, customFieldSetName:'WorkPro_Request_Custom_Fields' })
    //         .then(result => {
    //             for (let key in result) {
    //                 let value = result[key];
    //                 if(value['Lookup']){
    //                     this.lookupField = {key:key,value:value};
    //                 }
    //                 else if(value['Custom']){
    //                     this.hasCustomFields = true;
    //                     this.customFieldMap.push({key:key,value:value});
    //                 }
    //                 else{
    //                     this.standardFieldMap.push({key:key,value:value});
    //                     this.standardFieldDefaults[key] = value.Value;
    //                 }
    //              }
    //             this.isLoading = false;
    //             if(this.standardFieldDefaults['Candidate_Mobile__c'] != null) this.mobilePhoneValue = this.standardFieldDefaults['Candidate_Mobile__c'];
    //         })
    
    //         .catch(error => {
    //             console.log(JSON.stringify(error));
    //         });
    //     }
    //     else if(error){
    //         console.log(JSON.stringify(error));
    //         const toast = new ShowToastEvent({
    //             title: 'Error',
    //             message: error.body.message,
    //             variant: 'error',
    //             mode : 'sticky'
    //           });
    //           this.dispatchEvent(toast);
    //     }
    // }

    

    /*@wire(GetMappedFieldValues, {objectName:'$objectName', recordId:'$recordId', customFieldSetName:'WorkPro_Request_Custom_Fields'})
    _fieldMapping({error, data}){
        console.log('running getmappedfieldvalues. Error:');
        console.log(error);
        console.log('Data:');
        console.log(data);

        if(data){
            
            console.log('MappedFieldValues:');
            console.log(JSON.stringify(data));

            for (let key in data) {
                let value = data[key];
                if(value['Lookup']){
                    this.lookupField = {key:key,value:value};
                }
                else if(value['Custom']){
                    this.hasCustomFields = true;
                    this.customFieldMap.push({key:key,value:value});
                }
                else{
                    this.standardFieldMap.push({key:key,value:value});
                    this.standardFieldDefaults[key] = value.Value;
                }
             }
            this.isLoading = false;
            console.log('Standard Field Map:');
            console.log(JSON.stringify(this.standardFieldMap));
            console.log('Custom Field Map:');
            console.log(JSON.stringify(this.customFieldMap));
            console.log('Lookup Field:');
            console.log(JSON.stringify(this.lookupField));
        }
        else if (error){
            console.log(JSON.stringify(error));
            const toast = new ShowToastEvent({
                title: 'Error',
                message: error.body.message,
                variant: 'error',
                mode : 'sticky'
              });
              this.dispatchEvent(toast);
        }
    }*/

    // @wire(GetPackageOptionsFromWorkPro,{})
    // _packageOptions({error, data}){
    //     if(data){
    //         var tempOptions = [];
    //         //console.log(JSON.stringify(data));
    //         Object.entries(data).forEach(([key, value]) => { 
    //             tempOptions.push({'label': key, 'value' : value.id});
    //             ///this.packageMap.push({'id' : value.id, 'value' : {'name' : key, 'site_id' : value.site_id}})
    //             this.packageMap[value.id] =  {'name':key,'site_id':value.site_id};
    //         });
    //         this.packageOptions = tempOptions;
    //         this.isLoading = false;
    //         //console.log(JSON.stringify(this.packageMap));
    //         // console.log(JSON.stringify(this.packageOptions));
    //         // console.log('PackageMap');
    //         // console.log(JSON.stringify(this.packageMap));
            
    //     }
    //     else if (error){
    //         console.log(JSON.stringify(error));
    //         const toast = new ShowToastEvent({
    //             title: 'Error',
    //             message: error.body.message,
    //             variant: 'error',
    //             mode : 'sticky'
    //           });
    //           this.dispatchEvent(toast);
    //     }
    // }

    // @wire(GetFieldAPINamesFromFieldSet, {objectName: 'WorkPro_Request__c', fieldSetName: 'WorkPro_Request_Custom_Fields'})
    // _customFields({error, data }){
    //     if(data){
    //         // console.log('Field API Names:');
    //         // console.log(JSON.stringify(data));
    //         if(data.length > 0){
    //             this.customFields = data;
    //         }
    //         else{
    //             this.customFields = null;
    //         }
            
    //     }
    //     else if (error){
    //         this.customFields = null;
    //         console.log(JSON.stringify(error));
    //         const toast = new ShowToastEvent({
    //             title: 'Error',
    //             message: error.body.message,
    //             variant: 'error',
    //             mode : 'sticky'
    //           });
    //           this.dispatchEvent(toast);
    //     }
    //     else {
    //         this.customFields = null;
    //     }
    // }


    handlePackageSelection(event){
        //console.log(JSON.stringify(event.detail.value)+' selected');
        this.packageId = event.detail.value;
        this.packageName = this.packageMap[event.detail.value]['name'];
        this.siteId = this.packageMap[event.detail.value]['site_id'];
    }

    handlePhoneChange(event){
        //console.log(JSON.stringify(event.detail.value));
        this.mobilePhoneValue = event.detail.value;
    }
    
    handleSave(){
        var isAllValid = true;
        this.template.querySelectorAll('lightning-input-field').forEach(
            element => {
                //console.log(element.reportValidity());
                if(!element.reportValidity()) {
                    isAllValid = false;
                }

            }
        );
        this.template.querySelectorAll('lightning-combobox, lightning-input').forEach(
            element => {
                //console.log(element.validity.valid);
                if(!element.validity.valid) {
                    element.reportValidity()
                    isAllValid = false;
                }

                }
        );
        if(isAllValid){
            //console.log('All is valid, submitting...');
            this.isLoading = true;
            var btn = this.template.querySelector('[data-my-id="subtn"]');
            if (btn) { 
                btn.click(); 
            }
        }
        else{
            //console.log('Invalid field(s) detected, not submitting...');
        }
        
    }

    handleSuccess(event){
        console.log('Record successfully created');

        const toast = new ShowToastEvent({
            title: 'Success',
            message: 'Request Created',
            variant: 'success'
          });
          this.dispatchEvent(toast);

          console.log(event.detail.id);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: { recordId: event.detail.id, objectApiName: 'WorkPro_Request__c', actionName: 'view' }
        });
        
        this.isLoading = false;
    }

    handleError(event){
        let message = event.detail.detail;
        console.log('Error during submission: ');
        console.log(message);
    }

    handleCancel(){
        const closeEvent = new CustomEvent("close", {});
        // Fire the custom event
        this.dispatchEvent(closeEvent);
    }


}