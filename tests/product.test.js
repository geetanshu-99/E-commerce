const request = require('supertest')
const app = require('../src/app')
const Product = require('../src/models/product')
const { productOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)


test('add the product',async()=>{
    const response = await request(app).post('/api/products').send({
        imagePath:"pizza-seasoning.png",
        title: "Pizza Seasoning",
        price: 45,
        quantity:10,
        category:"seasoning-spices",
        inStock:true
    }).expect(201)
})

test('Fetch all the products', async()=>{
    const response= await request(app).get('/api/products').expect(200)
})


