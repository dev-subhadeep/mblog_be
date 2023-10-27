const express = require("express")
const connection = require("./utils/db")
const postsRouter = require("./routes/posts.routes")
const userRouter = require("./routes/users.routes")
const app = express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "This is the homepage" })
})

app.use("/posts", postsRouter)
app.use("/user", userRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB connected.")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
