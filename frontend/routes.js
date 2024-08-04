const express = require('express');
const { register, login } = require('./controllers/authController');
const { getProducts } = require('./controllers/productController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/products', getProducts);

module.exports = router;
