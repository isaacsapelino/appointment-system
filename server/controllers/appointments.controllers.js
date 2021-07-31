const Appointment = require('../models/appointment');
const moment = require('moment');

exports.getAppointment = async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findOne({ where: { id } });
    if (!appointment) {
        return res.status(400).send({
            message: `No user found in id ${id}`
        });
    }

    return res.json(appointment);
}

exports.listAppointments = async (req, res) => {
    Appointment.findAll({
        attributes: ['id','title', 'desc', 'appointmentDate', 'appointmentTime']
    }).then(result => res.status(200).json(result).catch(err => console.log(err)));
}

exports.createAppointment = async (req, res) => {
    const { title, desc, appointmentDate, appointmentTime } = req.body;
    
    Appointment.create({
        title,
        desc,
        appointmentDate,
        appointmentTime,
    }).then(result => res.status(200).json(result).catch(err => console.log(err)));
}