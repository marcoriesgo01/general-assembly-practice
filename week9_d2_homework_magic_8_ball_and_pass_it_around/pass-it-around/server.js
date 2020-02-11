// Begin a node.js app based on express:
const express = require('express');

const app = express();

const port = 3000;

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip should be " + (req.params.total * req.params.tipPercentage/100));
});


// Seetup a listening port for the database:
app.listen(port, () => {
    console.log("I am listening for requests on port", port);
  });