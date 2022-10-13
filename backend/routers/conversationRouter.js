const express = require('express');

const router = express.Router()

const conversationController = require('../controllers/conversationController')

router.post('/conversation',conversationController.createConversation)

module.exports = router