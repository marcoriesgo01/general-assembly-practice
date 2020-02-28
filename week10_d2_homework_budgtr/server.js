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
//For some reason, the "add new item will not work if the Budget/new section is after the show route"
app.get('/Budget/new', (req, res) =>{
    res.render('new.ejs')
});

//Create a route in order to post a new expense to the list:
app.post('/Budget', (req, res)=>{
    Budget.push(req.body);
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