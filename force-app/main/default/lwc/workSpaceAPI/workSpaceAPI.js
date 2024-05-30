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

  /**
 * exporting function which can be imported in UI component
 */
export {invokeWorkspaceAPI}