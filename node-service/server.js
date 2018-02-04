'use strict';

global.rootdir = __dirname; //ROOT level directory
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require(rootdir+'/routes/index');


const app = express();
app.set('views', './views');
app.set('view engine', 'pug')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(rootdir+ '/app/public'));
app.use(express.static(rootdir+ '/node_modules'));
// Constants
const PORT = 8080;

// App
var router = app.use('/app',  routes);

// Define the landing page here


var router = app.use('/auth',  routes);
app.listen(PORT, function(){
    console.log(" Application started on port : " , PORT);
});

// Define the landing page here
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Auth service API!' });
});

