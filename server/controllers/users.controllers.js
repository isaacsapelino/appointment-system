const User = require('../models/users');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
require('dotenv').config;

const PRIV_KEY = fs.readFileSync((path.resolve('rsa_key_pairs', 'rsa_private_08022021.pem')));
const PUB_KEY = fs.readFileSync((path.resolve('rsa_key_pairs', 'rsa_public_08022021.pem')));

exports.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
        return res.status(400).send({
            message: `No user found in id ${id}`
        });
    }

    return res.json(user);
}

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;

        if (!(email && password && firstName && lastName))
            res.status(400).send('All input must not be empty');
        
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(400).send('User already exists. Please login.');
        }

        const user = User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            username,
            password
        }).then(result => {
            console.log(result.dataValues);
            const token = jwt.sign(result.dataValues, PRIV_KEY, {
                expiresIn: "2h",
                algorithm: 'RS256',
            });
            user.token = token;
            res.status(201).json(user);
        });

    } catch (err) {
        console.log(err);
    }
}