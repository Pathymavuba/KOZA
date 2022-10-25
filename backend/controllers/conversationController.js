const Conversation = require('../models/conversationModel');
const User = require('../models/userModel');

exports.createConversation = (req, res) => {
 
    const {members} = req.body
    Conversation.findOne({
        members:{$all:[...members]}
    })
    .then(data=>{
        if(data!==null){
            res.status(200).json({message:"conversationexists"})
        }
        else{
            const conversation = new Conversation({
                members:[...members],
                receiverId:members[members.length-1]
                
            })
            conversation.save()
        .then((result)=>{
                    console.log("conversation enregistrée");
                    res.status(200).json({result}) })
     .catch((error)=>res.status(500).json({error: error}))
        }
            
        }
     )

 .catch((error)=>res.status(500).json({error: error}))
   
    
}

exports.userConversation = (req,res, next)=>{
    Conversation.find({
        members:{$in:[req.params.userId]}
    })
    .populate({path:'members', select:"username",})
    .populate({path:'receiverId', select:"username",})
    .then(conversation =>res.status(200).json(conversation)) 
    .catch(err=>{res.status(500).json({error:err})})
}
exports.findConversation = (req,res)=>{
    const {members} = req.params
    Conversation.findOne({
        members:{$all:[req.params.firstId,req.params.secondId]}

        // members:{$or:[{sender:req.params.firstId,receiver:req.params.secondId},{sender:req.params.secondId,receiver:req.params.firstId}]}
    })
    .populate({path:'members', select:"username"})
    // .populate({path:'receiverId', select:"username",})
    .then(conversation =>{
        res.status(200).json(conversation)})
    .catch(err=>{res.status(500).json({error:err,message:"impossible de trouver la conversation"})})
}
