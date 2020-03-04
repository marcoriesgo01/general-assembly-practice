//Start the dependencies, with express:
const express = require ('express');
const products = express.Router();

//Access the products model (database) in order to make routes calling it:
const Product = require('../models/products');

//Create a route that will allow you to see the JSON database:
products.get ('/json', (req, res) => {
    Product.find((err, products) => {
      res.send (products);
    });
});



//Create a seeed route calling on the models doc of seed.js
const productsSeed = require('../models/seed.js');
products.get('/seed/newproducts/viaseedfile', (req, res) => {
  Product.insertMany(productsSeed, (err, products) =>{
    if(err) {
        console.log(err);
    } else {
     res.send(products);
    }
  });
});


//Use module exports so that the file can be accessed in the server.js:
//Export this router and then make it a requirement for server.js
module.exports = products;