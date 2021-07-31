const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controllers');

router.get('/:id', user.getUser);
router.post('/', user.createUser);

module.exports = router;