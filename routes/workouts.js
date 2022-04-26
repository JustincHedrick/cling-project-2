const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout')
const isLoggedIn = require('../config/auth')
;
// const isLoggedIn = require('../config/auth')

router.get('/', workoutCtrl.index);
router.get('/new', workoutCtrl.new);
router.post('/', isLoggedIn, workoutCtrl.create);

module.exports = router;