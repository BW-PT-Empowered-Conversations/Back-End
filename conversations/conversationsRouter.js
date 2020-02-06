const router = require('express').Router();
const Conversations = require('./conversationsModels')


// returns an array of conversations given a userID
router.get("/:userId", (req, res) => {
    const { userId } = req.params 
    console.log(req.params)
    Conversations.findConversationByUserId(userId)
    .then(conversations => {
        res.status(200).json(conversations)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({error:"Unbable to retreive user"})
    })
})

/**
* @api {get} /api/user/:user_id Conversation List by User Id
* @apiName ConversationsList
* @apiGroup Conversations
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* 
* @apiSuccess {Integer} id A unique id that identifies the conversation
* @apiSuccess {String} recipient_first_name The first name of the recipient
* @apiSuccess {String} recipient_last_name The last name of the recipient
* @apiSuccess {String} recipient_phone The phone number of the recipient
* @apiSuccess {Integer} user_id The user id of the user who created the conversation
* @apiSuccess {Objects[]} List of conversations (Array of Objects)
*
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 200 OK
*[
* {
*    "id": 1,
*   "recipient_first_name": "Joe",
*    "recipient_last_name": "M",
*    "user_id": 1,
*    "recipient_phone": "1231231231",
*    "topic": "Build Week burnout"
*  },
*  {
*    "id": 2,
*    "recipient_first_name": "Mandi",
*    "recipient_last_name": "H",
*    "user_id": 1,
*    "recipient_phone": "1231231230",
*    "topic": "Redux "
*  },
*  {
*    "id": 3,
*    "recipient_first_name": "Jason",
*    "recipient_last_name": "S",
*    "user_id": 1,
*    "recipient_phone": "1231231232",
*    "topic": "React"
*  },
*  {
*    "id": 4,
*    "recipient_first_name": "Lizzy",
*    "recipient_last_name": "E",
*    "user_id": 1,
*    "recipient_phone": "1231231233",
*    "topic": "React"
*  }
*]
*/

// adds a new conversation
router.post("/:user_id", (req, res) => {
    const { user_id } = req.params 
    const { recipient_first_name, recipient_last_name, recipient_phone, topic } = req.body
    const newConversation = { user_id, recipient_first_name, recipient_last_name, recipient_phone, topic }
    Conversations.addConversation(newConversation)
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
* @api {post} /api/user/:user_id Create A Conversation
* @apiName CreateConversation
* @apiGroup Conversations
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {String} recipient_first_name A name for the recipient (required) in the body
* @apiParam {String} recipient_last_name A name for the recipient (required) in the body
* @apiParam {String} recipient_phone A number for the recipient (10 digits)(required) in the body
* @apiParam {String} topic A topic for the conversation (required) in the body
* 
*
* @apiSuccess {Integer} conversation_id A unique id that identifies the created conversation
* @apiSuccess {Array} array An array containing the created conversation_id
* @apiSuccessExample Example of body:
*{
*   recipient_first_name:"Joe",
*	recipient_last_name:"M",
*	recipient_phone:"1233211231",
*	topic:"React",
*}

* @apiSuccessExample Example of sucessful response:
HTTP/1.1 201 OK
*[
* 5  
*]	
*		
*/


//gets a specific conversation given a user id and conversation id
 router.get("/:user_id/:conversation_id", (req, res) => {
    const { user_id, conversation_id } = req.params 
    Conversations.findByConversationId(user_id, conversation_id)
    .then(conversation => {
        res.status(200).json(conversation)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve conversation"})
    })   
})
/**
* @api {get} /api/user/:user_id/:conversation_id Conversation by User Id and Conversation Id
* @apiName ConversationByUserIdAndConversationId
* @apiGroup Conversations
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
*
* @apiSuccess {Integer} id A unique id that identifies the conversation
* @apiSuccess {String} recipient_first_name The first name of the recipient
* @apiSuccess {String} recipient_last_name The last name of the recipient
* @apiSuccess {String} recipient_phone The phone number of the recipient
* @apiSuccess {Integer} user_id The user id of the user who created the conversation
* @apiSuccess {Objects[]} An array with the single specified conversation (Array of specified conversation Object)
*
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 200 OK
*[
*  {
*    "id": 4,
*    "recipient_first_name": "Lizzy",
*    "recipient_last_name": "E",
*    "user_id": 1,
*    "recipient_phone": "1231231233",
*    "topic": "React"
*  }
*]
*/

router.delete("/:user_id/:conversation_id", (req, res) => {
    const { user_id, conversation_id } = req.params 
    console.log(req.params)
    Conversations.findByConversationId(user_id, conversation_id)
        .then(conversation => {
            if (conversation[0]){
                Conversations.deleteConversation(conversation_id)
                    .then(elementsDeleted => {
                    console.log(elementsDeleted)
                    res.status(204).json({message:"conversation successfully deleted"})
                    })
                }
            else {
                res.status(400).json({err:"unable to find conversation id"})
            }
      
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve conversation"})
    })   
    
})

/**
* @api {delete} /api/user/:user_id/:conversation_id Delete Conversation by User Id and Conversation Id
* @apiName DeleteConversationByUserIdAndConversationId
* @apiGroup Conversations
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 204 OK
*
*
*
*/


router.put("/:user_id/:conversation_id", (req, res) => {
    const { user_id, conversation_id } = req.params 
    console.log(req.params)
    const { recipient_first_name, recipient_last_name, recipient_phone, topic} = req.body
    const changes = { recipient_first_name, recipient_last_name, recipient_phone, topic }
    Conversations.findByConversationId(user_id, conversation_id)
        .then(conversation => {
            if (conversation[0]){
                Conversations.updateConversation(conversation_id, changes )
                    .then(changes => {
                    console.log(changes)
                    res.status(201).json({message:"conversation successfully updated"})
                    })
                }
            else {
                res.status(400).json({err:"unable to find conversation id"})
            }
      
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve conversation"})
    })   
    
})

/**
* @api {put} /api/user/:user_id/:conversation_id Update Conversation by User Id and Conversation Id
* @apiName UpdateConversationByUserIdAndConversationId
* @apiGroup Conversations
*
* @apiParam {Integer} user_id the id of the user as a URL parameter
* @apiParam {Integer} conversation_id the id of the conversation as a URL parameter
*
* @apiSuccess {String} message A successfully updated message
* @apiSuccessExample Example of body:
*{
*   recipient_first_name:"Johnny",
*	recipient_last_name:"Cash",
*}
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 201 OK
*{
* message: "conversation successfully updated"
*}
*
*
*/

module.exports = router