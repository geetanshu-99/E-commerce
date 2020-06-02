var express = require('express');
var router = new express.Router();
var session= require('express-session')
var User= require('../models/user')
var Product = require('../models/product');
var Cart = require('../models/cart');
const auth = require('../middleware/auth')

   
router.get('/api/add-to-cart/:id',auth, function (req, res) {
    try {
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {item: {}});

        Product.findById(productId, function (err, product) {
            if(err) {
                return res.status(400);
            }
            cart.add(product, product.id);
            req.session.cart = cart;
            res.send(req.session.cart);
        })
    } catch(e){
        res.status(404).send('Id is not correct or session has been expired')
    }
    
});

router.get('/api/reduce/:id',auth, function (req, res, next) {
    try{
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {item: {}});
        cart.reduceByOne(productId);
        req.session.cart = cart;
        res.send(cart)

    } catch(error){
        res.status(404).send({error: "quantity is null"})
    }
    
});

router.get('/api/remove/:id',auth, function (req, res, next) {
    try{
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.removeItem(productId);
        req.session.cart = cart;
        res.send(cart)
    } catch (e){
        res.send({e: "quantity is null"})
    }
});

router.get('/api/shopping-cart',auth, function (req, res, next) {
    if(!req.session.cart) {
        return res.status(404).send({error: 'cart is empty'});
    }
    var cart = new Cart(req.session.cart);
    return res.send({products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/api/checkout',auth, function (req, res, next) {
    if(!req.session.cart) {
        return res.send('cart is empty');
    }
    var cart = new Cart(req.session.cart);
    req.session.cart= undefined
    return res.send({name: req.body.name,total: cart.totalPrice,Mobile: req.body.mobile,address: req.body.address});
});


module.exports = router;