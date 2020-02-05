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

module.exports = router