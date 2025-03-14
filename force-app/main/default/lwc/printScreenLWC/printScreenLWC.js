import { LightningElement } from 'lwc';
import html2canvas from '@salesforce/resourceUrl/html2canvas'; // Add the library as a Static Resource
import jsPDF from '@salesforce/resourceUrl/jsPDF'; // Add the library as a Static Resource
import { loadScript } from 'lightning/platformResourceLoader';
import saveFile from '@salesforce/apex/ScreenshotController.saveFile'; // Apex method to save the PDF

export default class PrintScreenLWC extends LightningElement {
    // html2canvasLoaded = false;
    // jsPdfLoaded = false;

    // connectedCallback() {
    //     // Load the libraries
    //     Promise.all([
    //         loadScript(this, html2canvas),
    //         loadScript(this, jsPDF)
    //     ])
    //         .then(() => {
    //             this.html2canvasLoaded = true;
    //             this.jsPdfLoaded = true;
    //         })
    //         .catch(error => {
    //             console.error('Error loading libraries', error);
    //         });
    // }

    // handleTakeScreenshot() {
    //     console.log('**INSIDE Method');
    //     if (this.html2canvasLoaded && this.jsPdfLoaded) {
    //         html2canvas(document.body).then(canvas => {
    //             console.log('**INSIDE html2canvas Method');
    //             const imgData = canvas.toDataURL('image/png');
    //             const pdf = new jsPDF();
    //             pdf.addImage(imgData, 'PNG', 10, 10, 180, 160);
    //             const pdfBlob = pdf.output('blob');

    //             // Call Apex to save the file
    //             saveFile({ fileName: 'Screenshot.pdf', fileBlob: pdfBlob })
    //                 .then(() => {
    //                     console.log('PDF saved successfully');
    //                 })
    //                 .catch(error => {
    //                     console.error('Error saving PDF', error);
    //                 });
    //         });
    //     } else {
    //         console.error('Libraries not loaded yet');
    //     }
    // }

    screenshotArea;

    renderedCallback() {
        // This callback ensures the DOM has been rendered before trying to query the element
        this.screenshotArea = this.template.querySelector('#screenshotArea');
        console.log('screenshotArea element:', this.screenshotArea);
    }

    handleDebugCapture() {
        // Now use the `screenshotArea` element, which should be available
        if (this.screenshotArea) {
            console.log('Captured Content:', this.screenshotArea.innerText);
            alert('Content Captured: ' + this.screenshotArea.innerText);
        } else {
            console.error('Element not found!');
            alert('Element not found!');
        }
    }
}
