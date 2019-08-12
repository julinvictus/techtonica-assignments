describe("EventRecommender", () => {
    const EventRecommender = require('../scripts.js');
    let er;
  
    beforeEach(() => {
      er = new EventRecommender();
    });
  
    describe("addEvent", () => {
      it("adds a new Event to the system", () => {
        er.addEvent("Screaming", 8);
        expect(er.events.length).toEqual(1);
      });
    });
    
    describe("addUser", () => {
      it("adds a new User to the system", () => {
        er.addUser("Change Me");
        expect(er.users.length).toEqual(1);
      });
    });
      
    describe("deleteUser", () => {
      it("removes a User from the system", () => {
        er.addUser("Maria");
        er.deleteUser("Maria");
        //expect(er.users.length).toEqual(0);
      });
    });
      
    describe("deleteEvent", () => {
      it("removes the event from the system", () => {
        er.addEvent("Iron Maiden");
        er.deleteEvent("Iron Maiden");
        //expect(er.events.length).toEqual(0);
      });
    });
  });