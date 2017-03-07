//a script to import the data into the database

'use strict';

var config = require('./config/config');
var mongoose = require('mongoose');
var Client = require('./models/client');
var Candidate = require('./models/candidate');

var clientData = require('./Data/locations.json')
var candidateData = require('./Data/candidates-short.json')

mongoose.connect(config.db)

mongoose.connection.on("error", console.error.bind(console, "connection error"));

// mongoose.connection.once("open", function() {
//   console.log("Connection succeeded.");
//   for (var i in mongoose.connection.collections) {
//     mongoose.connection.collections[i].remove(function() {})
// }
// });

mongoose.connection.once("open", function() {
  console.log("Connection succeeded.");

  clientData.Clients.forEach(function(client) {
    var newClient = new Client(client);
    newClient.save(function(err) {
      if (err) throw err;
      console.log(newClient.name + " SAVED!")
    })
  })

  candidateData.Candidates.forEach(function(candidate) {
    Candidate.create(candidate,function(err) {
      if (err) throw err;
      console.log(candidate.name + " SAVED!")
    })
  })
});
