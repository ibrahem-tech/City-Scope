const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users.controller');
const { route } = require('../app');

//Auth and sign up 

router.post('/register', userController.register);
router.post('/auth', userController.login);

//customize and protect the routes
router.all('*',(req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err,user) => {
        if(err || !user){
            const error = new Error('You are not authorized to acsess this area');
            error.stasus = 401;
            throw error;
        }

        //
        req.user = user;
        return next();
    })(req, res, next);


});

router.get(
    '/expence',
(req, res,next) => {

    return res.send({
        mesaage: 'hi, you are authenticated',
    user: req.user
    });
}
);
module.exports = router;