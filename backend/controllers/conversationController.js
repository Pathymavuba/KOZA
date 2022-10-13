const Conversation = require('../models/conversationModel')

// exports.createConversation = (req,res, next)=>{
//     const conversation = new Conversation({
//         $push:{user : req.body.user}
//     })
//     conversation.save()
//     .then(()=>{
//         console.log("conversation enregistrée");
//         res.status(200).json({
//             success: true,
//             message: "conversation enregistrée",
//             conversation:{
//                 id: conversation._id,
//                 message:conversation.message,
//                 user: conversation.user
//             }
//         })})
//     .catch(err=>{res.status(501).json({error:err})})
// }
exports.createConversation = (req, res) => {
    const conversation = new Conversation({
        members:[req.body.senderId,req.body.receiverId]
    })
    conversation.save()
    .then((result)=>{
                console.log("conversation enregistrée");
                res.status(200).json({result}) })
 .catch((error)=>res.status(500).json({error: error}))
}


exports.userConversation = (req,res, next)=>{
    Conversation.find({
        members:{$in:[req.params.userId]}
    })
    .then(conversation =>res.status(200).json(conversation))
    .catch(err=>{res.status(500).json({error:err})})
}
exports.findConversation = (req,res)=>{
    Conversation.findOne({
        members:{$all:[req.params.firstId,req.params.secondId]}
    })
    .then(conversation =>res.status(200).json(conversation))
    .catch(err=>{res.status(500).json({error:err})})
}
