const express = require('express');
const app = express();
const config = require('./config/config');

const clients = require('./routes/clients');

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
