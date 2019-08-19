const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

// Build task actions that say something and listens for a repsonse.
helloWorldTaskActions = {
  actions: [
    { say: 'Hi there, I\'m your virtual assistant! How can I help you?' },
    { listen: true }
  ]
};

// Create the hello_world task
// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                .tasks
                .create({
                  uniqueName: 'hello-world',
                  actions: helloWorldTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();