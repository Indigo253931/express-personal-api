// require express and other modules
var express = require('express'),
app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.use(express.static('public'));

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

//get (find) 
app.get('/api/destination', function(req, res){

db.Destination.find({}, function(err, destination){
  console.log(destination);
  res.json(destination);
});
});


//get id (show)
app.get('/api/destination/:id', function(req, res){
var destinationId = req.params.id;
db.Destination.findById(destinationId, function(err, destination){
  console.log('destination show', req.params.id);
  res.json(destination);
});

});

//post (create)
app.post('/api/destination', function(req, res){
  var newDestination = req.body;
  db.Destination.create(newDestination, function(err, destination){
    console.log('destination create', req.body);
    res.json(destination);
  });
});
 
//PUT (UPDATE)
app.put('/api/destination/:id', function(req, res){
var updateDestination = req.params.id;
db.Destination.update({_id: updateDestination}, req.body, function (err, destination){
  console.log('destination updated', req.body);
db.Destination.findById(updateDestination, function(err, destination){
res.json(destination);
  });
}); 
});

//DELETE (REMOVE)
app.delete('/api/destination/:id', function(req, res){
  var deleteDestination = req.params.id;
  db.Destination.remove({_id: deleteDestination}, function(err, destination){
    res.json({});
  });
});

//add error handling ()

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    my_endpoints: true, 
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Indigo253931/personal_api/README.md", 
    base_url: "http://PRIME-DESTINATION.herokuapp.com", 
    
    endpoints: [
      {method: "GET", 
      path: "/api", 
      description: "Describes all available endpoints"},
  
      {method: "GET", 
      path: "/api/profile", 
      description: "About",
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
            post_text:"Welcome to my profile!"}
        },
        response: {
          status_code: "201"
        }
      },
      {method: "GET", 
      path: "/api/destination/:id", 
      location: [{ 
      _id: 1,
      name: "Mabul, Malaysia",
      features: ["Ocean, humid climate"],
      activities: ["Diving", "Snorkeling"]
     },

     {method: "POST", 
       path: "/api/destination", 
       description: "Post a new destination"},

       {method: "PUT", 
        path: "/api/destination/:id", 
        description: "Edit a destination"},

       {method: "DELETE", 
       path: "/api/destination/:id", 
      description: "Remove a destination"}
    ]}]
    });

   });

//      

/**********
 * SERVER *
 **********/

// listen on port 3000

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is up and running on http://localhost:3000/');
});