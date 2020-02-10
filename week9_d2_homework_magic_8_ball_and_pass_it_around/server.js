const express = require('express');

const app = express();

const port = 3000;

app.get("/greeting/:name", (req, res) => {
    res.send("Wow! Hey there " + req.params.name);
});

app.listen(port, () => {
    console.log("I am listening for requests on port", port);
  });