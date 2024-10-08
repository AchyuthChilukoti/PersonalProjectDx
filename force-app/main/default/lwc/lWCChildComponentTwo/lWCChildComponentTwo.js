import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class LWCChildComponentTwo extends NavigationMixin(LightningElement) {
    numberOfCards = 50; // Specify the number of cards to display

    get cards() {
        return Array.from({ length: this.numberOfCards }, (_, i) => i);
    }
    // connectedCallback() {
    //     // Restore scroll position on component load
    //     window.addEventListener('load', () => {
    //         const scrollPosition = localStorage.getItem('scrollPosition');
    //         if (scrollPosition) {
    //             setTimeout(() => {
    //                 window.scrollTo(0, parseInt(scrollPosition, 10));
    //             }, 100); // Delay to ensure rendering is complete
    //         }
    //     });
    // }


    handleClick() {
        localStorage.setItem('scrollPosition', window.scrollY);
        // Your logic for handling the button click
        console.log('Button clicked');
        console.log('**Inside handle click');
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '069J1000003fTXsIAM', // Ensure this ID is valid
                objectApiName: 'ContentDocument',
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