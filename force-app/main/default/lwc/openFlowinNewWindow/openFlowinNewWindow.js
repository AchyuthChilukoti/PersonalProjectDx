import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";


export default class OpenFlowinNewWindow extends NavigationMixin(LightningElement) {

    connectedCallback() {
       window.open('/flow/flowNewScreen', '_blank');
            // Navigate to a URL
            // this[NavigationMixin.Navigate](
            //   {
            //     type: "standard__webPage",
            //     attributes: {
            //       url: "/flow/flowNewScreen",
            //     },
            //   },
            //   false, // Replaces the current page in your browser history with the URL
            // );
    }
}