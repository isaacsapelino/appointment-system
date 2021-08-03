const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controllers');
const auth = require('../middleware/auth');

router.get('/:id', user.getUser);
router.post('/', user.createUser);
router.post('/login', user.loginUser)
router.post('/test', auth.auth, (req, res, next) => {
    res.status(200).json(req.jwt);
});

module.exports = router;