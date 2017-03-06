process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");

var server = require('../app');
var Client = require("../models/client");

var utils = require('./utils');

var should = chai.should();
chai.use(chaiHttp);

describe('Client:controller', function() {

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
});
