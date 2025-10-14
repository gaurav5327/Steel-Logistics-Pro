const Plant = require('../models/Plant');
const Port = require('../models/Port');
const Vessel = require('../models/Vessel');

exports.getStats = async (req, res) => {
    try {
        const plants = await Plant.countDocuments();
        const ports = await Port.countDocuments();
        const vessels = await Vessel.countDocuments();
        // placeholder: shipments count omitted for brevity
        res.json({ plants, ports, vessels, shipments: 0 });
    } catch (err) { res.status(500).json({ message: err.message }) }
};

exports.getStock = async (req, res) => {
    try {
        const ports = await Port.find().select('name stock -_id');
        const data = ports.map(p => ({ port: p.name, stock: p.stock || 0 }));
        res.json(data);
    } catch (err) { res.status(500).json({ message: err.message }) }
};
