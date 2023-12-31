const Post = require("../../models/posts.model")

const deletePost = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.findById({ _id })
    if (post) {
      if (post.username === req.body.username) {
        await Post.findByIdAndDelete({ _id })
        res
          .status(200)
          .send({ message: "Post deleted successfully", deleted_post: post })
      } else {
        res.status(500).send({ error: "You are not authorized!" })
      }
    } else {
      res.status(400).send({ error: "The post doesn't exist." })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = deletePost
