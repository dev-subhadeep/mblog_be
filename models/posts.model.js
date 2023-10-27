const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
  {
    title: String,
    body: String,
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("post", postSchema)

module.exports = Post
