var express = require('express');
var router = express.Router();
var Client = require('../models/client');

router.get('/', function(req, res, next) {
  Client.find(function(err, clients) {
    if (err) console.log(err)
    res.render('clients/index', {clients: clients})
  });
});

module.exports = router;
