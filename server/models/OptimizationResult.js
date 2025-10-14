const mongoose = require('mongoose');

const OptimizationResultSchema = new mongoose.Schema({
    plan: Array, // array of { plant, port, quantity, cost }
    totalCost: Number,
    inputSnapshot: Object
}, { timestamps: true });

module.exports = mongoose.model('OptimizationResult', OptimizationResultSchema);
