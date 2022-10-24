const express = require('express');
const passport = require('passport');
const auth = require('../midllware/auth');

const router = express.Router()
const userControlers = require('../controllers/userController')


router.post('/signup',userControlers.signUp)
router.post('/logIn',userControlers.logIn)
router.get('/users/:id',auth,userControlers.getUsers)
router.get('/users/:id',auth,userControlers.getUser)

module.exports =router