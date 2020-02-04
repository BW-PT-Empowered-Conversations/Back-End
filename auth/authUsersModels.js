const db = require("../data/db")

function add(user) {
    return db('users')
      .insert(user)
      .returning('id')
  }

function findByUsername(username){
    return db('users')
        .where({ username })
        .returning('*').first()
 }
function findByUserId(id){
    return db('users')
        .where({ id })
        .returning("*").first()
}

module.exports = {
    add,
    findByUserId,
    findByUsername
}