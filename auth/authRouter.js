const router = require('express').Router();
const User = require("./authUsersModels")
const bcrypt = require("bcryptjs")
const tokenGenerator = require("./tokenGenerator")

router.post('/register', (req, res) => {
  const { username, password, first_name, last_name, email, user_phone } = req.body 
  User.add({ username, password: bcrypt.hashSync(password, 10), first_name, last_name, email, user_phone })
    .then(id => {
      res.status(201).json({ message:"User successfully registered!", id })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err:"user could not be registered"})
  })

});

router.post('/login', (req, res) => {
  const { username, password } = req.body 
  User.findByUsername(username)
    .then(user => {
      if ((user.username === username) && bcrypt.compareSync(password, user.password)) {
        console.log(user)
        console.log(username)
        const token = tokenGenerator(user)
        res.status(200).json({ message:"User successfully logged in!",  token})
      }
      else {
        res.status(401).json({ message:"unauthorized" })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err:"user could not be logged in" })
  })
});

module.exports = router;
