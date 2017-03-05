var mongoose = require("mongoose");
var expect = require('chai').expect;
var config = require('../config/config');

var Candidate = require('../models/candidate');

var candidate;

mongoose.createConnection(config.test_db);

describe('Candidate:model', function() {

  beforeEach(function(done) {
    Candidate.remove({}, function(err) {
      done();
    });
  });

  it('should create a new Candidate', function (done) {
    candidate = {name: "Chris", postcode: "N1 4TY", modeOfTransport: "walking"}

    Candidate.create(candidate, function (err, createdCandidate) {
      expect(err).not.to.exist;
      expect(createdCandidate.name).to.equal("Chris")
      expect(createdCandidate.postcode).to.equal("N1 4TY")
      expect(createdCandidate.modeOfTransport).to.equal("walking")
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
