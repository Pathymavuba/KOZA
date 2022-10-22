const { time } = require('console')
const mongoose = require('../config/db_connection')

const messageSchema = mongoose.Schema({
   

    conversationId:{type:mongoose.Schema.Types.ObjectId,ref:'conversation'},
    text:{type:String,required:true},
    senderId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}

},{timestamps:true})

module.exports = mongoose.model('message',messageSchema)