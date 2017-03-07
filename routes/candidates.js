//controller for candidates
//route returns all candidates as json

var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');

router.get('/', function(req, res, next) {
  Candidate.find(function(err, candidates) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(candidates);
    }
  });
});

module.exports = router;
