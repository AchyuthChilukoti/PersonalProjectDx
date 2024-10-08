import { LightningElement } from 'lwc';
import serachAccs from '@salesforce/apex/CustomAccountSearch.retriveAccs';
import updateAccount from '@salesforce/apex/CustomAccountSearch.updateAccount';

const columns = [
    {
        label: 'Id',
        fieldName: 'Id',
        type: 'button',
        typeAttributes: { label: { fieldName: 'Id' }, variant: 'base'},
    },
    {
        label: 'Name',
        fieldName: 'Name',
        cellAttributes: {
            style: 'color: #f2860b;'
        }
    }, {
        label: 'Industry',
        fieldName: 'Industry',
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
    }, {
        label: 'Rating',
        fieldName: 'Rating',
        cellAttributes: {
            class:'testCSSClass'
        }
    },
    {
        label: 'Rating',
        fieldName: 'Rating',
        cellAttributes: {
            style: { fieldName: 'ratingStyle' }
        }
    }
];

export default class DynamicAccountSearch extends LightningElement {
    searchData;
    columns = columns;
    errorMsg = '';
    strSearchAccName = '';
    showAccountDetail = false;
    clickedRecordId;
    AccName = '';
    PhnValue = '';
    IndValue = '';
    RatingValue = '';
    showCalculator = false;
    isAccountSearch = true;
    ratingStyle = 'color: red;';

    get IndustryOptions() {
        return [
            { label: 'Agriculture', value: 'Agriculture' },
            { label: 'Energy', value: 'Energy' },
            { label: 'Education', value: 'Education' },
        ];
    }

    get ratingOptions() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' },
        ];
    }

    // handleAccountName(event) {
    //     this.errorMsg = '';
    //     this.strSearchAccName = event.currentTarget.value;
    // }

    handleSearch(event) {
            this.errorMsg = '';
            this.strSearchAccName = event.currentTarget.value;
        if(!this.strSearchAccName) {
            this.errorMsg = 'Please enter account name to search.';
            this.searchData = undefined;
            return;
        }

        serachAccs({strAccName : this.strSearchAccName})
        .then(result => {
            this.searchData = result;
        })
        .catch(error => {
            this.searchData = undefined;
            if(error) {
                if (Array.isArray(error.body)) {
                    this.errorMsg = error.body.map(e => e.message).join(', ');
                } else if (typeof error.body.message === 'string') {
                    this.errorMsg = error.body.message;
                }
            }
        }) 
    }

    viewAccountRecord(event){
        console.log("********* current clicked id : "+event.detail.row.Id);
        this.clickedRecordId = event.detail.row.Id;
        this.showAccountDetail = true;
        this.AccName=event.detail.row.Name;
        this.PhnValue=event.detail.row.Phone;
        this.IndValue=event.detail.row.Industry;
        this.RatingValue=event.detail.row.Rating;

    }

    handleSave(event){
        let updatedAccName = this.refs.AccName.value;
        let updatedPhone = this.refs.PhnValue.value;
        let updatedInd = this.refs.IndValue.value;
        let updatedRating = this.refs.RatingValue.value;
        console.log('updatedAccName =>'+updatedAccName);
        updateAccount({id: this.clickedRecordId, accName:updatedAccName, industry:updatedInd, rating:updatedRating, phone:updatedPhone});

        this.showCalculator = true;
        this.isAccountSearch = false;
    }
}