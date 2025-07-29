import { LightningElement } from 'lwc';

export default class LWCCmpChildtoParent extends LightningElement {

    handleChange(event){
        const value=event.target.value;
        const cstent = new CustomEvent('change',{detail:value});
     this.dispatchEvent(cstent);
    }
}