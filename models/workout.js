const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  boardUsed: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  grip: {
    type: String,
    required: true,
  },
  hold: {
    type: String,
    required: true,
  },
  set: {
    type: Number,
    required: true,
  },
  rep: {
    type: Number,
    required: true,
  },
  hTime: {
    type: Number,
    required: true,
  },
  rTime: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Workout', workoutSchema);