const router = require('express').Router();
const auth = require('../middleware/auth');
const { listPredictions, runPrediction } = require('../controllers/predictionController');

router.get('/', auth, listPredictions);
router.post('/run', auth, runPrediction); // run prediction (batch)
module.exports = router;
