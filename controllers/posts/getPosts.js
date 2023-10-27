const Post = require("../../models/posts.model")

const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    if (allPosts) {
      res.status(200).send({ posts: allPosts })
    } else {
      res.status(400).send({ error: "There was an error creating the post." })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = getPosts
