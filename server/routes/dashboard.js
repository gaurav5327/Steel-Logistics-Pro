const router = require('express').Router();
const auth = require('../middleware/auth');
const { getStats, getStock } = require('../controllers/dashboardController');
router.get('/stats', auth, getStats);
router.get('/stock', auth, getStock);
module.exports = router;
