class Events{
  constructor(eventName, eventPrice){
    this.eventName = eventName;
    this.eventPrice = eventPrice;
  }
}

class Users{
  constructor(userName){
    this.userName = userName;
  }
}

class EventRecommender{
  constructor() {
  // All main properties should go here.
  this.events = [];
  this.users = [];
  }

  addEvent(newEvent) {
  // Adds a new Event to the System
  this.events.push(newEvent);
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(user);
  }

  deleteUser(userToDelete) {
  // Deletes a User from the system
  this.users = this.users.filter( user => user.userName != userToDelete);
  }
  
  deleteEvent(eventToDelete) {
  // Deletes the Event from the system
  this.events = this.events.filter( event => event.eventName != eventToDelete);
  }

  filter(value){
    // filter events that are < than parameter "value"
    let message = " ";
    let counter = 1;
    for (let i=0; i<this.events.length;i++) {
        if (this.events[i].eventPrice <= value) {
            message += `${counter}. ${this.events[i].eventName} - $${this.events[i].eventPrice}<br>`;
            counter++;
        }
    }
    if (counter ===1){
        message = "We couldn't find any tickets";
    }
    return message;
  }
}

//below instantiate class -- creating object of that class
let system = new EventRecommender();

// Add users to the system
let userYasmine = new Users("Yasmine");
let userRegina = new Users("Regina");
system.addUser(userYasmine);
system.addUser(userRegina);
system.addUser(new Users("Juliana"));

// Delete a User from the System
//system.deleteUser("Regina");
//console.log(system);

// Add events to the system
let eventCinza = new Events("Cinza", 8);
let eventDeafKids = new Events("Deaf Kids", 15);
let eventProvoke = new Events("Provoke", 9);
system.addEvent(eventCinza);
system.addEvent(eventDeafKids);
system.addEvent(eventProvoke);
console.log(system);

//module.exports = EventRecommender;

  
  