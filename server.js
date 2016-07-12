// require express and other modules
var express = require('express'),
app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', destination);


/************
 * DATABASE *
 ************/

 var Destination = require('./models/destination');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
//var router = express.Router([]);
app.use(express.static('public'));
app.use(express.static('models/index'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/', function(req, res){
  res.send('Hello World!');
});


//My Profile requests
app.get('/api/profile', function(req, res){
 res.json({description: "Data about me",      
  name: "Monica",
      github_link: "https://github.com/Indigo253931",
      github_profile_image: "https://avatars1.githubusercontent.com/u/18249019?v=3&u=6888504cff009b01465a1120c7a94132342ec4f7&s=140", 
      current_city: "Denver", 
      pets: [{
        name: "Yoshi da Vinci",
        species: "Dog",
        breed: "Japanese Chin"}]});
          });


//"Prime Destination" HOMEPAGE requests

//get
app.get('/api/destination', function(req, res){
res.json({ _id: 1,
  location: [{name: "Denver, Colorado",
      description: "Mile High adventures"}],
      location2: [{
        _id: 2,
        name: "Mabul, Malaysia",
      description:  "Perfect for divers with exotic marine life"}], 
});
});

//get id
Destination.findById('/api/destination/:id', function(req, res){
  console.log('destination show', req.params);
for(var i=0; i < destination.length; i++) {
    if (location._id === req.params.id) {
      res.json(destination[i]);
      break; 
    }
}
});

//post
app.post('/api/destination', function(req, res){
  console.log('new destination', req.body);
  var newDestination = req.body;
  destination.push(newDestination);
  res.json(newDestination);
  });

//put 
app.put('/api/destination', function(req, res){
db.Destination.update(destination, function (err, putDestination){
if (err) {
  return console.log("Error updating a destination" + err);
}
}); 
res.send('destination');
});


//delete
app.delete('/api/destination/:id', function(req, res){
 console.log('destination delete', req.params);
  var destinationId = req.params.id;
  // find the index of the destination we want to remove
  var deleteDestinationIndex = destination.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('deleting book with index', deleteDestinationIndex);
  var destinationToDelete = books[deleteDestinationIndex];
  destination.splice(deleteDestinationIndex, 1);
  res.json(destinationToDelete);
});




 //routes

 var router = express.Router();

 //get route
 router.route('/destination').get(function(req, res){
  destination.find(function(err, destination) {
    if (err) {
      return res.send(err);
    }
    res.json(destination);
  });
 });

//post route
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
 

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    my_endpoints: true, 
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
      path: "/api/destination/:id", 
      location: [{
        _id: 1,
        name: "Denver, Colorado",
      description: "Mile High adventures"}],

      location2: [{
        _id: 2,
        name: "Mabul, Malaysia",
      description:  "Perfect for divers with exotic marine life"}], 
      request: {
          data: {
            post_title: "Destinations",
            post_text: "Welcome to paradise",
          }
        } ,
        response: {
          status_code: "201"
        }
             },
      
      // CHANGE ME
      {method: "POST", 
      path: "/api/destination", 
      description: "Post a new destination", },
      
      {method: "PUT", 
      path: "/api/destination", 
      description: "Post a file for destination",
      request: {
          data: {
            post_title: "Malaysia",
            post_text:"Welcome to paradise"
          }
        } ,
        response: {
          status_code: "201"
        }
        },
      
      {method: "DELETE", 
      path: "/api/destination/:id", 
      description: "Remove a destination",
      request: {
          data: {
            post_title: "Remove",
            post_text:"Remove this destination location"
          }
        } ,
        response: {
          status_code: "201"
        }}
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