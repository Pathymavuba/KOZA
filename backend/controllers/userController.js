const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const express = require('express')

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
                    username: user.username,
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
                    id:user._id,
                    profile: user.profile
                }

               const token =  jwt.sign(payload,'RANDOM_TOKEN_SECRET',{expiresIn : '1d'})
             return  res.status(200).json({
                 payload: payload,
                 success:true,
                 message:"logged in successfully",
                 token: "Bearer " + token
               })
        

            })
            .catch(err=>res.status(500).json({message:err}))
        }
     })
     .catch(err=>res.status(500).json({message:err}))
    
}

// verification du token avec passport
exports.protected= (passport.authenticate('jwt',{session:false}),
(req,res)=>{
   res.status(200).json({
        success:true,
        message:"token validé"
        // user : {
        //     id : req.user._id,
        //     username : req.user.username
        // }
    })
})

   