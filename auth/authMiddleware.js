const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_SAUCE || 'Top_Secret', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message:"Invalid token." })
      }
      else {
        console.log(token)
        req.user = decodedToken
        next()
      }
    })
  }
  else {
    console.log("message: No authentication token provided.")
    res.status(400).json({ message:"No authentication token provided." })
  }
};
