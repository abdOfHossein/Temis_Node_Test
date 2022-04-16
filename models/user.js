const mongoose = require('mongoose');
const connectionMongoDb = require('./connection');
const timestamp=require('time-stamp');

const userSchema = new mongoose.Schema({
    "first_name": {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'first_name atleast must be 3 character'],
        maxlength: [15, 'first_name must be maximum 15 character']
    },
    "last_name": {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'last_name atleast must be 3 character'],
        maxlength: [15, 'last_name must be maximum 15 character']
    },
    "username":{
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'username atleast must be 5 character'],
        maxlength: [15, 'username must be maximum 15 character']

    },
    "password":{
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'password atleast must be 5 character'],
        maxlength: [20, 'password must be maximum 20 character']

    }
},{timestamps:true});

const User=mongoose.model('User',userSchema);




module.exports=User;