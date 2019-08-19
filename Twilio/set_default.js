const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                .defaults()
                .update({defaults: {
                     defaults: {
                         assistant_initiation: 'task://hello-world',
                         fallback: 'task://hello-world'
                     }
                 }})
                .then(defaults => console.log(defaults.assistantSid));