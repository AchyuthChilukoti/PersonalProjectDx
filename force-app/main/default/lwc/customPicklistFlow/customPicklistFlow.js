import { LightningElement,api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class CustomPicklistFlow extends LightningElement {
    
    /* istChoices=[
        { label: 'Recall', value: 'Recall' },
        { label: 'Email', value: 'Email' }]; */
    @api defaultInput;
    listChoices;
    @api output;
    @api listOptions;
    @api namepicklist;
    @api labelpicklist;
    @api placeholder;
    @api isRequired;
    @api previousInput
    @api label;

    connectedCallback(){
        console.log('listOptions ***'+JSON.stringify(this.listOptions));
        this.listChoices=JSON.parse(this.listOptions);
        console.log('listChoices ***'+JSON.stringify(this.listChoices));
        if(!!sessionStorage[this.storageTag]){
            this.defaultInput = sessionStorage[this.storageTag];
        }
        else{
            sessionStorage[this.storageTag] = this.defaultInput;
        }
        if(this.defaultInput){
            
            this.sendToflow();
        }
    }
    get storageTag(){ return this.namepicklist; }

    handleChange(event){
        this.output=event.detail.value
        this.defaultInput=event.detail.value;
        console.log(this.value);
        sessionStorage[this.storageTag] = this.defaultInput;
        this.sendToflow();
    }

    sendToflow(){
        const attributeChangeEvent = new FlowAttributeChangeEvent('output', this.defaultInput);
        this.dispatchEvent(attributeChangeEvent);

    }
}