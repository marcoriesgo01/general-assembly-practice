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
    res.send("Your tip should be " + (req.params.total * req.params.tipPercentage/100));
});

// Magic 8 Ball:
app.get("/magic/:question", (req, res) => {
    const ballOptions = ["It is certain", 
                        "It is decidedly so", 
                        "Without a doubt", 
                        "Yes definitely",
                        "You may rely on it", 
                        "As I see it yes", 
                        "Most likely", 
                        "Outlook good",
                        "Yes", 
                        "Signs point to yes", 
                        "Reply hazy try again", 
                        "Ask again later",
                        "Better not tell you now", 
                        "Cannot predict now", 
                        "Concentrate and ask again",
                        "Don't count on it", 
                        "My reply is no", 
                        "My sources say no",
                        "Outlook not so good", 
                        "Very doubtful"];
    const randomization = Math.floor(Math.random() * ballOptions.length);
    const ballResponse = ballOptions[randomization];
    res.send(`<html>
                    <body>
                        <h3 style="text-align: center; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                            ${req.params.question}?
                        </h3>
                        <h1 style="text-align: center; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
                            ${ballResponse}!
                        </h1>
                    <body>
            </html>`);
});


app.listen(port, () => {
    console.log("I am listening for requests on port", port);
  });