const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: String,
    location: String,
    capacity: Number,
    requiredQuality: String
});

module.exports = mongoose.model('Plant', PlantSchema);
