const express = require('express');
const passport = require('passport');
const auth = require('../midllware/auth')

const router = express.Router()

const conversationController = require('../controllers/conversationController')

router.post('/createConversation',conversationController.createConversation)
router.get('/:userId',auth,conversationController.userConversation)
router.get('/find/:firstId/:secondId',auth,conversationController.findConversation)

module.exports = router