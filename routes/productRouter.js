const express = require('express');
const { createProduct, getOneProduct, getAllProductBelongingToAStore, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/product/', createProduct);

router.get('/product/:id', getOneProduct);

router.get('/product-by-store/:storeId', getAllProductBelongingToAStore);

router.patch('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);



module.exports = router;