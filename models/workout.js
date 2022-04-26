const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  board: {
    name: {type: String},
    description: {type: String, possibleValues: ['']}
  },
  name: {
    type: String,
    required: true,
  },
  grip: {
    type: String,
    enum: ['Jug', 'Sloper', 'Pinch', 'Open-hand', 'Half-crimp', 'Full-crimp'],
    required: true,
  },
  hold: {
    type: String,
    enum: ['8mm', '10mm', '15mm', '20mm', '25mm', '30mm', '50mm', 'Top jug'],
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
  hangTime: {
    type: Number,
    required: true,
  },
  timestampes: true,
})

module.exports = mongoose.model('Workout', workoutSchema);