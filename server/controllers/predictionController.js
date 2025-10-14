const Prediction = require('../models/Prediction');
const Vessel = require('../models/Vessel');
const Port = require('../models/Port');
// TFJS predictor (in-node) or axios call to python service:
const tfjsPredictor = require('../ai/tfjsPredictor');

exports.listPredictions = async (req, res) => {
    try {
        const preds = await Prediction.find().populate('vessel port').lean();
        const out = preds.map(p => ({
            vessel: p.vessel?.name || 'N/A',
            port: p.port?.name || 'N/A',
            predictedDelay: p.predictedDelayHours,
            confidence: p.confidence
        }));
        res.json(out);
    } catch (err) { res.status(500).json({ message: err.message }) }
};

exports.runPrediction = async (req, res) => {
    try {
        // For demo: predict for all vessels and first port
        const vessels = await Vessel.find();
        const port = await Port.findOne();
        const results = [];

        for (const v of vessels) {
            // prepare features (example)
            const features = { eta: v.eta.getTime(), laydays: v.laydays || 0, cargo: v.cargoTonnage || 0 };
            const { delayHours, confidence } = await tfjsPredictor.predict(features); // returns {delayHours, confidence}
            const rec = await Prediction.create({ vessel: v._id, port: port._id, predictedDelayHours: delayHours, confidence });
            results.push({ vessel: v.name, port: port.name, predictedDelay: delayHours, confidence });
        }
        res.json(results);
    } catch (err) { res.status(500).json({ message: err.message }) }
};
