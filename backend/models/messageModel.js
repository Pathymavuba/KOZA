const mongoose = require('../config/db_connection')

const messageSchema = mongoose.Schema({
    conversation:{type:mongoose.Schema.Types.ObjectId,ref:'conversation'},
    messageText:{type:String},
    mesageImage:{type:String},
    sender:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    recipient:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
},{timestamps:true})

module.exports = mongoose.model('message',messageSchema)