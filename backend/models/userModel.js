const mongoose = require('../config/db_connection')

userSchema = mongoose.Schema({
    username:{  
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
    }
})

module.exports = mongoose.model('User',userSchema)