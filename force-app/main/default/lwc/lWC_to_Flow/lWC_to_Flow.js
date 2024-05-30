import { LightningElement,api } from 'lwc';

export default class LWC_to_Flow extends LightningElement {

    @api reactiveValue;
    
    // This setter will be called whenever the phoneNumber is updated
    set phoneNumber(value) {
        // Remove spaces, dashes, and plus symbols from the phone number
        const cleanedPhoneNumber = value.replace(/[\s+\-()]/g, '');

        // Update the reactive value with the cleaned phone number
        this.reactiveValue.phoneNumber = cleanedPhoneNumber;
    }
}