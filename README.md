Ecommerce-rest-api is an authenticated rest api which supports CRUD operation of products and users.

## Technologies used
NodeJs, ExpressJs and MongoDB

## package.json

{
  "name": "e-commerce",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "env-cmd ./config/dev.env nodemon src/index.js",
    "test": "env-cmd ./config/test.env jest --watchAll --runInBand"
  },
  "jest": {
    "testEnvironment": "node"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "env-cmd": "^8.0.2",
    "express-session": "^1.17.1",
    "jest": "^23.6.0",
    "nodemon": "^1.18.9",
    "supertest": "^3.4.1"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "connect-mongo": "^3.2.0",
    "express": "^4.16.4",
    "jsonwebtoken": "^8.4.0",
    "mongodb": "^3.5.7",
    "mongoose": "^5.9.13",
    "sharp": "^0.25.2",
    "validator": "^10.9.0"
  }
}


## How to run
1. Install all the dependencies and devDependencies mention in package.json after moving inside the project folder.
2. Authorization
Collection Name > View more actions> Edit >Authorization
Type- Bearer Token
Token- {{authToken}}

3. Run &"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath=<Database path> on command prompt.
4. Run "npm run dev" on different command prompt to run node application.
5. Run "npm run test" for test the application. 


## Endpoints
1. Create a new product
HTTP- POST
PATH- localhost:3000/api/products
BODY-
a.
{
    imagePath:"banana bread.png",
    title: "Banana Bread",
    price: 40,
    quantity:20,
    category:"bread",
    inStock:true
    
}
b.
{
    imagePath:"apple.png",
    title: "Banana Bread",
    price: 50,
    quantity:10,
    category:"fruits",
    inStock:true
    
}

2. Get product details.
HTTP- GET
PATH- localhost:3000/api/products

3. Create New User.
HTTP- POST
PATH- localhost:3000/api/users
Tests-
if (pm.response.code === 201) {
    pm.environment.set('authToken', pm.response.json().token)

}
Authorization Type- No Auth
BODY- 
a.
{
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!'
}
b.
{
    name: 'Jess',
    email: 'jess@example.com',
    password: 'myhouse099@@'
}

4. Login the User.
HTTP- POST
PATH- localhost:3000/api/users/login
Tests-
if (pm.response.code === 200) {
    pm.environment.set('authToken', pm.response.json().token)

}
Authorization Type- No Auth
BODY-
{
    email: 'mike@example.com',
    password: '56what!!'
}
5. Logout the User.
HTTP- POST
PATH- localhost:3000/api/users/logout
Authorization Type- Inherit auth from parent
6. Logout all the Users.
HTTP- POST
PATH- localhost:3000/api/users/logoutAll
Authorization Type- Inherit auth from parent
7. Display the Logged in User profile.
HTTP- GET
PATH- localhost:3000/api/users/me
Authorization Type- Inherit auth from parent
8. Update the Logged in User details.
HTTP-PATH
PATH- localhost:3000/api/users/me
Authorization Type- Inherit auth from parent
Body-
{
    age: 20
}
9. Delete the Logged in User.
HTTP- DELETE
PATH- localhost:3000/api/users/me
Authorization Type- Inherit auth from parent
10. Add to cart.
HTTP- GET
PATH- localhost:3000/api/add-to-cart/:id
:id- Product id
Authorization Type- Inherit auth from parent
11. Reduce the cart using product id.
HTTP- GET
PATH- localhost:3000/api/reduce/:id
:id- Product id
Authorization Type- Inherit auth from parent
12. Remove the product from cart using product id.
HTTP- GET
PATH- localhost:3000/api/remove/:id
:id- Product id
Authorization Type- Inherit auth from parent
13. Display the shopping cart.
HTTP- GET
PATH- localhost:3000/api/shopping-cart
14. Checkout
HTTP- GET
PATH- localhost:3000/api/checkout
BODY-
{
    "name": "Geetanshu Chhabra",
	"address": "xyz",
	"Mobile": 1234567891
}
Authorization Type- Inherit auth from parent