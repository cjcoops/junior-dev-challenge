var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');

// var async = require('async');
//
// require('dotenv').load();
// var google = require('google-distance-matrix');
// google.key(process.env.API_KEY);
// google.units('imperial');

router.get('/', function(req, res, next) {
  Candidate.find(function(err, candidates) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(candidates);
    }
  });
});

// router.get('/', function(req, res, next) {
//   Client.find(function(err, clients) {
//     if (err) console.log(err);
//     res.render('clients/index', {clients: clients});
//   });
// });
//
// router.get('/:id', function(req, res, next) {
//   Client.findById(req.params.id, function(err, client) {
//     if (err) console.log(err);
//     Candidate.find(function(err, candidates) {
//       if (err) console.log(err);
//
//       var origins = [client.postcode];
//       var destinations = candidates.map(function(candidate) {return candidate.postcode})
//
//       var results = []
//
//       google.matrix(origins, destinations, function (err, distances) {
//         if (err) {
//           return console.log(err);
//         }
//         if(!distances) {
//           return console.log('no distances');
//         }
//         if (distances.status == 'OK') {
//           for (var i = 0; i < candidates.length; i++) {
//             if (distances.rows[0].elements[i].status == "OK") {
//               results.push({
//                 "name":candidates[i].name,
//                 "distance": distances.rows[0].elements[i].distance,
//                 "duration": distances.rows[0].elements[i].duration
//               })
//             }
//           }
//           res.render('clients/show', {client: client, results: results});
//         }
//       });
//
//     });
//   });
// });

module.exports = router;
