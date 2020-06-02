const express = require('express')
require('./db/mongoose.js')


const User= require('./models/user')

const userRouter= require('./routers/user')
const productRouter= require('./routers/product')
const orderRouter=require('./routers/order')
const app= express()

const session = require('express-session')

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));


app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)


module.exports= app

