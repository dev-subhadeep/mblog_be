const jwt = require("jsonwebtoken")
const User = require("../../models/users.model")
const bcrypt = require("bcrypt")
require("dotenv").config()

const loginUser = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })
    if (user) {
      const match = await bcrypt.compare(password, user.password)
      if (match) {
        const token = jwt.sign(
          { username: user.username, userID: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "28d" }
        )
        res.status(200).send({ message: "Logged in Successfully", token })
      } else {
        res.status(400).send({ error: "Incorrect credentials" })
      }
    } else {
      res.status(400).send({ error: "User not found" })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = loginUser
