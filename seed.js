// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var mongoose = require('mongoose');
var conn = mongoose.connect('mongod//localhost/destination');
var Destination = require("../models/destination");

var db = require('./models');

Destination.remove({}, function(err){
	if (err) {
		console.log("Error:", err);
	}
	});

 var destination = [
 {	name: "Mabul, Malaysia"
 },
 {description: "Perfect for divers with exotic marine life"
}, 
{features: "Perfect for divers with exotic marine life"
},
{activities: "Diving, Snorkeling"
}
];



 Destination.create(destination, function(err, destination){
   if (err){     
   	return console.log("Error:", err);
      } else {
      	console.log("Created" + destination);
      	mongoose.connection.close();
      }

 console.log("Created new destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});