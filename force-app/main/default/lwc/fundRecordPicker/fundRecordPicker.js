import { LightningElement, track } from 'lwc';

export default class FundRecordPicker extends LightningElement {
    @track selectedFund;
    @track fundNames = ['Get Cloudy', 'TEST PA1']; // Initial list
    @track fundOptions = [];
    @track fundFilter;

    connectedCallback() {
        // Add more values to fundNames
        const additionalFunds = ['testcreate', 'Sample Data 132', 'Inte Assesment Account6'];
        this.fundNames = [...this.fundNames, ...additionalFunds]; // Using spread operator to merge arrays

        this.fundFilter = {
            criteria: [
                {
                    fieldPath: 'Name',
                    operator: 'in',
                    value: this.fundNames,
                },
            ],
            filterLogic: '1',
        };

        this.fundOptions = this.fundNames.map(name => {
            return { label: name, value: name };
        });
    }

    handleChange(event) {
        this.selectedFund = event.detail.value;
        console.log('Selected Fund: ', this.selectedFund);
    }
}
