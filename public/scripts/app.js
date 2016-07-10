console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



//Connect to mongoose
mongoose.connect('mongodb://localhost/destination');
var db = mongo.connection;

//get requests
app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/api/profile', function(req, res){
res.send('profile');
});

app.get('/api/destination', function(req, res){
res.send('destination');
});

app.get('/api/destination/description', function(req, res){
res.send('description');
});
app.get('/api/destination/features', function(req, res){
res.send('features');
});
app.get('/api/destination/activities', function(req, res){
res.send('activities');
});
app.get('/api/destination/languages', function(req, res){
res.send('languages');
});

//post requests
app.post('/api/destination', function(req, res){
res.send('destination');
});

app.post('/api/destination/description', function(req, res){
res.send('description');
});
app.post('/api/destination/features', function(req, res){
res.send('features');
});
app.post('/api/destination/activities', function(req, res){
res.send('activities');
});
app.post('/api/destination/languages', function(req, res){
res.send('languages');
});


//put requests
app.put('/api/destination', function(req, res){
res.send('destination');
});
app.put('/api/destination/description', function(req, res){
res.send('description');
});
app.put('/api/destination/features', function(req, res){
res.send('features');
});
app.put('/api/destination/activities', function(req, res){
res.send('activities');
});
app.put('/api/destination/languages', function(req, res){
res.send('languages');
});

//delete requests
app.delete('/api/destination/description', function(req, res){
res.send('description');
});
app.delete('/api/destination/features', function(req, res){
res.send('features');
});
app.delete('/api/destination/activities', function(req, res){
res.send('activities');
});
app.delete('/api/destination/languages', function(req, res){
res.send('languages');
});


app.listen(3000);
console.log('Running on port 3000...');

app.locals.title = "My App";
app.locals.strftime = require ('strftime')
app.post();
app.get();
app.delete();

});
