//Requirements
const express = require('express');
const app = express();
require('./db/connection')

//port
const port = process.env.port || 1080;

//Routings
app.get('/' , (req , res)=>{
    res.send("Welcome to Home Page")
})


//Listening server

app.listen(port , ()=>{
    console.log(`Listening To Port ${port}`);
})

