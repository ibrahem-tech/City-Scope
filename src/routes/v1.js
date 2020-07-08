const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users.controller');
const { route } = require('../app');

//Auth and sign up 

router.post('/register', userController.register);
router.post('/auth', userController.login);

router.get('/test', passport.authenticate('jwt', {session: false}), (req, res,next) => {
    return res.send({mesaage: 'hi, you are authenticated'});
})
module.exports = router;