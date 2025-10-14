const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
    vessel: { type: mongoose.Schema.Types.ObjectId, ref: 'Vessel' },
    port: { type: mongoose.Schema.Types.ObjectId, ref: 'Port' },
    predictedDelayHours: Number,
    confidence: Number,
}, { timestamps: true });

module.exports = mongoose.model('Prediction', PredictionSchema);
