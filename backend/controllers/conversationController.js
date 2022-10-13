const Conversation = require('../models/conversationModel')

exports.createConversation = (req,res, next)=>{
    const conversation = new Conversation({
        $push:{user : req.body.user}
    })
    conversation.save()
    .then(()=>{
        console.log("conversation enregistrée");
        res.status(200).json({
            success: true,
            message: "conversation enregistrée",
            conversation:{
                id: conversation._id,
                message:conversation.message,
                user: conversation.user
            }
        })})
    .catch(err=>{res.status(501).json({error:err})})
}
