var express = require('express');
var router = express.Router();
var Client = require('../models/client');
var Candidate = require('../models/candidate');

router.get('/', function(req, res, next) {
  Client.find(function(err, clients) {
    if (err) console.log(err);
    res.render('clients/index', {clients: clients});
  });
});

router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function(err, client) {
    if (err) console.log(err);
    Candidate.find(function(err, candidates) {
      if (err) console.log(err);
      res.render('clients/show', {client: client, candidates: candidates});
    });
  });
});

module.exports = router;
