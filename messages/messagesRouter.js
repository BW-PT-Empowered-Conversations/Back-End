const router = require('express').Router();
const Conversations = require('../conversations/conversationsModels')
const Messages = require('./messagesModels')

// returns an array of messages given a conversation id
router.get("/:user_id/:conversation_id/messages", (req, res) => {
    const { user_id, conversation_id} = req.params 
    console.log(req.params)
    Messages.findMessagesByConversationId(conversation_id)
    .then(messages => {
        res.status(200).json(messages)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({error:"Unbable to retreive messages"})
    })
})

//gets a specific message given message id
router.get("/:user_id/:conversation_id/message/:message_id", (req, res) => {
    const { user_id, conversation_id, message_id } = req.params 
    Messages.findMessageByMessageId(message_id)
    .then(message => {
        res.status(200).json(message)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve message"})
    })   
})

module.exports = router