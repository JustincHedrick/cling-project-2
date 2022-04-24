const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkout,
}

function newWorkout(req, res) {
  res.render('workouts/new'), { title: 'Create'}
};

function index(req, res) {
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts Created', workouts})
  })
}