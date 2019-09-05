const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventname: { type: String, required: true },

}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;