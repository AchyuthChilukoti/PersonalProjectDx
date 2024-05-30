import { LightningElement, api } from 'lwc';
export default class SendDataFromFlowtoLWC extends LightningElement {
    //recieve value from flow here
    @api reactiveValue;
    localVar;

    // // method 1
    // connectedCallback(){
    //     this.localVar = this.reactiveValue;
    //     console.log('## reactiveValue =>'+this.reactiveValue);
    //     console.log('## localVar =>'+this.localVar);
    // }

    // method 2 
    connectedCallback() {
        // Call method to handle initial value
      this.handleReactiveValueChange();
    }

    // This method will be called whenever the reactiveValue property changes
    handleReactiveValueChange() {
        console.log('##22 reactiveValue =>', this.reactiveValue);
        // Perform any other actions you need to with the new value
    }

    // This setter will be called whenever the reactiveValue property changes
    set reactiveValue(newValue) {
        this._reactiveValue = newValue;
        console.log('##29 reactiveValue =>', this._reactiveValues);
    }

    get reactiveValue() {
        console.log('##33 reactiveValue =>', this.reactiveValue);
        return this._reactiveValue;
    }
}