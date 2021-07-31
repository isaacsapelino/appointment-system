const express = require('express');
const router = express.Router();
const appointment = require('../controllers/appointments.controllers');

router.get('/:id', appointment.getAppointment);

module.exports = router;