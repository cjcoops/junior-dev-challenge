var expect = require('chai').expect;

var Client = require('../models/client');

describe('Client', function() {
    it('should be invalid if name is empty', function(done) {
        var client = new Client();

        client.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});
