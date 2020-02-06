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
})
/**
* @api {post} /api/register Register User
* @apiName RegisterUser
* @apiGroup Auth
*
* @apiParam {String} username A username (required)(unique)
* @apiParam {String} password A password (required)
* @apiParam {String} email A user email (unique)(required)
* @apiParam {String} first_name A user first username (required) 
* @apiParam {String} last_name A user last name (required)
* @apiParam {String} user_phone A user phone number (required)(10 digits)
* 
* @apiSuccessExample Example of body:
*{
*   username:"Joe",
*	password:"123456",
*	email:"joe@joe.com",
*	user_phone:"1231231231",
*	first_name:"Joe",
*	last_name:"M"
}
* 
* @apiSuccess {String} message A successfully registered message
* @apiSuccess {String} username The successfully registered username
* @apiSuccess {Integer} id The id of the registered user
* @apiSuccess {String} user_first The first name of the registered user
* @apiSuccess {String} user_last The last name of the registered user    
* @apiSuccess {String} token A JWT token 
* 
* @apiSuccessExample Example of Successful Reponse:
* HTTP/1.1 201 OK
* {
*   message: "User successfully registered!",
*   username: "Joe",
*   id: 2,
*   first_name: "Joe",
*   last_name: "M",
*   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhvbWVyIiwiaWQiOjEsImlhdCI6MTU4MDk3NDczNCwiZXhwIjoxNTgxMjMzOTM0fQ.P8YtFxD-GvguZoYik8yh0AX0Bi4ewnGVzQPHZ7MZ1ic"
* }
*/


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

/**
 * @api {post} /api/login Login User
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiParam {String} username username
 * @apiParam {String} password password
 * 
 * @apiSuccessExample Example of body:
*{
*   username: "Homer"
*   password: "DuffBeer"
*}
 * 

 * 
 * @apiSuccessExample Example of Successful Reponse:
 * HTTP/1.1 200 OK
 * {
 *  message: "User successfully logged in!",
 *  username: "Homer",
 *  id: 1,
 *  first_name: "Homer",
 *  last_name: "Simpson",
 *  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhvbWVyIiwiaWQiOjEsImlhdCI6MTU4MDk3NDczNCwiZXhwIjoxNTgxMjMzOTM0fQ.P8YtFxD-GvguZoYik8yh0AX0Bi4ewnGVzQPHZ7MZ1ic"
 * }
 */

module.exports = router;
