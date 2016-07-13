//Setup
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");
//Dependencies
// var express = require('express');
// var app = espress();
// var bodyParser=require('body-parser');


var Destination = require('./destinations');

// var Schema = mongoose.Schema;


//Configuration
// mongoose.connect('mongodb://localhost/destination');
// process.on('exit', function() {mongoose.disconnect(); });
// app.set("view engine", "ejs");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(_dirname + '/public'));
// var port = 3000;

// //Controllers
// var destinationController= require("./controllers/destinationController");

// //Routes
// app.get("/destination", destinationController.index);

// //Start server
// app.listen(port, function(){
// 	console.log("app is running on port:", port);
// });

// module.exports.Campsite = require("./campsite.js.example");


//Close connection on close
module.exports.Destination = Destination;

