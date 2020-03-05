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
products.get ('/new', (req, res) => {
    res.render ('./products/new.ejs');
});

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

//Post Route for a new product:
products.post ('/' , (req , res) => {
    Product.create(req.body, (err, product) => {
      if(err) { 
        res.send(err);
      } else {
        res.redirect('/products');
      }
    });
});

//Get route in order to redirect to an edit page:
products.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id , (err, product) => {
          if(err) { 
            console.log(err); 
          }
          res.render('./products/edit.ejs', 
          {product: product}
        );
    });
});

//Put route to add the changes to a product:
products.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, product) => {
        if(err) { 
            console.log(err);
        }
        res.redirect('/products/' + product.id);
    });
});

// Create the delete route:
products.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/products');//redirect back to logs index
    });
});

//Create a route for buying the products:
products.put ('/:id/buy', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, (err, product) => {
      if(err) { 
        console.log(err); 
      }
      res.redirect('/products/' + product.id);
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