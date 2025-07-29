import { LightningElement } from 'lwc';

export default class LWCParentCmpTest extends LightningElement {
    childVal='';

    handleEvent(event){
        this.childVal=event.detail;
    }
}