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
} from "../controllers/localAuthControllers.js"

import {
    updateUserProfile,
    debitWallet,
    creditWallet,
    getAllUsers,
    getUser,
    deleteUser,
    makeAdmin,
    emailAUser,
    emailAllUsers,
    addProfilePhoto
} from "../controllers/userControllers.js"
import { facebooklogin } from "../controllers/facebookAuthControllers.js"
import { protect, admin } from "../middlewares/authMiddleware.js"
import { profilePhotoMemoryUpload } from "../controllers/uploadControllers.js"

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
router.route('/').get(getAllUsers)
router.route('/:id').get(getUser).delete(protect, admin, deleteUser)
router.route('/makeadmin/:id').put(protect, admin, makeAdmin)
router.route('/:id/email').post(protect, admin, emailAUser)
router.route('/email').post(protect, admin, emailAllUsers)

router.route('/:id/profilephoto')
    .put(protect, profilePhotoMemoryUpload.single('image'),
        addProfilePhoto)



export default router