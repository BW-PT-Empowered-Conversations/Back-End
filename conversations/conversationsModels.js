const db = require("../data/db")


// function findByUserId(userId){
//     return db('conversations')
//         .where({ userId })
//         .returning("*")
// }

function findConversationByUserId(user_id){
    return db('conversations')
        .where({ user_id })
        .returning("*")
}
function addConversation(newConversation) {
    return db('conversations')
      .insert(newConversation)
      .returning("id")
  }

  function findByConversationId(user_id, id){
    findConversationByUserId(user_id)
        return db('conversations')
            .where({ id })
            .returning("*")
    }


    function deleteConversation(id) {
        return db('conversations')
        .where({id})
        .delete()
      }

    function updateConversation(id, changes) {
        return db('conversations')
        .where({id})
        .update(changes)
      }
    

module.exports = {
    findConversationByUserId,
    findByConversationId,
    addConversation,
    deleteConversation,
    updateConversation
}