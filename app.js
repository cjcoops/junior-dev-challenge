var express = require('express');
var config = require('./config/config');

var index = require('./routes/index');
var clients = require('./routes/clients');
var distance = require('./routes/distance');

var mongoose = require('mongoose');

var app = express();

app.use('/', index);
app.use('/clients', clients);
app.use('/distance', distance);

app.set('view engine', 'ejs');

if(process.env.NODE_ENV === "test"){
  mongoose.connect(config.test_db);
  app.listen(config.test_port, function() {
    console.log('listening on '+ config.test_port);
  });
} else {
  mongoose.connect(config.db);
  app.listen(config.port, function() {
    console.log('listening on '+ config.port);
  });
}
