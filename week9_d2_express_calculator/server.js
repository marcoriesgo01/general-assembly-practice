var express = require('express');
var app = express();
var port = 3000;


//The following is a way to do it for a single operation (not dry if you want to do different types of operations)
app.get('/calcsimpleadd/:num1/:num2', (req, res) => {
    var firstNum = Number(req.params.num1)
    var secondNum = Number(req.params.num2)
    var sum = firstNum + secondNum;
    res.send("The sum of the numbers is " + sum);
});



//Thefollowing is the way to do more operations using a loop and query (i.e. http://localhost:3000/calc/2/2?operation=add)
app.get("/calc/:num1/:num2", (req, res) => {
    if (req.query.operation === "add") {
        var result = Number(req.params.num1) + Number(req.params.num2);
    } else if (req.query.operation === "subtract") {
        var result = Number(req.params.num1) - Number(req.params.num2);
    } else if (req.query.operation === "multiply") {
        var result = Number(req.params.num1) * Number(req.params.num2);
    } else if (req.query.operation === "divide") {
        var result = Number(req.params.num1) / Number(req.params.num2);
    }
    res.send(`The result is ${result}`);
});

//The following is a different way to do without using query, just another parameter for operation
app.get("/calcparamsway/:operation/:num1/:num2", (req, res) => {
    if (req.params.operation === "add") {
      var result = Number(req.params.num1) + Number(req.params.num2);
    } else if (req.params.operation === "subtract") {
      var result = Number(req.params.num1) - Number(req.params.num2);
    } else if (req.params.operation === "multiply") {
      var result = Number(req.params.num1) * Number(req.params.num2);
    } else if (req.params.operation === "divide") {
      var result = Number(req.params.num1) / Number(req.params.num2);
    }
    res.send(`The result is ${result}`);
  });

app.listen(port, () => {
	console.log('App is running on port: ', port);
});

