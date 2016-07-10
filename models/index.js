//Setup
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

var Schema = mongoose.Schema;

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Destination = require("./destination.js");

module.exports = mongoose.model('Destination', destinationSchema);

var Destination = mongoose.model("Description", descriptionSchema);
var Destination = mongoose.model("Features", featuresSchema);
var Destination = mongoose.model("Activities", activitiesSchema);
var Destination = mongoose.model("Languages", languagesSchema);
// Referenced Data
var destinationSchema = new Schema({
	name: {
		type: String,
		default: "",
		required: true
	},
	description: [{
		type: Schema.Types.ObjectId,
		ref: 'Description'
	},
	features: {[
		type: Schema.Types.ObjectId,
		ref: 'Features',
		required: true
	},
	activities: {
		type: Schema.Types.ObjectId,
		ref: 'Activities',
		required: true
	}]
});

var descriptionSchema = new Schema({
 title: {
    type: String,
    default: ""
  }
})

var featuresSchema = new Schema({
 name: {
    type: String,
    default: ""
  }
})

var activitiesSchema = new Schema({
 name: {
    type: String,
    default: ""
  }
})
}


// Export
exports.Destination = Destination;
exports.Description = Description;
exports.Features = Features;
exports.Activities = Activities;
exports.Languages = Languages;
// var Destinations = restful.model('destinations', TravelSchema);
// Destinations.methods(['get', 'put', 'post', 'delete']);
// Travel.register(app, '/api/destinations');
//Get Travelsite
// var travelsite.get = module.exports = mongoose .model();
// travelsite.find


//Close connection on close

process.on('exit', function() {
  console.log('Exiting...');
  mongoose.disconnect(function() {
    console.log("Disconnected DB");
    process.exit(); 
  });
