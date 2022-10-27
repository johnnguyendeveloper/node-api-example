const express = require('express');
const router = express.Router();

const productService = require('../services/product.service');

router.get('/', productService.getAllProduct);

router.get('/:id', productService.getById);

router.post('/create', productService.create);

module.exports = router;