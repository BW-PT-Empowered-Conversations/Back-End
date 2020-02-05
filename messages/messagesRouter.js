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

// sends a new message by the user
router.post("/:user_id/:conversation_id/message", (req, res) => {
    const { user_id, conversation_id } = req.params 
    const { message } = req.body
    const messageParser = { 
        message, 
        conversation_id,
        sent_by: "user", 
        time_sent:Date(), 
        message_timestamp:Date.now()
     }
     console.log(messageParser)
    Messages.sendMessage(messageParser)
    .then(id => {
        console.log(id)
        res.status(201).json(id)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve user"})
    })
})

//deletes a message given a message id
router.delete("/:user_id/:conversation_id/message/:message_id", (req, res) => {
    const { user_id, conversation_id, message_id } = req.params 
    Messages.findMessageByMessageId(message_id)
        .then(message => {
            if (message[0]){
                Messages.deleteMessageById(message_id)
                    .then(elementsDeleted => {
                    console.log(elementsDeleted)
                    res.status(204).json({message:"message successfully deleted"})
                    })
                }
            else {
                res.status(400).json({err:"unable to find message id"})
            }
      
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve message"})
    })   
    
})

module.exports = router