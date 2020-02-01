const db = require("../data/db")

function add(user) {
    return db('users')
      .insert(user)
      .returning("id")
  }

function findByUserId(user_id){
    return db('conversations')
        .where({ user_id })
        .returning("*")
}

module.exports = {
    add,
    findByUserId
}