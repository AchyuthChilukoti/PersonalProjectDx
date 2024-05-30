import { LightningElement } from 'lwc';
import { LaunchSubTab } from 'c/consoleSubTabFramework';

export default class AccountSearchFormButton extends LightningElement {


    launchAccountSearch(){
        let compdef = {
            componentDef : "c:dynamicAccountSearch",
            attributes: {
                // attributeName: attributeValue,
                // attributeName: attributeValue,
                // attributeName: attributeValue,
            }
        };
        LaunchSubTab('Account Search', 'custom:custom18', compdef);
    }
}