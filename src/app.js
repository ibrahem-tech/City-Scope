const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport')
const cors = require ('cors')
const v1 = require('./routes/v1');

const app = express();

//------ DB cofig --------//

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
  useCreateIndex: true,
});
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
  });
  mongoose.connection.on('error', (err) => {
    console.error(`Failed to connected to the database: ${err}`);
  });

//------ middlewares --------//
app.use(logger('dev'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



//---Routes---//

app.use('/api/v1', v1); 


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  });
}

app.use((req, res, next) => {
   var err = new Error ('not found');
   err.staus = 404;
   next(err);
});

app.use((req, res ,next) => {
    const status = err.status || 500;
    const error = err.message || 'Error processing your request';

    res.status(status).send({
        error
    })
});

module.exports = app;