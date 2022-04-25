const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  
})

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    enum: ['Beast Maker: 2000', 'Tension: Mk2', ]
  },
  grip: {
    type: String,
    enum: ['Jug', 'Sloper', 'Pinch', 'Open-hand', 'Half-crimp', 'Full-crimp']
  },
  hold: {
    type: String,
    enum: ['8mm', '10mm', '15mm', '20mm', '25mm', '30mm', '50mm', 'Top jug']
  },
  set: {
    type: Number,
  },
  rep: {
    type: Number,
  },
  hangTime: {
    type: Number,
  },
  boards: [boardSchema]
})