//controller for clients
//route returns all clients as json

var express = require('express');
var router = express.Router();
var Client = require('../models/client');

router.get('/', function(req, res, next) {
  Client.find(function(err, clients) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(clients);
    }
  });
});

module.exports = router;
