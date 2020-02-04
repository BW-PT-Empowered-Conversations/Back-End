const router = require('express').Router();
const User = require("./authUsersModels")
const bcrypt = require("bcryptjs")
const tokenGenerator = require("./tokenGenerator")

router.post('/register', (req, res) => {
  const { username, password, first_name, last_name, email, user_phone } = req.body 
  User.add({ username, password: bcrypt.hashSync(password, 10), first_name, last_name, email, user_phone })
    .then(id => {
        User.findByUserId(id[0])
            .then(user => {
                const token = tokenGenerator(user)
                const regRes = {
                    message:"User successfully registered!",
                    id: user.id,
                    username: user.username,
                    id:user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    token
                }
                res.status(201).json(regRes)
            }) 
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
        const token = tokenGenerator(user)
        const loginRes = {
            message:"User successfully logged in!",
            username: user.username,
            id:user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            token
        }
        res.status(200).json(loginRes)
      }
      else {
        res.status(401).json({ message:"invalid username or password" })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err:"Server error, user could not be logged in" })
  })
});

module.exports = router;
