const express = require('express');

const router = express.Router()

const conversationController = require('../controllers/conversationController')

router.post('/createConversation',conversationController.createConversation)
router.get('/:userId',conversationController.userConversation)
router.get('/find/:firstId/:secondId',conversationController.findConversation)

module.exports = router