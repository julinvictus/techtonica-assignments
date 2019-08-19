const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                .modelBuilds
                .create({uniqueName: 'v0.2'})
                .then(model_build => console.log(model_build.sid));