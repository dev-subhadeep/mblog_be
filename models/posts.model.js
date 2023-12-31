const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
  {
    title: String,
    body: String,
    userID: String,
    username: String,
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("post", postSchema)

module.exports = Post
