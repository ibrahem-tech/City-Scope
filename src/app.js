const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//------ Routes --------//
app.post('/hello', (req,res) => {
    const name = req.body.name;
    res.send({
        message: 'welcome ${name}'
    })
})
//---Routes---//

app.use('/api/v1', v1); 

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