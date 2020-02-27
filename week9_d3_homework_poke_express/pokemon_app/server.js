//Start the app:
const express = require('express');
const app = express();
const port = 3000;

//Connect the server to the database:
const pokemon = require('./models/pokemon.js')

//Creating the pokemon route (index view to show the pokemon):
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs',
    {pokemon: pokemon});
});

//Creating a show route:

app.get('/pokemon/:id', (req, res)=>{
    res.send(req.params.id);
});


//Basic port 3000 call:
app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
});


//Make the app listen:
app.listen(port, ()=>{
    console.log('App running on port:' + port);
});

