console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var restful = require('restful');


//Connect to mongoose
mongoose.connect('mongodb://localhost/destination');
var db = mongo.connection;

app.get('/', function(req, res){
	res.send('Hello World!');
});


//My Profile requests
app.get('/api/profile', function(req, res){
res.send('profile');
});


//"Prime Destination" HOMEPAGE requests

//get
app.get('/api/destination', function(req, res){
db.Destination.show(destination, function (err, getDestination){
if (err) {
	return console.log("Error finding the destinations" + err);
}
});
res.send('destination');
});
//get id
app.get('/api/destination/:id', function(req, res){
var destinationId = req.params.id;
db.Destination.find({_id: destinationId}, function (err, getDestination){
if (err) {
	return console.log("Error finding a destination by id" + err);
}
});
res.send('destination:id');
});
//post
app.post('/api/destination', function(req, res){
db.Destination.show(destination, function (err, postDestination){
if (err) {
	return console.log("Error posting a destination" + err);
}
});	
res.send('destination');
});
//put 
app.put('/api/destination', function(req, res){
db.Destination.show(destination, function (err, putDestination){
if (err) {
	return console.log("Error updating a destination" + err);
}
});	
res.send('destination');
});
//delete
app.delete('/api/destination', function(req, res){
db.Destination.show(destination, function (err, deleteDestination){
if (err) {
	return console.log("Error deleting a destination" + err);
}
});	
res.send('destination');
});


//"Prime Destination" DESCRIPTION requests
//get
app.get('/api/description', function(req, res){
db.Destination.show(description, function (err, getDescription){
if (err) {
	return console.log("Error finding the descriptions" + err);
}
});	
res.send('description');
});
//get id
app.get('/api/description/:id', function(req, res){
db.Destination.show(description, function (err, getDescription){
if (err) {
	return console.log("Error finding a description id" + err);
}
});	
res.send('description');
});
//post description
app.post('/api/description', function(req, res){
	db.Destination.show(description, function (err, postDescription){
if (err) {
	return console.log("Error posting a new description" + err);
}
});	
res.send('description');
});
//update description
app.put('/api/description', function(req, res){
	db.Destination.show(description, function (err, putDescription){
if (err) {
	return console.log("Error updating a description" + err);
}
});	
res.send('description');
});
//delete description
app.delete('/api/description', function(req, res){
	db.Destination.show(description, function (err, deleteDescription){
if (err) {
	return console.log("Error deleting a description;" + err);
}
});	
res.send('description');
});



//"Prime Destination" FEATURES requests
//get features
app.get('/api/features', function(req, res){
db.Destination.show(features, function (err, getFeatures){
if (err) {
	return console.log("Error finding the features" + err);
}
});	
res.send('features');
});
//get features id
app.get('/api/features/:id', function(req, res){
db.Destination.show(features, function (err, getFeatures){
if (err) {
	return console.log("Error finding a features id" + err);
}
});	
res.send('features');
});
//post features
app.post('/api/features', function(req, res){
	db.Destination.show(features, function (err, postFeatures){
if (err) {
	return console.log("Error posting a new feature" + err);
}
});	
res.send('features');
});
//update features
app.put('/api/features', function(req, res){
db.Destination.show(features, function (err, putFeatures){
if (err) {
	return console.log("Error updating a feature" + err);
}
});	
res.send('features');
});
//delete features
app.delete('/api/features', function(req, res){
	db.Destination.show(features, function (err, deleteFeatures){
if (err) {
	return console.log("Error deleting a feature" + err);
}
});	
res.send('features');
});


//"Prime Destination" ACTIVITIES requests
//get activities
app.get('/api/activities', function(req, res){
db.Destination.show(activities, function (err, getActivities){
if (err) {
	return console.log("Error finding an activity" + err);
}
});	
res.send('activities');
});
//get activities id
app.get('/api/activities/:id', function(req, res){	
db.Destination.show(activities, function (err, getActivities){
if (err) {
	return console.log("Error finding an activitys id" + err);
}
});	
res.send('activities');
});
//post activities
app.post('/api/activities', function(req, res){
db.Destination.show(activities, function (err, postActivities){
if (err) {
	return console.log("Error posting a new activity" + err);
}
});	
res.send('activities');
});
//put activities
app.put('/api/activities', function(req, res){
db.Destination.show(activities, function (err, updateActivities){
if (err) {
	return console.log("Error updating an activity" + err);
}
});		
res.send('activities');
});
//delete activities
app.delete('/api/activities', function(req, res){
db.Destination.show(activities, function (err, deleteActivities){
if (err) {
	return console.log("Error deleting an activity" + err);
}
});	
res.send('activities');
});




app.listen(3000);
console.log('Running on port 3000...');

app.locals.title = "My App";
app.locals.strftime = require ('strftime');
app.post();
app.get();
app.delete();

});
