//Setup requirements:
const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const Pokemon = require('./models/pokemon.js')

// Create Express Static:
// app.use(express.static('public'));

//Install middleware:
app.use(express.urlencoded({extended:false}));
//Initialize method-override:
app.use(methodOverride('_method'));

// GET ROUTES:

//Index Route:
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', 
    { Pokemon: Pokemon });
});

//Creating a New Route:
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', 
    { Pokemon: Pokemon });
});

//Create a Edit Route:
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        Pokemon: Pokemon[req.params.id],
        index: req.params.id
    })
});

//Create an Update Route:
app.put("/pokemon/:id", (req, res) => {
    Pokemon[req.params.id] = { 
        'name': req.body.name,
        'img': req.body.img,
        'type': req.body.type.split(","),
        'stats': { 'hp': req.body.hp,
            'attack': req.body.attack,
            'defense': req.body.defense }
    };
    res.redirect("/pokemon");
});


//Create Post route for the new pokemons:
app.post("/pokemon", (req, res) => {
    let addedPokemon = { 
        'name': req.body.name,
        'img': req.body.img,
        'type': req.body.type.split(","),
        'stats': { 'hp': req.body.hp,
            'attack': req.body.attack,
            'defense': req.body.defense }
    };
    Pokemon.push(addedPokemon);
    res.redirect("/pokemon");
});

//Create a Show Route:
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        Pokemon: Pokemon[req.params.id],
    })
});

//App listener:
app.listen(port, () => {
    console.log('Looking for pokemon on port ' + port);
  });
