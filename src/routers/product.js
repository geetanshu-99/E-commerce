const express = require('express');
const router = new express.Router();
const session= require('express-session')
const User= require('../models/user')
const Product = require('../models/product');
const Cart = require('../models/cart');

router.post('/api/products', async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/products', function(req, res, next) {
    Product.find(function(err, docs){ 
        var productChunks = [];
        var size = 3;
        for (var i = 0; i < docs.length; i += size) {
          productChunks.push(docs.slice(i, i  + size));
        }
        res.send({ title: 'All Products', products: productChunks});     
    });
});

module.exports = router;

