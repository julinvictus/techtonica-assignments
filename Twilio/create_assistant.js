const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants
                .create({
                   friendlyName: 'Quickstart Assistant',
                   uniqueName: 'Autopilot: Assistant that can tell a joke (voice/SMS)'
                 })
                .then(assistant => console.log(assistant.sid));