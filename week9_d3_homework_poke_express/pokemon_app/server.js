//Start the app
const express = require('express');
const app = express();
const port = 3000;

//Connect the server to the database
const pokemon = require('./models/pokemon.js')

//Creating the pokemon route (basic):
app.get('/pokemon', (req, res)=>{
    res.send(pokemon);
});




//Basic port 3000 call:
app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
});


//Make the app listen:
app.listen(port, ()=>{
    console.log('App running on port:' + port);
});

