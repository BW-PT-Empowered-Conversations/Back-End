function findConversationByUserId(user_id){
    return db('conversations')
        .where({ user_id })
        .returning("*")
}