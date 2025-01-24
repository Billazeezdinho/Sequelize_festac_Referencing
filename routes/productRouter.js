const express = require('express');
const { createProduct, getOneProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/product/:id', createProduct);

router.get('/product/:id', getOneProduct);

router.get('/product-by-store/:id', getAllProductBelongingToAStore);



module.exports = router;