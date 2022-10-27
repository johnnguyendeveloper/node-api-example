const createError = require('http-errors');
const mongoose = require('mongoose');

const productModel = require('../models/products/product.model');

const productService = {
    getAllProduct: async (req, res, next) => {
        try {
            let result = await productModel.find({}, { __v: 0 });

            res.send(result);
        } catch (error) {
            console.log("Code Step: getAllProduct\r\n Error Message:" + error);
        }
    },
    getById: async (req, res, next) => {
        try {
            let id = req.params.id;
            let product = await productModel.findById(id);

            if (!product) {
                throw createError(204, 'This product does not exists');
            }

            res.send(product);
        }
        catch (error) {
            console.log("Code Step: getById\r\n Error Message:" + error);
        }
    },
    create: async (req, res, next) => {
        try {
            console.log(req);
            let product = new productModel(req.body);
            let result = await product.save();

            res.send(result);
        } catch (error) {
            console.log("Code Step: create\r\n Error Message:" + error);
        }
    }
};

module.exports = productService;