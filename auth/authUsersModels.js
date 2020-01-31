const db = require("../data/db")

function add(user) {
    return db('users')
      .insert(user)
      .returning("id")
  }

function findByUsername(username){
    return db('users')
        .returning({ username }).first()
}

module.exports = {
    add,
    findByUsername
}