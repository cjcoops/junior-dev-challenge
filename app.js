const express = require('express');
const config = require('./config/config');

const index = require('./routes/index');
const clients = require('./routes/clients');

const app = express();

app.use('/', index);
app.use('/clients', clients);

if(process.env.NODE_ENV === "test"){
  app.listen(config.test_port, function() {
    console.log('listening on '+ config.test_port);
  });
} else {
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
