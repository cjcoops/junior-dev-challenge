"use strict";

var expect = require('chai').expect;
var utils = require('./utils');

var Client = require('../models/client');

var client;

describe('Client:model', function() {

  it('should create a new Client', function (done) {
    client = {name: "Chris", postcode: "N1 4TY"}

    Client.create(client, function (err, createdClient) {
      expect(err).not.to.exist;
      expect(createdClient.name).to.equal("Chris")
      expect(createdClient.postcode).to.equal("N1 4TY")
      done();
    });
  });

  it('should be invalid if name is empty', function(done) {
    client = new Client();

    client.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be invalid if postcode is empty', function(done) {
    client = new Client();

    client.validate(function(err) {
      expect(err.errors.postcode).to.exist;
      done();
    });
  });
});
