const Workout = require('../models/workout');

module.exports = {
  index,
  new: newWorkout,
  show,
  create,
  delete: deleteWorkout,
}

function deleteWorkout(req, res, next) {
  Workout.findOne(
    {'workouts._id': req.body.id, 'workouts.user': req.user._id}.then(function(workout) {
      if (!workout) return res.redirect('/workouts');
      workout.remove(req.params.id);
      workout.save().then(function() {
        res.redirect('/workouts/index')
      }).catch(function(err) {
        return next(err);
      })
    })
  )
};

function show(req, res) {
  Workout.findById(req.params.id, function(err, workout){
    res.render('workouts/show', { workout })
  })
}

function create(req, res) {
  // req.body.Mk2 = !!req.body.Mk2;
  // req.body.beast = !!req.body.beast;
  req.body.user = req.user._id
  var workout = new Workout(req.body);
  workout.save(function(err) {
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