const express = require('express');

const router = express.Router()
const userControlers = require('../controllers/userController')


router.post('/signup',userControlers.signUp)
router.post('/logIn',userControlers.logIn)




module.exports =router