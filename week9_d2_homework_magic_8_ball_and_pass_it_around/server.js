// Begin simple backend using express:
const express = require('express');

const app = express();

const port = 3000;

// Greetings:
app.get("/greeting/:name", (req, res) => {
    res.send("Wow! Hey there " + req.params.name);
});

// Tip calculator:
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip should be " + req.params.total * req.params.tipPercentage/100);
});

app.listen(port, () => {
    console.log("I am listening for requests on port", port);
  });