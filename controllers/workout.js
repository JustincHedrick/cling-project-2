const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkout,
  show,
  create,
}

function show(req, res) {
  Workout.findById(req.params.id)
  res.render('workouts/show'), { title: 'Regimen Detail', workout};
}

function create(req, res) {
  req.body.Mk2 = !!req.body.Mk2;
  // req.body.beast = !!req.body.beast;
  req.body.user = req.body._id
  var workout = new Workout(req.body);
  workout.save(function(err) {
    console.log(workout);
    if (err) return res.redirect('/workouts/new');
    res.redirect(`/workouts/${workout._id}`);
  })
}

function newWorkout(req, res) {
  res.render('workouts/new'), { title: 'Create'}
};

function index(req, res) {
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts Created', workouts})
  })
}