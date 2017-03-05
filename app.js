var express = require('express');
var config = require('./config/config');

var index = require('./routes/index');
var clients = require('./routes/clients');

var mongoose = require('mongoose');

var app = express();

app.use('/', index);
app.use('/clients', clients);

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

app.get('/', (req, res) => {
  res.send('hello world');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
