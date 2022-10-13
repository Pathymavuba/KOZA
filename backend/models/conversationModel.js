const mongoose = require('../config/db_connection')

const conversationSchema = mongoose.Schema({
    // message:[{type:mongoose.Schema.Types.ObjectId,ref:'message'}],
    // user:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    members:{ type:Array}
},{timestamps:true})

module.exports =mongoose.model('conversation', conversationSchema)