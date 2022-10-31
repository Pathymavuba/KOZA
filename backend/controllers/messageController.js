const Message = require('../models/messageModel')


exports.addMessage = (req,res)=>{
    const {conversationId,text,senderId,imagUrl}=req.body
    const message = new Message({conversationId,text,senderId,imagUrl})
    message.save()
     .then((result)=>{
        console.log("message envoyé");
        res.status(200).json(result)})
    .catch(err=>{res.status(500).json({error:err})})
}
exports.getMessages = (req,res)=>{
    const {conversationId}=req.params;
    Message.find({conversationId})
    .populate({path:'conversationId', select:'members'})
    .then(result=>res.status(200).json(result))
    .catch(err=>{res.status(500).json({error:err})})
}
