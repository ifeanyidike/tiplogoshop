import express from "express"
const router = express.Router()
//import controllers
import {
    registerUsers, 
    loginUsers, 
    activateAccount,
    forgotPassword,
    resetPassword,
    resendEmail,
    updateUserProfile,
    debitWallet,
    creditWallet
} from "../controllers/localAuthControllers.js"
import {facebooklogin} from "../controllers/facebookAuthControllers.js"

router.post('/register', registerUsers)
router.post('/login', loginUsers)
router.post('/facebooklogin', facebooklogin)
router.route('/emailconfirmation/').put(activateAccount)
router.route('/forgotpassword/').put(forgotPassword)
router.route('/resetpassword/').put(resetPassword)
router.route('/resendemail/').patch(resendEmail)
router.route('/profile/update').put(updateUserProfile)
router.route('/wallet/credit/').put(creditWallet)
router.route('/wallet/debit/').put(debitWallet)


export default router