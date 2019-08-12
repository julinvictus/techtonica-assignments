class Events{
  constructor(eventName, eventPrice){
    this.eventName = eventName;
    //this.eventType = eventType;
    //this.eventDate = eventDate;
    this.eventPrice = eventPrice;
  }
}

class Users{
  constructor(userName){
    this.userName = userName;
    //this.userInterests = userInterests;
    //this.userSavedEvents = [];
  }
  // userRegina.addEvent("Warriors Game");
  // addEvent(chosenEvent){
  //   this.userSavedEvents.push(chosenEvent);
  // }
}

class EventRecommender{
  constructor() {
  // All main properties should go here.
  this.events = [];
  this.users = [];
  }

  addEvent(newEvent) {
  // Adds a new Event to the System
  //let newEvent = new Events (eventName, eventType, eventDate, eventPrice);
  this.events.push(newEvent);
  }

  addUser(user) {
  // Adds a new User to the System
  this.users.push(user);
  }

  // saveUserEvent(){
  // //Allow users to save events to a personal Events array.
  // }

  deleteUser(userToDelete) {
  // Deletes a User from the system
  //1. find the array element with userName
  //currently we have this.users = [ {a}, {b}]
  // iterate thru this.users to match 'each element'.userName == userName
  // the filter method creates a new array with all elements that pass 
  this.users = this.users.filter( user => user.userName != userToDelete);
  // same as
  // this.users.filter( function (user) {
  //     user.userName != userName
  // };
  }
  
  deleteEvent(eventToDelete) {
  // Deletes the Event from the system
  this.events = this.events.filter( event => event.eventName != eventToDelete);
  }

  // filter(eventPrice){
  //     for (i=0; i<this.events; i++){
  //         this.events.type;
  //     }
  // }
  // filter(minPrice, maxPrice){
  //     let message = "Eligible tickets: ";
  //     let counter = 1;
  //     for (let i=0; i<this.events.length;i++) {
  //         if (this.events[i].eventPrice >= minPrice && this.events[i].eventPrice <= maxPrice) {
  //             message += counter + ". " + this.events[i].eventName + " ";
  //             counter++;
  //         }
  //     }
  //     if (counter ===1){
  //         message = "There are no available tickets";
  //     }
  //     return message;
  // }
  filter(value){
    let message = " ";
    let counter = 1;
    for (let i=0; i<this.events.length;i++) {
        if (this.events[i].eventPrice <= value) {
            message += counter + ". " + this.events[i].eventName + " - $" + this.events[i].eventPrice;
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
  
  //let my varibable called system be an instance of the class EventRecommender
  
  // When you instantiate an EventRecommender object, you should be able to do the following:
  let system = new EventRecommender();
  // Users:
  // Add a new User to the System
  let userYasmine = new Users("Yasmine");
  let userRegina = new Users("Regina");
  system.addUser(userYasmine);
  system.addUser(userRegina);
  system.addUser(new Users("Juliana"));
  console.log(system);
  // Allow users to save events to a personal Events array
  //userRegina.addEvent("Warriors Game");
  //userYasmine.addEvent("Harry Potter");
  //console.log(userRegina);
  //console.log(userYasmine);

  // Delete a User from the System
  //system.deleteUser("Regina");
  //console.log(system);

  // Event:
  // Add a new Event to the System
  //let eventCinza = new Events("Cinza", "show", "June4", 10);
  //let eventDeafKids = new Events("Deaf Kids", "show", "Aug28", 15);
  let eventCinza = new Events("Cinza", 8);
  let eventDeafKids = new Events("Deaf Kids", 15);
  let eventProvoke = new Events("Provoke", 9);
  system.addEvent(eventCinza);
  system.addEvent(eventDeafKids);
  system.addEvent(eventProvoke);
  console.log(system);
  // system.deleteEvent("Provoke");
  // console.log(system);
  // // Delete an Event from the System

  // Filter:
  // Note: You can use two separate filter functions or one if you'd like an extra challenge :)
  console.log(system.filter(10));

  //*************************************

  // file not used in this proj

// class created for user objects
class User {
  constructor(name){
      this.name = name;
  }
}

// class created for event objects
class Event {
  constructor(event){
      this.event = event;
  }
}

//took off ()
class EventRecommender {
  constructor(events, users) {
  this.events = [];
  this.users = [];
  }

  addEvent = (event) => {
      // Adds a new Event to the System
      const myEvent = new Event(event);
      this.events.push(myEvent);
  }

  addUser = (name) => {
      // Adds a new User to the System
      const userName = new User(name);
      this.users.push(userName);
  }

  saveUserEvent(){
  //Allow users to save events to a personal Events array.
    this.users.push(userName);
  }

  deleteUser(name) {
  // Deletes a User from the system
  //1. find the array element with userName
  //   this.users = [userYasmine, userRegina]
    delete User.name;
  }
 
  deleteEvent(event) {
  // Deletes the Event from the system
    delete Event.name;
  }

  filter(){
  }
}

const user1 = new User("Juliana A");
const user2 = new User("Jeremy T");
const user3 = new User("Laura D");

const event1 = new Event("Cinza show");
const event2 = new Event("Flexure show");
const event3 = new Event("Deaf Kids show");

console.log(user1);

const event_array = new Array();
event_array.push(event1, event2, event3);
console.log(event_array);

const user_array = new Array();
user_array.push(user1, user2, user3);
console.log(user_array);

// print events
$(document).ready(function() {
  let html = "";
  html += `<h1>EVENTS</h1>`;
  $.each(event_array, function(index, item) {
    html+= `<li>${item.event}</li>`;
  });
  html += `<h1>USERS</h1>`;
  $.each(user_array, function(index, item) {
      html+= `<li>${item.name}</li>`;
  });
  // insert final html into #event...
  $("#event").html(html);
});


  
  