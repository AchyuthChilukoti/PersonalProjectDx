import { LightningElement } from 'lwc';

export default class LWCChildComponentOne extends LightningElement {
    connectedCallback() {
        const style=document.createElement('style');
        style.textContent = ` 
         html,body{
              overflow-y: hidden !important;
             
           }
          .navexConsoleTabset>.tabsetBody>.split-left {
            overflow: hidden !important;;
        }
        
        `;
         
        document.body.appendChild(style);
     }

}