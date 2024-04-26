
const mongoose = require('mongoose');



const usersSchema = mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
    },
    Email:{
        type:String,
        unique:true,
    },
    Gender:{
        type:String
    }
})


const userModel = mongoose.model('users',usersSchema);




module.exports = userModel;