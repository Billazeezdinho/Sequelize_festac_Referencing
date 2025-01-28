const express = require('express');
const { createStore, getAllStores, getOneStore, updateStore, deleteStore } = require('../controllers/storeController');

const router = express.Router();

router.post('/store', createStore);

router.get('/store', getAllStores);

router.get('/store/:id', getOneStore);

router.patch('/store/:id', updateStore);

router.delete('/store/:id', deleteStore);

module.exports = router;