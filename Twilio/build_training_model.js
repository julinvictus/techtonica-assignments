const accountSid = 'x';
const authToken = 'x';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('x')
                .modelBuilds
                .create({uniqueName: 'v0.2'})
                .then(model_build => console.log(model_build.sid));