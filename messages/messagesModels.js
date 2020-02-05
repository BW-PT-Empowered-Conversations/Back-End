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

    function deleteMessageById(id) {
        return db('messages')
        .where({id})
        .delete()
      }

    function sendMessage(message) {
    return db('messages')
      .insert(message)
      .returning("id")
  }


module.exports = {
    findMessagesByConversationId,
    findMessageByMessageId,
    sendMessage,
    deleteMessageById
}