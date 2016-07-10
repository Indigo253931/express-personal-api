console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/3000');
var db = mongo.connection;

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/api/profile', function(req, res){
res.send('GET request to profile');
});

app.get('/api/destinaion', function(req, res){
res.send('GET request to destination');
});

app.listen(3000);
console.log('Running on port 3000...');

app.post();
app.get();
app.delete();

});
