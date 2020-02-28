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
//More info on the express static: https://expressjs.com/en/starter/static-files.html

//Begin a practice route to check the app is working:
app.get('/', (req, res) => {
    res.send("App is connected");
});

//Index budget page:
app.get('/Budget', (req, res)=>{
    res.render('index.ejs', 
    {Budget: Budget});
});

//How to complete the current amount of money in the account section:
//Check the file "index.ejs" for the code
//1. set up the variable of bankAccount that is set equal to 0
//2. write a for loop that runs through every value in the database
//3. Make it so that the value of the database is added to the current value of bankAccount
//4. Write an if statement
//5. If the value of bankAccount is lower, than 0, create a red tag with the current value
//6. if not, create a green tag with the value in the account.


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
//More info about re.body: https://stackoverflow.com/questions/14008346/express-js-req-body

// Show route:
app.get('/Budget/:id', (req, res)=>{
    res.render('show.ejs', 
    {Budget: Budget[req.params.id]});
});

//Make the app listen:
app.listen(port, ()=>{
    console.log('App running on port:' + port);
});