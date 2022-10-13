const express = require('express');

const router = express.Router()

const messageController = require('../controllers/messageController')

router.post('/message', messageController.addMessage)
router.get('/message/:conversationId',messageController.getMessages)

module.exports = router