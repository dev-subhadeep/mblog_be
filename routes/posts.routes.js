const express = require("express")
const getPosts = require("../controllers/posts/getPosts")
const createPost = require("../controllers/posts/createPost")
const updatePost = require("../controllers/posts/updatePost")
const deletePost = require("../controllers/posts/deletePost")
const auth = require("../middlewares/auth.middleware")

const postsRouter = express.Router()

postsRouter.use(auth)
postsRouter.get("/", getPosts)
postsRouter.post("/create", createPost)
postsRouter.patch("/update/:_id", updatePost)
postsRouter.delete("/delete/:_id", deletePost)

module.exports = postsRouter
