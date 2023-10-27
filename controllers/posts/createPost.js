const Post = require("../../models/posts.model")

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body)
    if (newPost) {
      res.status(200).send({ post: newPost })
    } else {
      res.status(400).send({ error: "There was an error creating the post." })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = createPost
