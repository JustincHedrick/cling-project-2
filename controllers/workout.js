const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkout,
  show,
  create,
  delete: deleteWorkout,
}

function deleteWorkout(req, res, next) {
  req.body.user = req.user._id
  Workout.findOneAndDelete(
    {_id: req.params.id, }
  )
};

function show(req, res) {
  Workout.findById(req.params.id, function(err, workout){
    res.render('workouts/show', { workout })
  })
}

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  var workout = new Workout(req.body);
  workout.save(function(err) {
    console.log(err);
    if (err) return res.redirect('/workouts/new');
    res.redirect(`/workouts/${workout._id}`);
  })
}

function newWorkout(req, res) {
  res.render('workouts/new'), { title: 'Create'}
};

function index(req, res) {
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'Cling.', workouts})
  })
}