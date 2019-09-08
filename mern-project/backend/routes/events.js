const router = require('express').Router();
let Event = require('../models/event.model');

// GET events
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST add event
router.route('/add').post((req, res) => {
  const eventname = req.body.eventname;
  const atendees = req.body.atendees;

  const newEvent = new Event({eventname, atendees});

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;