const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    match: /.{5,}/
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
    user: {type: Schema.Types.ObjectId, ref: 'User', require: true},
    userName: String,
    userAvatar: String,
}, {
  // createdAt & updatedAt properties
  timestamps: true
});


const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  boardUsed: {
    type: String,
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
  intensity: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User', required: true,
    userName: String,
  },
  userName: {
    type: String
  },
  reviews: [reviewSchema],
}, {
  timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);