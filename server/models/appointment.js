const { DataTypes } = require('Sequelize');
const sequelize = require('../db/database');

const appointmentSchema = sequelize.define('Appointments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    appointmentDate: DataTypes.DATE,
    appointmentTime: DataTypes.TIME
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = appointmentSchema;