// import { invokeWorkspaceAPI } from "c/workSpaceAPI";

const invokeWorkspaceAPI =(methodName, methodArgs) => {
  return new Promise((resolve, reject) => {
    const apiEvent = new CustomEvent("internalapievent", {
      bubbles: true,
      composed: true,
      cancelable: false,
      detail: {
        category: "workspaceAPI",
        methodName: methodName,
        methodArgs: methodArgs,
        callback: (err, response) => {
          if (err) {
              return reject(err);
          } 
          return resolve(response);
        }
      }
    });

    window.dispatchEvent(apiEvent);
  });
}

const LaunchSubTab=(subTabName, subTabIcon, compdef) =>{
    let encodedDef = btoa(JSON.stringify(compdef));
    invokeWorkspaceAPI('isConsoleNavigation').then(isConsole => {
    if (isConsole) {
      invokeWorkspaceAPI('getFocusedTabInfo').then(focusedTab => {
        console.log("***** in launchsubTab  ========>"+JSON.stringify(focusedTab));
        invokeWorkspaceAPI('openSubtab', {
          parentTabId: focusedTab.tabId,
          url: "/one/one.app#" +encodedDef,
          focus: true
        }).then(tabId => {
          invokeWorkspaceAPI('setTabLabel',{
                tabId: tabId,
                label: subTabName
            });
            invokeWorkspaceAPI('setTabIcon',{
                tabId: tabId,
                icon: subTabIcon,
            });
        });
      });
    }
  });
}

  /**
 * exporting function which can be imported in UI component
 */
export {LaunchSubTab}