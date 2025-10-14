const GLPK = require('glpk.js'); // glpk.js exports a promise of module
// Note: glpk.js usage requires the package; API below is the general idea.

function runLeastCostDispatch({ vessel, plants, ports }) {
    // For demo: allow dispatch of vessel's cargo to any plant via nearest port.
    // Decision variables: x_{pPort, pPlant} = tons shipped from port to plant
    // Objective: minimize sum(x * (portHandling + railCost + oceanCost))
    // Constraints:
    //  - sum shipped <= vessel.cargoTonnage
    //  - port stock limits
    //  - plant demand (if defined)
    //  - sequential discharge constraints can be added as integer variables (not shown in minimal demo)

    // Construct arrays for ports/plants
    const portIds = ports.map((p, i) => ({ id: p._id.toString(), name: p.name, stock: p.stock || 0 }));
    const plantIds = plants.map((p, i) => ({ id: p._id.toString(), name: p.name, capacity: p.capacity || 0 }));

    // Create variables for each (port, plant)
    const vars = [];
    portIds.forEach((port) => {
        plantIds.forEach((plant) => {
            vars.push({
                name: `x_${port.id}_${plant.id}`,
                portId: port.id,
                plantId: plant.id,
                // cost placeholder: you should compute using ocean differential + handling + rail
                cost: computeMockCost(port, plant)
            });
        });
    });

    // Build GLPK model
    // glpk.js expects a problem object; below is a conceptual construction
    const glp = GLPK(); // synchronous in many versions; adapt if using promise
    // Build model in GLPK input format:
    const lp = {
        name: 'dispatch',
        objective: { direction: glp.GLP_MIN, name: 'c', vars: [] },
        subjectTo: [],
        bounds: [],
        generals: [] // for integer vars if needed
    };

    // objective
    vars.forEach(v => {
        lp.objective.vars.push({ name: v.name, coef: v.cost });
        lp.bounds.push({ name: v.name, type: glp.GLP_LO, lb: 0, ub: v.portStock || Infinity });
    });

    // Vessel cargo constraint: sum(vars) <= vessel.cargoTonnage
    lp.subjectTo.push({
        name: 'vessel_capacity',
        vars: vars.map(v => ({ name: v.name, coef: 1 })),
        bnds: { type: glp.GLP_UP, ub: vessel.cargoTonnage }
    });

    // Port stock constraints: for each port, sum over plants <= port.stock
    portIds.forEach(port => {
        const related = vars.filter(v => v.portId === port.id).map(v => ({ name: v.name, coef: 1 }));
        lp.subjectTo.push({
            name: `port_stock_${port.id}`,
            vars: related,
            bnds: { type: glp.GLP_UP, ub: port.stock }
        });
    });

    // Plant capacity constraints (if plant.capacity is a max demand)
    plantIds.forEach(plant => {
        const related = vars.filter(v => v.plantId === plant.id).map(v => ({ name: v.name, coef: 1 }));
        lp.subjectTo.push({
            name: `plant_cap_${plant.id}`,
            vars: related,
            bnds: { type: glp.GLP_UP, ub: plant.capacity || Infinity }
        });
    });

    // Solve model
    const solution = glp.solve(lp, { msgLevel: glp.GLP_MSG_OFF });

    // Extract plan
    const plan = [];
    let totalCost = 0;
    vars.forEach(v => {
        const val = solution.result.vars[v.name] || 0;
        if (val > 0) {
            plan.push({ port: portIds.find(p => p.id === v.portId).name, plant: plantIds.find(p => p.id === v.plantId).name, quantity: val, cost: v.cost * val });
            totalCost += v.cost * val;
        }
    });

    return { plan, totalCost };
}

// mock cost function — replace with your real cost model
function computeMockCost(port, plant) {
    // base handling + rail per ton + small ocean diff placeholder
    const handling = 5; // per ton
    const rail = 10;    // per ton guess
    const ocean = 15;   // per ton guess
    return handling + rail + ocean;
}

module.exports = { runLeastCostDispatch };
