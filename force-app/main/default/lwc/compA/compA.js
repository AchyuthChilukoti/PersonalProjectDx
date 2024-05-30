import { LightningElement, wire } from 'lwc';
import { getListInfosByName } from 'lightning/uiListsApi';

export default class CompA extends LightningElement {

    @wire(getListInfosByName, {
        names: [
            'Account.AllAccounts',
            'Account.MyAccounts',
            'Account.RecentlyViewedAccounts'
        ]
    })
    consumeListInfosByName({ data, error }) {
        if (data && data.results) {
            console.log(JSON.parse(JSON.stringify(data.results)));
        }
    }
}