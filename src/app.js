//Requirements
const express = require('express');
const app = express();
require('./db/connection')
const path = require('path')
const hbs = require('hbs')

//path
const static_path = path.join(__dirname , '../public');
const template_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');

//port
const port = process.env.port || 3000;

//Middleware
app.use(express.static(static_path))
app.set("view engine" , "hbs");
app.set('views' , template_path);
hbs.registerPartials(partials_path)

//Routings
app.get('/' , (req , res)=>{
    res.render('index')
})

app.get('/contact' , (req , res)=>{
    res.render('contact')
})


//Listening server

app.listen(port , ()=>{
    console.log(`Listening To Port ${port}`);
})

