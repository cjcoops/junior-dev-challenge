//client table model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: { type: String, required: true },
    postcode: { type: String, required: true }
});

var Client = mongoose.model('Client', ClientSchema );

module.exports = Client;
