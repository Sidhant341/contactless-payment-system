const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

const auth = require('../middleware/auth');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, OPTIONS, GET, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization'
    );
    next();
});

router.post('/add-to-cart/', auth, user.addToCart);
router.post('/remove-from-cart/', auth, user.removeFromCart)

module.exports = router;
