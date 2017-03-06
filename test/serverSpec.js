process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var Client = require("../models/client");
var Candidate = require("../models/candidate");

// var utils = require('./utils');

var should = chai.should();
chai.use(chaiHttp);

describe('Server', function() {

  it('should list ALL clients on /clients GET', function(done) {
    client = {name: "Chris", postcode: "N1 4TY"}
    Client.create(client, function (err) {
      chai.request(server)
        .get('/clients')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('_id');
          res.body[0].should.have.property('name');
          res.body[0].should.have.property('postcode');
          res.body[0].name.should.equal('Chris');
          res.body[0].postcode.should.equal('N1 4TY');
          done();
        });
      });
  });

  it('should list ALL candidates on /candidates GET', function(done) {
    candidate = {name: "Chris", postcode: "N1 4TY", modeOfTransport: {type: "bike", speed: 15.5}}
    Candidate.create(candidate, function (err) {
      chai.request(server)
        .get('/candidates')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('_id');
          res.body[0].should.have.property('name');
          res.body[0].should.have.property('postcode');
          res.body[0].name.should.equal('Chris');
          res.body[0].postcode.should.equal('N1 4TY');
          done();
        });
      });
  });
});
