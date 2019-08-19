const accountSid = 'x';
const authToken = 'x';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('x')
                .defaults()
                .update({defaults: {
                     defaults: {
                         assistant_initiation: 'task://hello-world',
                         fallback: 'task://hello-world'
                     }
                 }})
                .then(defaults => console.log(defaults.assistantSid));