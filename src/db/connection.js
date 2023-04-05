const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/dynamic")
.then(()=>{
    console.log("Connection Successfull");
})
.catch((Error)=>{
    console.log(Error);
    console.log("Unable to Connect to Server");
})