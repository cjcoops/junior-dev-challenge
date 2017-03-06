var express = require('express');
var router = express.Router();

require('dotenv').load();

var google = require('google-distance-matrix');
var Candidate = require('../models/candidate');

var origins = ['S66 9JL'];
var destinations = ["N1 4FB", "E9 7QG"]

google.key(process.env.API_KEY);
google.units('imperial');

router.get('/', function(req, res, next) {

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
})

module.exports = router;
