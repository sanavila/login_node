import User from "../models/User.js"

export const createUser = async (req, res, next) => {

  const newUser = new User (req.body)

  try {
    const savedUser = await newUser.save()
    res.status(200).json(savedUser)
  } catch (error) {
    next(error)
  }
}
