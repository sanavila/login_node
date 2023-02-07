import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import usersRoute from './api/routes/users.js'

dotenv.config();
const app = express()

mongoose.set("strictQuery", true)

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO)
    console.log("Conectado ao banco de dados")
  } catch (error) {
    throw error
  }
}

app.use(express.json())

app.use("/api/cadastro", usersRoute)

app.listen(8080, () => {
  connect()
  console.log("Conectado ao backend")
})
