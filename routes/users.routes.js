const express = require("express")
const createUser = require("../controllers/users/createUser")
const userRouter = express.Router()

userRouter.post("/create", createUser)

module.exports = userRouter
