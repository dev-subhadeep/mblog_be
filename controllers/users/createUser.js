const User = require("../../models/users.model")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    bcrypt.hash(password, 3, async (err, hashedpw) => {
      if (err) {
        res.status(400).send({ error: err })
      }
      if (hashedpw) {
        const newUser = await User.create({
          username,
          email,
          password: hashedpw,
        })
        res
          .status(200)
          .send({ message: "User created successfully.", user: newUser })
      } else {
        res.status(400).send({ error: "Error creating new user." })
      }
    })
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = createUser
