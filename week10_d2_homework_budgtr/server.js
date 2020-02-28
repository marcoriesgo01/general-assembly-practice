//Start the app:
const express = require('express');
const app = express();
const port = 3000;

//Connect to the database:
const Budget = require('./models/budget.js');

//initiate middleware:
app.use(express.urlencoded({extended: false}));

//Set up the middleware:
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
});

//Add the express static to communicate with the "Public folder":
app.use(express.static('public'));

//Begin a practice route to check the app is working:
app.get('/', (req, res) => {
    res.send("App is connected");
});

//Index:
app.get('/Budget', (req, res)=>{
    res.render('index.ejs', 
    {Budget: Budget});
});


//Route to the new item page:
//Remember, the "add new item will not work if the Budget/new section is after the show route"
//Therefore, the origginal index, the post, and the new, must all go before the show
app.get('/Budget/new', (req, res) =>{
    res.render('new.ejs')
});

//Create a route in order to post a new expense to the list:
app.post('/Budget', (req, res)=>{
    //The form in new, with a method of POST sends the information here, which is pushed up to Budget
    Budget.push(req.body);
    //After the POST request on the method, the button redirects itt to here automatically.
    res.redirect('/Budget');
});

// Show route:
app.get('/Budget/:id', (req, res)=>{
    res.render('show.ejs', 
    {Budget: Budget[req.params.id]});
});

//Make the app listen:
app.listen(port, ()=>{
    console.log('App running on port:' + port);
});