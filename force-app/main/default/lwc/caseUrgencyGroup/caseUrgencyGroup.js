import { LightningElement,api } from 'lwc';

export default class CaseUrgencyGroup extends LightningElement {
    @api categoryName;
    @api cases;

    get columns() {
        return [
            {
                label: 'Case Number',
                fieldName: 'caseLink',
                type: 'url',
                typeAttributes: {
                    label: { fieldName: 'CaseNumber' },
                    target: '_blank'
                }
            },
            {
                label: 'Subject',
                fieldName: 'Subject',
                type: 'text'
            },
            {
                label: 'Due Date',
                fieldName: 'Due_Date__c',
                type: 'date'
            },
            {
                label: 'Status',
                fieldName: 'Status',
                type: 'text'
            }
        ];
    }

    // Add computed field for Case URL
    get tableData() {
        console.log('Raw cases =>', JSON.stringify(this.cases));
        if (!this.cases) return [];
        return this.cases.map(c => ({
            ...c,
            caseLink: '/lightning/r/Case/'+c.Id+'/view'
        }));
    }
}