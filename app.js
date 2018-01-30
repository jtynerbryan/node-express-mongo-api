var express = require('express');
var app = express();
var db = require('./db');

// Adding UserController
var UserController = require('./user/Usercontroller');
app.use('/users', UserController)

module.exports = app;
