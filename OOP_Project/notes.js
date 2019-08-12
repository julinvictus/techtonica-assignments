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

  
  