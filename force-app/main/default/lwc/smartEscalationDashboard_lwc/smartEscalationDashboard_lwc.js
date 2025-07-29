import { LightningElement } from 'lwc';
import getEscalationCases from '@salesforce/apex/CaseDetails_SmartEscalationDashboard.getEscalationCases';

export default class SmartEscalationDashboard_lwc extends LightningElement {

    criticalCases = [];
    warningCases = [];
    safeCases = [];

    connectedCallback() {
        this.loadData();
    }

    loadData() {
        getEscalationCases()
            .then(result => {
                console.log('Result from Apex =>'+JSON.stringify(result));
                this.criticalCases = result.criticalCases;
                this.warningCases = result.warningCases;
                this.safeCases = result.safeCases;
            })
            .catch(error => {
                console.error('Error loading escalation cases:', error);
            });
    }

    refreshData() {
        this.loadData();
    }

}