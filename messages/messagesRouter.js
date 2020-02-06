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

/**
* @api {get} /api/user/:user_id/:conversation_id/messages Message List by User Id and Conversation Id
* @apiName MessageList
* @apiGroup Messages
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
*
* @apiSuccess {Integer} id A unique id that identifies the message
* @apiSuccess {String} message The message by the user or the recipient
* @apiSuccess {String} conversation_id The conversation_id that belongs to the message
* @apiSuccess {String} sent_by Describes whether the massage was sent by either the user or the recipient
* @apiSuccess {String} time_sent A javascript time stamp with the Date() method
* @apiSuccess {String} message_timestamp A javascript time stamp with the Date().now method (unix timestamp)
* @apiSuccess {Objects[]} array List of messages (Array of Objects)
*
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 200 OK
*[
*  {
*    id: 1,
*    message: "hello world",
*    conversation_id: 1,
*    sent_by: "user",
*    time_sent: "Thu Feb 06 2020 14:33:59 GMT+0000 (Coordinated Universal Time)",
*    message_timestamp: "1580999639432"
*  },
*  {
*    id: 2,
*    message: "hello world",
*    conversation_id: 1,
*    sent_by: "recipient",
*    time_sent: "Thu Feb 06 2020 14:38:18 GMT+0000 (Coordinated Universal Time)",
*    message_timestamp: "1580999898934"
*  }
*]
*/

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

/**
* @api {get} /api/user/:user_id/:conversation_id/message/:message_id Message by User Id, Conversation Id, and Message Id
* @apiName MessageByUserIdConversationIdAndMessageId
* @apiGroup Messages
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
* @apiParam {Integer} message_id the id of the message as a URL parameter
*
* @apiSuccess {Integer} id A unique id that identifies the message
* @apiSuccess {String} message The message by the user or the recipient
* @apiSuccess {String} conversation_id The conversation_id that belongs to the message
* @apiSuccess {String} sent_by Describes whether the massage was sent by either the user or the recipient
* @apiSuccess {String} time_sent A javascript time stamp with the Date() method
* @apiSuccess {String} message_timestamp A javascript time stamp with the Date().now method (unix timestamp)
* @apiSuccess {Objects[]} array List of messages (Array of specified message Object)
*
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 200 OK
*[
*  {
*    id: 2,
*    message: "hello world",
*    conversation_id: 1,
*    sent_by: "recipient",
*    time_sent: "Thu Feb 06 2020 14:38:18 GMT+0000 (Coordinated Universal Time)",
*    message_timestamp: "1580999898934"
*  }
*]
*/

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

/**
* @api {post} /api/user/:user_id/:conversation_id/message Send A message
* @apiName SendMessage
* @apiGroup Messages
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
* @apiParam {Integer} message_id the id of the message as a URL parameter
* @apiParam {String} message A message to the recipient in the body (required)
*
* @apiSuccess {Integer} message_id A unique id that identifies the created message
* @apiSuccess {Array} array An array containing the created message_id
* @apiSuccessExample Example of body:
*{
*   message:"Hello World!",
*}

* @apiSuccessExample Example of sucessful response:
HTTP/1.1 201 OK
*[
* 2  
*]	
*		
*/

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
/**
* @api {delete} /api/user/:user_id/:conversation_id/message/:message_id Delete Message by User Id, Conversation Id, and Message Id
* @apiName DeleteMessageByUserIdConversationIdAndMessageId
* @apiGroup Messages
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
* @apiParam {Integer} message_id the id of the message as a URL parameter
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 204 OK
*
*
*
*/

module.exports = router