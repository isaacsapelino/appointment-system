const User = require('../models/users');

exports.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
        return res.status(400).send({
            message: `No user found in id ${id}`
        });
    }

    return res.send(user);
}

exports.createUser = async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    const user = User.create({
        firstName,
        lastName,
        username,
        password
    }).then(result => res.status(200).json(result)).catch(err => console.log(err));
}