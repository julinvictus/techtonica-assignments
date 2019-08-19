const accountSid = 'x';
const authToken = 'x';
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
client.autopilot.assistants('x')
                .tasks
                .create({
                  uniqueName: 'hello-world',
                  actions: helloWorldTaskActions,
                })
                .then(assistant => console.log(assistant.sid))
                .done();