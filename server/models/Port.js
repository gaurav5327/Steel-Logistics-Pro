const mongoose = require('mongoose');

const PortSchema = new mongoose.Schema({
    name: String,
    location: String,
    capacity: Number,
    stock: Number
});

module.exports = mongoose.model('Port', PortSchema);
