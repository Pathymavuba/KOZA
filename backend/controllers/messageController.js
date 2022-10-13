const Message = require('../models/messageModel')

exports.sendMessage = (req,res)=>{
    const message = new Message({
        conversation: req.body.conersation,
        messageText:req.body.messageText,
        messageImage:req.body.messageImage,
        sender:req.body.sender,
        recipient:req.body.recipient

    })
    message.save()
     .then(()=>{
        console.log("message envoyé");
        res.status(200).json({
            success: true,
            message: "message envoyé",
            message:{
                id: message._id,
                messageText: message.messageText,
                mesageImage: message.mesageImage,
                sender: message.sender,
                recipient:message.recipient
            }
        })})
    .catch(err=>{res.status(501).json({error:err})})
}
