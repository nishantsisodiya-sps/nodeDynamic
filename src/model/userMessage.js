const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        minlength : 3
    },
    email :{
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone :{
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    message :{
        type : String,
        required : true,
        minlength : 3
    },
});


// Collection 

const User = mongoose.model("User" , userSchema);
module.exports = User