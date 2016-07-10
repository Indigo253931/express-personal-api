// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
 var db = require('./models');

 var new_travelsite = {description: "Untouched beaches, humid with abundent vegetation."};

 db.Destination.create(new_destination, function(err, destination){
   if (err){     return console.log("Error:", err);
      }

 console.log("Created new destination", destination._id);
   process.exit(); // we're all done! Exit the program})
});