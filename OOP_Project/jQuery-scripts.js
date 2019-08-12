// print events using jQuery
$(document).ready(function() {
    let htmlEvents = "";
    $.each(system.events , function(index, item) {
      htmlEvents+= `<li>${item.eventName} - $${item.eventPrice} <button id="${item.eventName}" type="submit">Delete</button></li>`;
    });
    $("#event").html(htmlEvents);
});

// filter cheaper than 10
$("#filter").on('click', function(){
    let filteredItems = system.filter(10);
    $("#filteredEvents").html(filteredItems);
})

// add events
$("#eventsForm").on('submit', function(e){
  let textEventName = $('#addToEventsList').val();
  let textEventPrice = $('#addToEventsListPrice').val();
  let event = new Events(textEventName, textEventPrice);
  system.addEvent(event);
  console.log(`Event just added: ${event.eventName} - price: ${event.eventPrice}`);
  $('#event').append($('<li>').append(`${event.eventName} - $ ${event.eventPrice} <button id="${event.eventName}" type="submit">Delete</button>`));
  $('#addToEventsList').val('');
  e.preventDefault();
});

// delete events
$('#event').on('click', 'button', function(){
	let text = this.id;
    system.deleteEvent(text);
    console.log(`Event just deleted: ${text}`);
	$(this.parentNode).remove();
});

// print users using jQuery
$(document).ready(function() {
    let htmlUsers = "";
    $.each(system.users, function(index, item) {
        htmlUsers+= `<li>${item.userName} <button id="${item.userName}" type="submit">Delete</button></li>`;
    });
    $("#user").html(htmlUsers);
});

//add users
$("#usersForm").on('submit', function(e){
    let text = $('#addToUsersList').val();
    let user = new Users(text);
    system.addUser(user);
    console.log(`User just added: ${user.userName}`);
    $('#user').append($('<li>').append(`${user.userName} <button id="${user.userName}" type="submit">Delete</button>`));
    $('#addToUsersList').val('');
    e.preventDefault();
});

// delete users
$('#user').on('click', 'button', function(){
    let text = this.id;
    system.deleteUser(text);
    console.log(`User just deleted: ${text}`);
	$(this.parentNode).remove();
});

