// require express and other modules
var express = require('express'),

restful = require('restful');
app = express();
restful = require('node-restful'),
mongoose = restful.mongoose,
path = require('path'),


module.exports = app;

module.exports.getDestination = function(destination, limit){
  Destination.find(callback).limit(limit);
};

module.exports.getDestinationById = function(destination, limit){
  Destination.find(callback).limit(limit);
};

module.exports.getDescription = function(description, limit){
  Description.find(callback).limit(limit);
};

module.exports.getFeatures = function(features, limit){
  Features.find(callback).limit(limit);
};

module.exports.getActivities = function(activities, limit){
  Destination.find(callback).limit(limit);
};
// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', destination);


// mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/personal-api”);

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
var router = express.Router([]);
app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(app.router);
/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 //routes
 var Destination = require('/models/destination');
 var router = express.Router();

 //get travelsite route
 router.route('/destination').get(function(req, res){
  destination.find(function(err, destination) {
    if (err) {
      return res.send(err);
    }
    res.json(destination);
  });
 });

//post travelsite route
router.route('/destination').post(function(req, res){
  var destination = new destination(req. body);

  destination.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({message: 'Destination added'});
  });
 });
  router.route('/destination').put(function(req, res){
  var destination = new destination(req. body);

  destination.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({message: 'Destination added'});
  });
 });
  router.route('/destination').delete(function(req, res){
  var destination = new destination(req. body);

  destination.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({message: 'Destination added'});
  });
 });
  //put travelsite route
  // router.route('/travelsite/:id').put(function (req, res){
  //   travelsite.findOne({ _id: req.params.id}, function (err, travelsite)

  //     )
  // })
  //delete travelsite route

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Indigo253931/personal_api/README.md", // CHANGE ME
    base_url: "http://PRIME-DESTINATION.herokuapp.com", // CHANGE ME
    
    endpoints: [
      {method: "GET", 
      path: "/api", 
      description: "Describes all available endpoints"},
  
      {method: "GET", 
      path: "/api/profile", 
      description: "Data about me",
      name: "Monica",
      github_link: "https://github.com/Indigo253931",
      github_profile_image: "https://avatars1.githubusercontent.com/u/18249019?v=3&u=6888504cff009b01465a1120c7a94132342ec4f7&s=140", 
      current_city: "Denver", 
      pets: [{
        name: "Yoshi da Vinci",
        species: "Dog",
        breed: "Japanese Chin"}],
        request: {
          data: {
            post_title: "Monica's Profile",
            post_text:"Welcome to my profile!"

          }
        } ,
        response: {
          status_code: "201"
        }
    }, 
     {method: "GET", 
      path: "/api/destination", 
      city: "Denver",
      description: "Mile High"
             },
      
      // CHANGE ME
      {method: "POST", 
      path: "/api/destination", 
      description: "Post suggestions for a new destination", },
      
      {method: "PUT", 
      path: "/api/destination", 
      description: "Post a file for destination",
       "request": {},
        "response": {
            "status_code": "200"
        }},
      
      {method: "DELETE", 
      path: "/api/destination", 
      description: "Remove a destination"}
       // CHANGE ME
    ]
  });

});


/**********
 * SERVER *
 **********/

// listen on port 3000

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});