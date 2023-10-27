const express = require("express")
const connection = require("./db")
const postsRouter = require("./routes/posts.routes")
const app = express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "This is the homepage" })
})

app.use("/posts", postsRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connected.")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
