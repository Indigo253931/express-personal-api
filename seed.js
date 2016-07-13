// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var mongoose = require('mongoose');

var db = require('./models');

db.Destination.remove({}, function(err){
	if (err) {
		console.log("Error:", err);
	}
	});

 var destination = [
 {	name: "Mabul, Malaysia", 
features: ["Ocean, humid climate"],
activities: ["Diving", "Snorkeling"]
}, 
{name: "Denver, Colorado", 
features: ["Rocky mountains, dry climate"],
activities: ["Hiking", "Skiing", "Snowboarding", "Rock climbing"]
}
];


 db.Destination.show(destination, function(err, destination){
   if (err){     
      return console.log("Error:", err);
      } else {
         console.log("Found" + destination);
         mongoose.connection.close();
      }

 console.log("Found destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});


 db.Destination.create(destination, function(err, destination){
   if (err){     
   	return console.log("Error:", err);
      } else {
      	console.log("Created" + destination);
      	mongoose.connection.close();
      }

 console.log("Created new destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});



 db.Destination.update(destination, function(err, destination){
   if (err){     
      return console.log("Error:", err);
      } else {
         console.log("Updated" + destination);
         mongoose.connection.close();
      }

 console.log("Updated a destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});


 db.Destination.remove(destination, function(err, destination){
   if (err){     
      return console.log("Error:", err);
      } else {
         console.log("Deleted" + destination);
         mongoose.connection.close();
      }

 console.log("Deleted a destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});