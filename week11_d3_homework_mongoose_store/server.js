// Start dependencies and port:
const express         = require ('express');
const app             = express ();
const mongoose        = require ('mongoose');
const bodyParser      = require ('body-parser');
const methodOverride  = require ('method-override');
const port = 3000;

//Call for the controller with methods:
const productsController = require ('./controllers/products');


// mongoURI = process.env.MONGOURI ||'mongodb://localhost/marco_mongoose_store'
// Connect the above variable to mongoose:
// mongoose.connect(mongoURI);

//Connect mongoose to monoDB:
mongoose.connect("mongodb://localhost:27017/marco_mongoose_store", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Use a simple term for mongoose.connection for accessibility:
const db = mongoose.connection;
//Tell the database what to do when trying to connect to mongo - whether theree are errors or connection:
db.on('error', console.error.bind(console, 'connection to mongo error:'));
db.once ('open', function() {
  console.log('DB: Connected to mongo');
});


//Start the middleware:
//Public folder static:
app.use(express.static('public'));
//Method override for POST, DELETE and PUT requests from a form
app.use(methodOverride('_method'));
//Parse the info from the forms:
app.use(bodyParser.urlencoded({extended : false}));
//Make the JSON Parser:
app.use(bodyParser.json());

//Tell the app to use thee products.js when /products is called on:
app.use('/products', productsController);

//If localhost:'port' is called, redirect it to /products:
app.get('/' , (req, res) => {
    res.redirect('/products');
});

//App listener:
app.listen(port, () => {
    console.log('Looking for pokemon on port ' + port);
});