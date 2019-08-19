const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

phrases = [
    'Tell me a joke',
    'Tell me a joke',
    'I\'d like to hear a joke',
    'Do you know any good jokes?',
    'Joke',
    'Tell joke',
    'Tell me something funny',
    'Make me laugh',
    'I want to hear a joke',
    'Can I hear a joke?',
    'I like jokes',
    'I\'d like to hear a punny joke'
]

// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
// Replace 'UDXXX...' with the SID for the task you just created.
phrases.forEach(function(item) {
  sample = client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                           .tasks('tell-a-joke')
                           .samples
                           .create({
                             language: 'en-us',
                             taggedText: item,
                           })
                           .then(sample => console.log(sample.sid))
                           .done();
})