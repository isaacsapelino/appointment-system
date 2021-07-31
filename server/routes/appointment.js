const express = require('express');
const router = express.Router();
const appointment = require('../controllers/appointments.controllers');

router.get('/:id', appointment.getAppointment);
router.get('/', appointment.listAppointments);
router.post('/', appointment.createAppointment);

module.exports = router;