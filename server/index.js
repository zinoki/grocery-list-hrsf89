// import { saveToDB } from '../database';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dbStuff = require('../database/index.js');
var saveToDB = dbStuff.saveToDB;
var getFromDB = dbStuff.getFromDB;


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/groceries', function(req, res) {
  res.send('get to homepage')
}) 


app.get('/groceries', function(req, res) {
  console.log(req.body);
}) 

app.post('/groceries', function(req, res) {
  saveToDB(req.body);
  // res.send(req.body)
  // put in database
  // do a find in database
  // return results back in res.send to client
})


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

