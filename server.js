var express = require('express');
var app = express();
var router_user = require('./router.js');
var PORT = process.env.PORT || 8080;
var cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors())

require('dotenv').config();


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/ClientDb';

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/ClientDb');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://admdb:aladim2019@ds339458.mlab.com:39458/heroku_dhdmg4z4');

//mongodb://admdb:aladim2019@ds339458.mlab.com:39458/heroku_dhdmg4z4

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/', router_user);


app.listen(PORT, function() {
    console.log('Server is running on Port: ', PORT);
});

module.exports = app;