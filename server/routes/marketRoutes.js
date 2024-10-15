const express = require('express');
const { createMarketPost, getMarketByIdOrAllMarkets } = require('./../controllers/marketController');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/products');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

const marketRouter = express.Router();

marketRouter
    .get('/markets/:marketId?', getMarketByIdOrAllMarkets)
    .post('/markets', upload.single('image'), createMarketPost);

module.exports = marketRouter;
