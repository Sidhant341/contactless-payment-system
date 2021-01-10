const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, OPTIONS, GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
  );
  next();
})

router.post('/login', function(req, res){
  auth.login
});
router.post('/register', function(req, res){
  auth.register
});

module.exports = router;