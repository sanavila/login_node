import express from "express"
import { createUser } from "../controllers/user.js"

const router = express.Router()

//CREATE
router.post("/", createUser)

//UPDATE
//DELETE
//GET
//GET ALL
export default router
