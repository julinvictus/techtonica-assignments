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
