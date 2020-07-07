const express = require('express');
const router = express.Router();


const userController = require('../controllers/users.controller');

//Auth and sign up 

router.post('/register', userController.register);
router.post('/auth', userController.login);

module.exports = router;