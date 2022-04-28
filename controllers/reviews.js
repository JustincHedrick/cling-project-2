const Workout = require('../models/workout')

module.exports = {
  create,
  delete: deleteReview,
}


function deleteReview(req, res, next) {
  Workout.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function (workout) 
  { 
    if (!workout) return res.redirect('/workouts');
    workout.reviews.remove(req.params.id);
    workout.save().then(function() {
      res.redirect(`/workouts/${workout._id}`);
    }).catch(function(err) {
      return next(err);
    })
  })
}

function create(req, res) {
  Workout.findById(req.params.id, function(err, workout) {
    req.body.user = req.user._id
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    workout.reviews.push(req.body);
    workout.save(function(err) {
      console.log(workout)
      res.redirect(`/workouts/${workout._id}`)
    })
  })
}