//Requirements
const express = require('express');
const app = express();
require('./db/connection')
const path = require('path')
const hbs = require('hbs')
const user = require('./model/userMessage')

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
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//Routings
app.get('/' , (req , res)=>{
    res.render('index')
})

app.post('/contact' , async(req , res)=>{
    try {
        const userData = new user(req.body)
        await userData.save()
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error)
    }
})

//Listening server

app.listen(port , ()=>{
    console.log(`Listening To Port ${port}`);
})

