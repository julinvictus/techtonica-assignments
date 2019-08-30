const inquirer = require('inquirer');
const eventfulKey = require("./keys.js").eventful;
const eventful = require('eventful-node');
const connection = require('./connection');
const client = new eventful.Client(eventfulKey);

module.exports.displaySearch = keyword => {
  client.searchEvents({
    keywords: keyword,
    location: 'San Francisco',
    date: 'Next Week'
  }, function(err, data){
    if(err){
      return console.error(err);
    }
    let resultEvent = data.search.events.event[0];
    
    console.log("===========================================================");
    console.log('Event: ');
    console.log('Title: ',resultEvent.title);
    console.log('Start time: ',resultEvent.start_time);
    console.log('Venue name: ',resultEvent.venue_name);
    console.log('Venue address: ',resultEvent.venue_address);
    console.log("===========================================================");

    // only inserts without asking user y/n:
    // connection.query('INSERT INTO events (name) VALUES ($1)', [resultEvent.title], (error, results) => {
    //   if (error) {
    //     throw error
    //   }
    //   console.log(`Event added to db`);
    // });

    //ask user y/n:
    let questions4 = [{
      type: 'confirm',
      name: 'save_to_db',
      message: 'Save this event? ',
      default: false
    }];
    inquirer.prompt(questions4).then(answers4 => {
      //if ( answers4 === { save_to_db: [ 'yes' ] } ){
      if ( answers4.save_to_db === true ){
        connection.query('INSERT INTO events (name) VALUES ($1)', [resultEvent.title], (error, results) => {
          if (error) {
            throw error
          }
          console.log("===========================================================");
          console.log(`Event added to db`);
        })
      } else {
        const fileCalledApp = require('./app.js');
        console.log("===========================================================");
        fileCalledApp.searchEventful();

      }
    });
    // end
  });
}


 //export a custom function that searches via Eventful API, displays the results AND stores some of the data into MySQL
