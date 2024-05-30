import { LightningElement } from 'lwc';
import { LaunchSubTab } from "c/subTabFramework";

export default class LaunchSubTabLWC extends LightningElement {

    subTabName;
    subTabIcon;

    get IconOptions() {
        return [
        { label: 'Form Edit', value: 'custom:custom18' },
        { label: 'lightning', value: 'custom:custom9' },
        { label: 'Email', value: 'custom:custom23' },
        { label: 'Shopping', value: 'custom:custom93' }
        ];
    }

    handleTabName(event) {
        this.subTabName = event.target.value;
    }

    handleSelectIcon(event){
        this.subTabIcon = event.target.value;
    }

    launchNewSubTab(){
        let compdef = {
            componentDef : "c:newAccount",
            attributes: {
                // attributeName: attributeValue,
                // attributeName: attributeValue,
                // attributeName: attributeValue,
            }
        };

        LaunchSubTab(this.subTabName,this.subTabIcon,compdef);
    }
}