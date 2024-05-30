import { LightningElement,api } from 'lwc';

export default class BasicLWCFromAura extends LightningElement {

    @api valueFromAura;

    @api
    callLWCMethod() {
        const message = 'Hello from LWC!';
        this.message = message;
        console.log('***** Hii this is a console log from lwc***');
        // Dispatch an event to notify the Aura component
        const event = new CustomEvent('messagefromlwc', {
            detail: { message }
        });
        this.dispatchEvent(event);
    }
}