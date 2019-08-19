const accountSid = 'x';
const authToken = 'x';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants
                .create({
                   friendlyName: 'Quickstart Assistant',
                   uniqueName: 'Autopilot: Assistant that can tell a joke (voice/SMS)'
                 })
                .then(assistant => console.log(assistant.sid));