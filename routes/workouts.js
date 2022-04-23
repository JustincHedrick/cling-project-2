const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');

router.get('/', workoutCtrl.index);

module.exports = router;