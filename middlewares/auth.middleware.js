const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1]
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const { userID, username } = decoded
      req.body.userID = userID
      req.body.username = username
      next()
    } else {
      res.status(400).send({ error: "Please log in." })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = auth
