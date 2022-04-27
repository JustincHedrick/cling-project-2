const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout')
const isLoggedIn = require('../config/auth');


router.get('/', workoutCtrl.index);
router.get('/new', workoutCtrl.new);
router.get('/:id', workoutCtrl.show);
router.post('/', isLoggedIn, workoutCtrl.create);
router.delete('/:id', isLoggedIn, workoutCtrl.delete);

module.exports = router;