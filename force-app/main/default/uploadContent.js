var jsforce = require('jsforce');
var request = require('request');
const fs = require('fs');

var connection = new jsforce.Connection({
  loginUrl : 'https://login.salesforce.com'
});

let username = 'achyuth.chilukoti@infosys.com';
let password = 'GermanyS0104@';
connection.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }

  let entityContent = {
    "ReasonForChange" : "Initial Upload",
    "PathOnClient" : "/Users/achilukoti/Downloads/Rishabh_Resume.pdf",
    "ContentDocumentId" : "0015g00001LYcTMAA1"
   };
  const file = fs.readFileSync('/Users/achilukoti/Downloads/Rishabh_Resume.pdf'); // I let this use default encoding

  request.post({
    url: connection.instanceUrl + '/services/data/v53.0/sobjects/ContentVersion',
    auth: {
      bearer: connection.accessToken
    },
    formData: {
      entity_content: {
        value: JSON.stringify(entityContent),
        options: {
          contentType: 'application/json'
        }
      },
      VersionData: {
        value: file,
        options: {
          filename: '50MB-TESTFILE.ORG.pdf',
          contentType: 'application/octet-stream'
        }
      }
    }
  }, (err, response) => {
    if (err)
      reject(err)

    console.log(JSON.parse(response.body));
  });

});