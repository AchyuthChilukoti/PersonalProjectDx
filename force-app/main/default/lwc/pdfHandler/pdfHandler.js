import { LightningElement, api } from 'lwc';
import processPdf from '@salesforce/apex/PdfHandler.processPdf';
import { NavigationMixin } from 'lightning/navigation';

export default class PdfHandler extends NavigationMixin(LightningElement) {
    @api recordId; // Case Id

    handleButtonClick() {
        const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'; // Replace with your file URL

        processPdf({ fileUrl: fileUrl, caseId: this.recordId })
            .then(pdfUrl => {
                if (pdfUrl) {
                   let pdflink = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
                   window.open(pdflink, '_blank');
                   // Generate a URL to a User record page
                   console.log('pdfUrl=>'+pdfUrl);
                    // this[NavigationMixin.Navigate]({
                    //     type: 'standard__recordPage',
                    //     attributes: {
                    //         recordId: pdfUrl,
                    //         objectApiName: 'ContentDocument',
                    //         actionName: 'view',
                    //     },
                    // }); 
                    // this[NavigationMixin.Navigate](
                    //     {
                    //       type: "standard__webPage",
                    //       attributes: {
                    //        // url: "/sfc/servlet.shepherd/document/download/"+pdfUrl,
                    //        url : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    //       },
                    //     },
                    //     true, // Replaces the current page in your browser history with the URL
                    //   );
                } else {
                    console.error('Failed to get the PDF URL.');
                }
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }
}