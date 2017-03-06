"use strict";

var expect = require('chai').expect;
var utils = require('./utils');

var Candidate = require('../models/candidate');

var candidate;

describe('Candidate:model', function() {

  it('should create a new Candidate', function (done) {
    candidate = {name: "Chris", postcode: "N1 4TY", modeOfTransport: {type: "bike", speed: 15.5}}

    Candidate.create(candidate, function (err, createdCandidate) {
      expect(err).not.to.exist;
      expect(createdCandidate.name).to.equal("Chris")
      expect(createdCandidate.postcode).to.equal("N1 4TY")
      expect(createdCandidate.modeOfTransport.type).to.equal("bike")
      expect(createdCandidate.modeOfTransport.speed).to.equal(15.5)
      done();
    });
  });

  it('should be invalid if name is empty', function(done) {
    candidate = new Candidate();

    candidate.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });

  it('should be invalid if postcode is empty', function(done) {
    candidate = new Candidate();

    candidate.validate(function(err) {
      expect(err.errors.postcode).to.exist;
      done();
    });
  });
});
