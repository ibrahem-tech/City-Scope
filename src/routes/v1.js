const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/users.controller');

// Auth and Sign Up
router.post('/register', userController.regisetr);
router.post('/auth', userController.login);

// Customize auth message Protect the  routes
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err || !user) {
            const error = new Error('You are not authorized to access this area');
            error.status = 401;
            throw error;
        }

        //
        req.user = user;
        return next();
    })(req, res, next);
});

// -------------- Protected Routes -------------- //
router.get('/me', userController.me);

module.exports = router;