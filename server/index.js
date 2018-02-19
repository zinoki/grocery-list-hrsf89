var express = require('express');
var app = express();
var bodyParser = require('body-parser');


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
  res.send(req.body)
})


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

