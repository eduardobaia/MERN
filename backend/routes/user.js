const express = require('express')


//controller functions
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()


//Login rout
router.post("/login", loginUser)
router.post("/signup", signupUser)


//sign out rout
module.exports = router

