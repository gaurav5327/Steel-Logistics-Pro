const router = require('express').Router();
const auth = require('../middleware/auth');
const { runOptimization } = require('../controllers/optimizeController');

router.post('/', auth, runOptimization);

module.exports = router;
