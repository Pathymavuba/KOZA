const mongoose = require('../config/db_connection')

const conversationSchema = mongoose.Schema({

    members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    receiverId:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
    // members: { type: Array },
    
}, { timestamps: true })

module.exports = mongoose.model('conversation', conversationSchema)