import express from "express"
const router = express.Router()

import {
    createContact,
    getContactById,
    getContactByEmail,
    getAllContacts,
    deleteContact,
} from "../controllers/contactControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(createContact)
    .get(protect, admin, getAllContacts)

router.route("/:id")
    .get(protect, admin, getContactById)
    .delete(protect, admin, deleteContact)

router.route("/byemail/:email").get(protect, admin, getContactByEmail)

export default router