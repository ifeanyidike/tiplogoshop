import express from "express"
const router = express.Router()
//import controllers
import {registerUsers, loginUsers} from "../controllers/localAuthControllers.js"
import {facebooklogin} from "../controllers/facebookAuthControllers.js"


router.post('/register', registerUsers)
router.post('/login', loginUsers)
router.post('/facebooklogin', facebooklogin)

export default router