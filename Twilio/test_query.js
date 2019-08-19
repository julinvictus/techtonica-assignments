const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
query = client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                                 .queries
                                 .create({
                                   language: 'en-US',
                                   query: 'Tell me a joke',
                                 })
                                 .then(query => console.log(query.results.task))
                                 .done();