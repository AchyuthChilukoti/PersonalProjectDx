import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationMixin_recordType extends NavigationMixin(LightningElement) {

    handleClick() {
        console.log('**Inside handle click');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '069J1000003fTXsIAM', // Ensure this ID is valid
               // objectApiName: 'ContentDocument',
                actionName: 'view',
            },
        }).then((url) => {
            this.recordPageUrl = url;
            console.log('**recordPageUrl',+this.recordPageUrl);
        }).catch((error) => {
            console.error("Error generating URL: ", error);
        });
    }
}