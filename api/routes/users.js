import express from "express"

const router = express.Router()

router.get("/teste", (req, res) => {
  res.send("Olá esse é o teste de rota")
})

//CREATE
//UPDATE
//DELETE
//GET
//GET ALL
export default router
