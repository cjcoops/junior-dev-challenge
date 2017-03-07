## Junior Dev Challenge

#### To use
Make sure you have Node, NPM and MongoDB installed.
Clone the repo, install packages and start the server.
```
$ git clone https://github.com/cjcoops/junior-dev-challenge.git
$ cd junior-dev-challenge
$ npm install
$ npm start
```
To run tests `$ npm test`

#### Further work
* Error message for if postcode is not recognised and there are no results
* Use preferred mode of transport
* Front end testing
* Define a route in the controller for getting a single client
* Clean up front end code!

#### Challenges
* Initially played around with the Google Distance Matrix on the server side (on Sunday) but when I got the spec it made more sense to do this on the front end.
* Trying not to exceed Google API limit - used a slimmed down data set for playing around with.
* Callbacks! Fetching candidate and client data, then making multiple calls to Google API, then manipulating all the data from the responses.

#### Resources

Google Distance Matrix API:

https://developers.google.com/maps/documentation/javascript/distancematrix
https://codepen.io/youfoundron/pen/GIlvp

Testing:

http://www.scotchmedia.com/tutorials/express/authentication/1/06
http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.WL52YBKLTVq
https://codeutopia.net/blog/2016/06/10/mongoose-models-and-unit-tests-the-definitive-guide/

Node/Express Setup:

https://zellwk.com/blog/crud-express-mongodb/
