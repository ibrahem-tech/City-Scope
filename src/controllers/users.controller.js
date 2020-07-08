const jwt = require('jsonwebtoken');
const user = require('../models/user.model')
const { use } = require("../app");
const User = require('../models/user.model');

const userController = {};

userController.register = async (req, res, next) => {
    const {name , email, password, joined } = req.body;
    const newUser = new User({
        name,
        email, 
        password,
        joined

    });

    try {
        const user = await newUser.save();
        return res.send({ user });
    }catch(e) {
        if (e.code === 11000 && e.name === 'MongoError') {
            const error = new Error(`Email address ${newUser.email} is already taken`);
            error.status = 400
            next(error);
        }else {
            next(e);
        }
        
    }
  
  };
userController.login = async (req, res, next) => {
  //Username, password in erquest
  const {email, password} = req.body;
  //check username and password are ok
  try{
      const user = await User.findOne({ email });
      if(!user){
          const err = new console.error('Yhe email ${email} was not found i our system');
          err.status = 401;
          next(err);   
      }
      
      user.isPasswordMatch(password, user.password, (err, matched) => {
          if (matched){
              //If credi ok, then create JRT and return
              //Secret
              //Expiration

            const secret = process.env.JWT_SECRET;
            const expire = process.env. JWT_EXPIRATION

            const token = jwt.sign({_id: user._id}, secret, {expiresIn: expire})
           return res.send({token});



          }

          res.status(401).send({
              error: 'Invalid email or password'
          })


      });

  }catch(e){
      next(e);
  }
  



};


 


module.exports = userController;