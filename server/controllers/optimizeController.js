const glpkSolver = require('../optimization/glpkSolver');
const OptimizationResult = require('../models/OptimizationResult');
const Port = require('../models/Port');
const Plant = require('../models/Plant');
const Vessel = require('../models/Vessel');

// Example POST body: { vesselId: "xxx", plantIds: ["p1","p2"] }
exports.runOptimization = async (req, res) => {
    try {
        const { vesselId, plantIds } = req.body;
        const vessel = await Vessel.findById(vesselId);
        const plants = await Plant.find({ _id: { $in: plantIds } });
        const ports = await Port.find();

        // build input snapshot for solver
        const input = { vessel, plants, ports };

        // call glpk solver
        const result = glpkSolver.runLeastCostDispatch(input);

        // store
        const saved = await OptimizationResult.create({ plan: result.plan, totalCost: result.totalCost, inputSnapshot: input });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
