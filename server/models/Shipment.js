const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
    vessel: { type: mongoose.Schema.Types.ObjectId, ref: 'Vessel' },
    plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
    port: { type: mongoose.Schema.Types.ObjectId, ref: 'Port' },
    quantity: Number,
    cost: Number,
    status: { type: String, default: 'planned' }
}, { timestamps: true });

module.exports = mongoose.model('Shipment', ShipmentSchema);
