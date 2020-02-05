const db = require("../data/db")



function findMessagesByConversationId(conversation_id){
    return db('messages')
        .where({ conversation_id })
        .returning("*")
}

module.exports = {
    findMessagesByConversationId
}