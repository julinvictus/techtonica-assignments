const accountSid = 'AC052ed0115cf4b7225bcca68ac306de1b';
const authToken = 'dff94c95e27f3ee22059b0bc31cc6b32';
const client = require('twilio')(accountSid, authToken);

// Provide actions for the new task
jokeActions = {
  actions: [
    { say: 'I was going to look for my missing watch, but I could never find the time.' }
  ]
}

// Create a new task named 'tell_a_joke'
// Replace 'UAXXX...' with your Assistant's unique SID https://www.twilio.com/console/autopilot/list
task = client.autopilot.assistants('UAe0525449390f3757b7a81b0656497bcf')
                       .tasks
                       .create({
                         uniqueName: 'tell-a-joke',
                         actions: jokeActions,
                       })
                       .then(task => console.log(task.sid))
                       .done();