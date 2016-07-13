// require express and other modules
var express = require('express'),
app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', destination);
module.exports=router;

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
// app.use(express.static('models/index'));

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
db.Destination.show({_id}, function(err, destination){
  console.log(destination, req.params);
  res.json(destination[i]);
for(var i=0; i < destination.length; i++) {
    if (location._id === req.params.id) {
      break; 
    }
  }
  });
});

//post (create)
app.post('/api/destination', function(req, res){
  db.Destination.create({}, function(err, destination){
    var newDestination = req.body;
  destination.push(newDestination);
console.log(destination, req.body);
   res.json(newDestination);
  });
  });

//put (update)
app.put('/api/destination', function(req, res){
db.Destination.update(destination, function (err, destination){
res.send('destination');
if (err) {
  return console.log("Error updating a destination" + err);
}
}); 
});


//delete (remove)
app.delete('/api/destination/:id', function(req, res){
  db.destination.remove({}, function(err, destination){
 // db.Destination.remove({_id: :id?}
 console.log('destination delete', req.params);
  var destinationId = req.params.id;
  // find the index of the destination we want to remove
  var deleteDestinationIndex = destination.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('deleting destination with index', deleteDestinationIndex);
  var destinationToDelete = destination[deleteDestinationIndex];
  destination.splice(deleteDestinationIndex, 1);
  res.json(destinationToDelete);
  });

});

 //routes
 // //get route
 // destinationRouter.get('api/destination', function(req, res){
 //  destination.find(function(err, destination) {
 //    if (err) {
 //      return res.send(err);
 //    }
 //    res.json(destination);
 //  });
 // });

//  //get route id
//  destinationRouter.get('api/destination/:id', function(req, res){
//   var foundDestination;
//   var targetId = parseInt(req.params.id);
//   for(var i = 0; i < destination.length; i++){
//     if (destination[i].id === targetId) {
//   foundDestination=destination[i];
// }
//     res.json(destination);
//     res.send(destination);
//   }
//  });

// //post route
// destinationRouter.post('api/destination', function(req, res){
//   var destination = new destination(req.body.destination.create);

//   destination.save(function(err) {
//     if (err) {
//       return res.send(err);
//     }
//     res.send({message: 'Destination added'});
//     res.json(destination);
//   });
//  });
//   destinationRouter.put('api/destination/:id', function(req, res){
//   var destination = new destination(req. body);

//   destination.save(function(err) {
//     if (err) {
//       return res.send(err);
//     }
//     res.send({message: 'Destination added'});
//     res.json(destination);
//   });
//  });
//   destinationRouter.delete('api/destination/:id', function(req, res){
//   var destination = new destination(req. body);

//   destinationRouter.save(function(err) {
//     if (err) {
//       return res.send(err);
//     }
//     res.send({message: 'Destination added'});
//     res.json(destination);
//   });
// //  });
 
//  app.use("/destination", destinationRouter); 

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
        name: "Mabul, Malaysia",
      features: ["Ocean, humid climate"],
      activities: ["Diving", "Snorkeling"]
    }],

      location2: [{
        _id: 2,
        name: "Denver, Colorado",
      features:  ["Perfect for divers with exotic marine life"],
      activities: ["Hiking", "Skiing", "Snowboarding", "Rock climbing"]
    }], 
      request: {
          data: {
            post_title: "Destinations",
            post_text: "Welcome to paradise"
          }
        } ,
        response: {
          status_code: "201"
        }
             }
      
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