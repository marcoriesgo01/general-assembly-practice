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

//BEGIN WITH REST ROUTES:

// Index:
products.get ('/', (req, res) => {
    Product.find( {}, (err, products) => {
      if(err) {
        console.log(err); 
      };
      res.render ('./products/index.ejs', { products });
    });
});

// New Route (This must always be above id routes):

// Show Route:
products.get ('/:id', (req, res) => {
    Product.findById( req.params.id, (err, product) => {
      if(err) {
        console.log(err); 
      };
      res.render ('./products/show.ejs', 
      { product: product });
    });
});





//Create a seed route to call fresh products:
products.get('/seed/newproducts', (req, res) => {
    const newProducts = [
    {
    name: "Coca-Cola Soda Classic - 2 Liter",
    img: "https://images.albertsons-media.com/is/image/ABS/108010259?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    description: "Enjoy Coca-Colas crisp, delicious taste with meals, on the go, or to share. Serve ice cold for maximum refreshment.",
    price: 2.89,
    qty: 34
    },
    {
    name: "Fanta Soda Orange - 2 Liter",
    img: "https://images.albertsons-media.com/is/image/ABS/108051660?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    description: "Bright, bubbly and instantly refreshing, Fanta is made with 100% natural flavors and is caffeine free.",
    price: 1.67,
    qty: 23
    },
    {
    name: "Bacardi Rum Gold 80 Proof - 750 Ml",
    img: "https://images.albertsons-media.com/is/image/ABS/189030772?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    description: "1862. Familiar. For the Original Cuba Libre: With notes of vanilla, toasted almonds and light oak, Bacardi Gold forms the basis of the Cuba Libre - the original cocktail of freedom. Find this and other delicious recipes at www.bacardi.com. Enjoy responsibly. www.responsibledrinking.org. Consumer information call 1-800-Bacardi. Bottled by Bacardi Bottling Corporation, Jacksonville, FL 32218. Made in Puerto Rico.",
    price: 12.21,
    qty: 19
    },
    {
    name: "Sprite Soda Lemon Lime - 2 Liter",
    img: "https://images.albertsons-media.com/is/image/ABS/960026610?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available",
    description: "Introduced in 1961, Sprite is the world's leading lemon-lime flavored soft drink. It has a crisp, clean taste that really quenches your thirst.",
    price: 1.67,
    qty: 12
    }
    ];

    Product.create(newProducts, (err, product) => {
    if(err) { 
        console.log(err); 
    }
    console.log( "Seed products created." );
    res.redirect('/products');
    });
});

//Use module exports so that the file can be accessed in the server.js:
//Export this router and then make it a requirement for server.js
module.exports = products;