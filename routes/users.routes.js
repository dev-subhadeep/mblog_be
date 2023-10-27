const express = require("express")
const createUser = require("../controllers/users/createUser")
const loginUser = require("../controllers/users/loginUser")
const userRouter = express.Router()

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)

module.exports = userRouter
