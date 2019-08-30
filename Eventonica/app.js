const inquirer = require('inquirer');
const connection = require('./connection');
const eventfulAPI = require('./eventfulAPI.js');
//var eventful = require('eventful-node');
//var client = new eventful.Client('wjkWHd6kNtPhWPxb');

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
    if (res.action === 'Mark an existing user to attend an event in database') 
      continueCallback()
    app.matchUserWithEvent(continueCallback);
    if (res.action === 'See all events that a particular user is going to') 
    app.seeEventsOfOneUser(continueCallback);
    if (res.action === 'See all the users that are going to a particular event') app.seeUsersOfOneEvent(continueCallback);
    if (res.action === 'Exit') {
      continueCallback();
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
    console.log(`\nAnswer:`);
    console.log(`My favorite color is ${answers.color}, so my dream is to buy a ${answers.color} ${answers.item}`);
  });
  //End of your work
  //continueCallback();
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
    console.log(`\nAnswer:`);
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
  //continueCallback();
}

app.searchEventful = (continueCallback) => {
  //YOUR WORK HERE
  let questions3 = [{
    type: 'input',
    name: 'keyword',
    message: 'Pick a kind of event',
  }];
  inquirer.prompt(questions3).then(answers3 => {
    console.log(`\nAnswer:`);
    console.log(`You're looking for ${answers3.keyword}`);
    console.log(`\nFinding results now..`)

    const { keyword } = answers3;

    eventfulAPI.displaySearch(keyword);
    //console.log(eventfulAPI.displaySearch(keyword));
    //let searchResults = eventfulAPI.displaySearch(keyword);
    //console.log(searchResults);

    
  });
  //End of your work
  //continueCallback();
}

app.matchUserWithEvent = (continueCallback) => {
  //YOUR WORK HERE
  let questions4 = [{
    type: 'input',
    name: 'user_id',
    message: 'Type your user id: ',
  },
  {
    type: 'input',
    name: 'event_id',
    message: 'Type an event id: ',
  }];
  inquirer.prompt(questions4).then(answers4 => {
    const { user_id, event_id } = answers4;
    connection.query('INSERT INTO user_event (userid, eventid) VALUES ($1, $2)', [user_id, event_id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(`\nUser and event matched!`);
    })
  });
  //End of your work
  //continueCallback();
}

app.seeEventsOfOneUser = (continueCallback) => {
//   //YOUR WORK HERE
  let questions5 = [{
    type: 'input',
    name: 'user_id',
    message: 'Type an user id: ',
  }];
  inquirer.prompt(questions5).then(answers5 => {
    const { user_id } = answers5;
    //
    connection.query('SELECT events.name FROM events INNER JOIN user_event ON events.id = user_event.eventid INNER JOIN users ON users.id = user_event.userid WHERE users.id=$1', [user_id],(error, results) => {
      if (error) {
        throw error
      }
      // fix it to communicate with my db, not api
      console.log(results.rows); //WORKING
      // let resultEvents = data.search.events.event;
      // console.log('Received ' + data.search.total_items + ' events');
      // console.log('Event listings: ');
      // for ( let i =0 ; i < resultEvents.length; i++){
      //   console.log("===========================================================");
      //   console.log('Event: ');
      //   console.log('Title: ',resultEvents[i].title);
      //   console.log("===========================================================");
      // }
    })
  });//   //continueCallback();
 }

 app.seeUsersOfOneEvent = (continueCallback) => {
//   //YOUR WORK HERE
  
//   //End of your work
//   //continueCallback();
 }

 module.exports = app;
