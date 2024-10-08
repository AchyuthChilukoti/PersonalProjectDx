import { LightningElement } from 'lwc';

export default class LightningRecordEditForm extends LightningElement {

   // recordId='003Ws0000032YryIAE'; //winter'25
    recordId='003J1000004kSswIAE';


    handleLoad(event){
        //console.log('event###'+JSON.stringify(event.detail.records['003Ws0000032YryIAE'].fields));
        console.log('event###'+JSON.stringify(event.detail.records[this.recordId].fields.HomePhone));
        console.log('event###'+JSON.stringify(event.detail.records[this.recordId].fields.FirstName));
    }
}