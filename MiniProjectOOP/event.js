class Ticket {
    constructor(type, price){
        this.type = type;
        this.price = price;
    }
}

class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
      this.addAvailableTickets = (type, price) => {
          const t = new Ticket(type, price);
          this.availableTickets.push(t);
      }
    }
}

const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");

event_obj1.addAvailableTickets("human", 299);
event_obj1.addAvailableTickets("vampire", 99);
event_obj2.addAvailableTickets("General Admission", 25);
event_obj2.addAvailableTickets("Floor Seating", 80);
event_obj3.addAvailableTickets("Orchestra", 300);
event_obj3.addAvailableTickets("Mezzanine", 200);

const event_array = new Array();

// pushing single object to an array
//event_array.push(event_obj1);
// pushing multiple objects to an array at once
event_array.push(event_obj1, event_obj2, event_obj3);

// in order to check whether the elements are pushed, use console.log
console.log(event_array);

$(document).ready(function() {
    let html = "";
    $.each(event_array, function(index, item) {
      html+= `<li>${item.name} - ${item.description}</li>`;
      html+= `<p>${item.availableTickets}</p>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});



