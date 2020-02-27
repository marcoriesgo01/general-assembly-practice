// Begin a node.js app based on express:
const express = require('express');

const app = express();

// Start the home page:
app.get('/', (req, res) => {
    res.send(`<html>
                <body>
                    <h3>
                        99 Bottles of coke on the wall
                    </h3>
                    <h4>
                        <a href='/98'>Take one down, pass it around!</a>
                    </h4>
                </body>
            </html>`);
});

app.get('/0', ( req , res ) => {
    var numberOfCokes = Number(req.params.number)
    var newNumberOfCokes = (numberOfCokes - 1)
    res.send(`<html>
                <body>   
                    <a 
                        href='/99'>Do you want to take down more coke?
                    </a>
                </body>
            </html>`)
});

app.get('/:number', ( req , res ) => {
    var numberOfCokes = Number(req.params.number)
    var newNumberOfCokes = numberOfCokes - 1
    res.send(`<html>
                <body>
                    <h3>
                        ${numberOfCokes} Bottles of coke on the wall
                    </h3>
                    <a href='/${newNumberOfCokes}'>Take one down, pass it around</a>
                </body>
            </html>`)
});

// Setup a listening port for the database:
app.listen(3000, () => {
    console.log("I am listening for requests on port", 3000);
  });