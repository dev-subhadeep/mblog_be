const Post = require("../../models/posts.model")

const updatePost = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.findById({ _id })
    if (post) {
      updatedPost = await Post.findByIdAndUpdate(_id, req.body, { new: true })
      res.status(200).send({
        message: "Post updated successfully",
        updated_post: updatedPost,
      })
    } else {
      res.status(400).send({ error: "The post doesn't exist." })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = updatePost
