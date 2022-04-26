const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkout,
  create,
}

function create(req, res) {
  req.body.mk2 = !!req.body.mk2;
  req.body.mk2 = !!req.body.beast;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body.key;
  }
  var workout = new Workout(req.body);
  workout.save(function(err) {
    if (err) return res.redirect('/workouts/new');
    res.redirect(`/workouts/$workout._id`);
  })
}

function newWorkout(req, res) {
  res.render('workouts/new'), { title: 'Create Plan'}
};

function index(req, res) {
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts Created', workouts})
  })
}