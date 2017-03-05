var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: { type: String, required: true },
    postcode: String
});

var Client = mongoose.model('Client', ClientSchema );

module.exports = Client
