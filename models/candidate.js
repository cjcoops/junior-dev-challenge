var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var candidateSchema = new Schema({
    name: { type: String, required: true },
    postcode: { type: String, required: true },
    modeOfTransport: { type: String, required: false }
});

var Candidate = mongoose.model('Candidate', candidateSchema );

module.exports = Candidate
