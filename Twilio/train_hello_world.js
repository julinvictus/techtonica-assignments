const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

phrases = [
    'hello',
    'hi',
    'Hello',
    'Hi there'
]

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
phrases.forEach(function(item) {
  sample = client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                           .tasks('hello-world')
                           .samples
                           .create({
                             language: 'en-us',
                             taggedText: item,
                           })
                           .then(sample => console.log(sample.sid))
                           .done();
})