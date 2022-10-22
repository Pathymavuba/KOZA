const express = require('express');
const auth = require('../midllware/auth')

const router = express.Router()

const messageController = require('../controllers/messageController')

router.post('/message', messageController.addMessage)
router.get('/message/:conversationId',auth,messageController.getMessages)

module.exports = router