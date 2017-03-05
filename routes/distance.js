var express = require('express');
var router = express.Router();

require('dotenv').load();

var google = require('google-distance-matrix');
var Candidate = require('../models/candidate');

var origins = ['San Francisco CA', '40.7421,-73.9914'];

google.key(process.env.API_KEY);
google.units('imperial');

router.get('/', function(req, res, next) {
  Candidate.find({}).lean().exec(function (err, candidates) {

    var destinations = candidates.map(function(candidate) {return candidate.postcode})

    google.matrix(origins, destinations, function (err, distances) {
      if (err) {
        return console.log(err);
      }
      if(!distances) {
        return console.log('no distances');
      }
      if (distances.status == 'OK') {
        res.json(distances.rows)
      }
    });
  });
})

module.exports = router;
