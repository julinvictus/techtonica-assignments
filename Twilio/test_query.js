const accountSid = 'x';
const authToken = 'x';
const client = require('twilio')(accountSid, authToken);

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
query = client.autopilot.assistants('x')
                                 .queries
                                 .create({
                                   language: 'en-US',
                                   query: 'Tell me a joke',
                                 })
                                 .then(query => console.log(query.results.task))
                                 .done();