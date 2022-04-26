const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, ref: 'User', required: true
  },
  board: {
    name: {type: String},
    selected: {type: String, possibleValues: ['mk2', 'beast']}
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
})

module.exports = mongoose.model('Workout', workoutSchema);