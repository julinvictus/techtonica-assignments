const inquirer = require('inquirer');
//connection available to all
const connection = require('./connection');

 const app = {};

 app.startQuestion = (closeConnectionCallback) => {
  inquirer.prompt({
    type: 'list',
    message: 'What action would you like to do?',
    choices: [
      'Complete a sentence',
      'Create a new user',
      'Find one event of a particular type in San Francisco next week',
      'Mark an existing user to attend an event in database',
      'See all events that a particular user is going to',
      'See all the users that are going to a particular event',
      'Exit'
    ],
    name:'action',
  }).then((res) => {
    const continueCallback = () => app.startQuestion(closeConnectionCallback);

     if (res.action === 'Complete a sentence') app.completeSentence(continueCallback);
    if (res.action === 'Create a new user') app.createNewUser(continueCallback);
    if (res.action === 'Find one event of a particular type in San Francisco next week') app.searchEventful(continueCallback);
    if (res.action === 'Mark an existing user to attend an event in database') app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      closeConnectionCallback();
      return;
    }
  })
}

 app.completeSentence = (continueCallback) => {
  //YOUR WORK HERE
  let questions = [{
    type: 'input',
    name: 'color',
    message: 'Pick a color',
  },
  {
    type: 'input',
    name: 'item',
    message: 'Pick an object',
  }];
  inquirer.prompt(questions).then(answers => {
    console.log('\nAnswer:');
    console.log(`My favorite color is ${answers.color}, so my dream is to buy a ${answers.color} ${answers.item}`);
  });
  //End of your work
  continueCallback();
}

 app.createNewUser = (continueCallback) => {
  //YOUR WORK HERE
  let questions2 = [{
    type: 'input',
    name: 'user_name',
    message: 'Type your name',
  },
  {
    type: 'input',
    name: 'user_age',
    message: 'Type your age',
  }];
  inquirer.prompt(questions2).then(answers2 => {
    console.log('\nAnswer:');
    console.log(`Your name is ${answers2.user_name}, and you are ${answers2.user_age} years old`);

    const { user_name, user_age } = answers2;
    connection.query('INSERT INTO users (name, age) VALUES ($1, $2)', [user_name, user_age], (error, results) => {
      if (error) {
        throw error
      }
      console.log(`User added to db`);
    })
  });
  //End of your work
  continueCallback();
 }

 app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeEventsOfOneUser = (continueCallback) => {
  //YOUR WORK HERE

   console.log('Please write code for this function');
  //End of your work
  continueCallback();
}

 app.seeUsersOfOneEvent = (continueCallback) => {
  //YOUR WORK HERE
  
  //End of your work
  continueCallback();
}

 module.exports = app;