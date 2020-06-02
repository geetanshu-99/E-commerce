const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Product= require('../../src/models/product')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Jess',
    email: 'jess@example.com',
    password: 'myhouse099@@',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}



const productOneId = new mongoose.Types.ObjectId()
const productOne = {
    _id: new mongoose.Types.ObjectId(),
    imagePath:"banana bread.png",
    title: "Banana Bread",
    price: 40,
    quantity:20,
    category:"bread",
    inStock:true
}




const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await Product.deleteMany()
    await new Product(productOne).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    productOne,
    setupDatabase
}