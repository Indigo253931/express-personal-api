
// module.exports = mongoose.model('Destination', destinationSchema);


// var Destination = require("../models/destination");

// var destinationController = {
// 	index: function(req, res){
// 		Destination.find({}, function(err, destination){
// 			res.render("destination/index", {destination: destination});
// 		});
// 	}
// };

// module.exports = destinationController;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Referenced Data
var DestinationSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	features: {
		type: [String]
	
	},
	activities: {
		type: [String]
	}
});

var Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;