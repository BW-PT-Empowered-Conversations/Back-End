const db = require("../data/db")



function findMessagesByConversationId(conversation_id){
    return db('messages')
        .where({ conversation_id })
        .returning("*")
}

function findMessageByMessageId(id){
    //findMessageByConversationId(user_id)
        return db('messages')
            .where({ id })
            .returning("*")
    }



module.exports = {
    findMessagesByConversationId,
    findMessageByMessageId,
    replyToMessage,
    deleteMessage
}