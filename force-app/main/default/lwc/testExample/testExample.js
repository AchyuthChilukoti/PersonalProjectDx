import { LightningElement } from 'lwc';


// import { NavigationMixin } from 'lightning/navigation';
// export default class TestExample extends NavigationMixin(LightningElement) {

//     navToAura(){
//         console.log("***** In Nav to Aura method");
//         this[NavigationMixin.Navigate]({
//             type: "standard__component",
//             attributes: {
//                 componentName: "c__NavtoAura"
//             },
//             state: {
//                 c__id: this.recordId
//             }
//         });
//     }
// }  

import { LaunchSubTab } from "c/consoleSubTabFramework";
export default class TestExample extends LightningElement {

    navToAura(){
        console.log("***** In Nav to Aura method");
       
        let compdef = {
            componentDef : "c:NavtoAura",
            attributes: {
                // attributeName: attributeValue,
                // attributeName: attributeValue,
                // attributeName: attributeValue,
            }
        };

        LaunchSubTab('NavigationTo Aura','utility:bug',compdef);
  
    }
}