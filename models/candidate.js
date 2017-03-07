//candidate table model
//uses mongoose as the ORM as good for validating data

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var candidateSchema = new Schema({
    name: { type: String, required: true },
    postcode: { type: String, required: true },
    modeOfTransport: {
      type: {type: String},
      speed: {type: Number}
    }
});

var Candidate = mongoose.model('Candidate', candidateSchema );

module.exports = Candidate;
