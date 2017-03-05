var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
    name: { type: String, required: true },
    postcode: { type: String, required: true },
    modeOfTransport: { type: String, required: false }
});

var Candidate = mongoose.model('Candidate', CandidateSchema );

module.exports = Candidate
