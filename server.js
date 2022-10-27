
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const nodemon = require('nodemon');
const http = require('http');
const env = require('./src/configs/env.json');
const productController = require('./src/controllers/product.controller');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());

app.use('/products', productController);

require('./src/configs/initDB')();

app.listen(env.common.port, () =>{
    console.log('Server is listening port 3000');
});

