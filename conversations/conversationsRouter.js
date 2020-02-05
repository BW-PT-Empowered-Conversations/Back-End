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


 router.get("/:user_id/:conversation_id", (req, res) => {
    const { user_id, conversation_id } = req.params 
    console.log(req.params)
    Conversations.findByConversationId(user_id, conversation_id)
    .then(conversation => {
        res.status(200).json(conversation)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve conversation"})
    })   
})


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

module.exports = router