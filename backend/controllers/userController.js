const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp = (req,res)=>{
    bcrypt.hash(req.body.password,10)
     .then((hash)=>{
        const user = new User({
            username: req.body.username,
            password: hash
        })
        user.save()
        .then(user=>{
            res.status(200).json({
                success: true,
                message: "User added successfully",
                user:{
                    id: user._id,
                    username: user.username
                }
            })
        })
        .catch(err =>{
            res.status(400).json({
                success: true,
                message: "some error occurred",
                err:err
            })
        })
     })
     .catch((err)=>res.status(500).json({message: err}))

}

exports.logIn = (req,res)=>{
    User.findOne({username: req.body.username})
     .then(user=>{

        if(user===null){
            res.status(401).json({
                success:false,
                message: 'User not found',
            })
        }
        else{
            bcrypt.compare(req.body.password,user.password)
            .then(valid=>{
                if(!valid){
                    return res.status(401).json({
                        success:false,
                        message: 'incorrect password',
                    })
                }
                //correct password
                const payload = {
                    username: user.username,
                    id:user._id
                }

               const token =  jwt.sign(payload,'RANDOM_TOKEN_SECRET',{expiresIn : '24h'})
              res.status(200).json({
                 payload: payload,
                 success:true,
                 message:"logged in successfully",
                 token: "Bearer " + token
               })

            // res.status(200).json({
            //     userId:user._id,
            //     token: jwt.sign(
            //         {userId:user._id},
            //         'RANDOM_TOKEN_SECRET',
            //         {expiresIn:'24h'} ,
            //     )
            // })

            })
            .catch(err=>res.status(500).json({message:err}))
        }
     })
     .catch(err=>res.status(500).json({message:err}))
    
}

exports.logOut= (req,res)=>{
    
}