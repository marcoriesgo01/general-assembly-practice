//Start the app:
const express = require('express');
const app = express();
const port = 3000;







//Basic port 3000 call:
app.get('/', (req, res)=>{
    res.send('Welcome to Budgtr!');
});


//Make the app listen:
app.listen(port, ()=>{
    console.log('App running on port:' + port);
});