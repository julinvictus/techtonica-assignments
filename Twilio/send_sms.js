// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const twilio = require('twilio');
const accountSid = 'xxxxxxxxx25bcca68ac306de1b'; // add accountSid
const authToken = 'xxxxxxxxf3ee22059b0bc31cc6b32'; // add authToken
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Imma bot, hi',
     from: '+1xxxxxxx', // add twilio ph #
     to: '+1xxxxxxx' // add ph #
   })
  .then(message => console.log(message.sid)); 