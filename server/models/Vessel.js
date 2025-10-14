const mongoose = require('mongoose');

const VesselSchema = new mongoose.Schema({
    name: String,
    eta: Date,
    cargoTonnage: Number,
    laydays: Number,
    loadPort: String
});

module.exports = mongoose.model('Vessel', VesselSchema);
