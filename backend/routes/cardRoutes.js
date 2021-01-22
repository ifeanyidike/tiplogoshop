import express from "express"
const router = express.Router()

import {
    getCards,
    getFewCards,
    getCardById,
    deleteCard,
    createCard,
    updateCard,
    addCardItem,
    deliverCardItem,
} from "../controllers/cardControllers.js"

import { profilePhotoUpload, imageMemoryUpload } from "../controllers/uploadControllers.js"
import { createSoldCard, getMySoldCards } from "../controllers/soldCardControllers.js"
import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").get(getCards).post(protect, admin, createCard)
router.route("/few/:num").get(getFewCards)
router.route('/:id').get(getCardById)
    .delete(protect, admin, deleteCard)
    .put(protect, admin, imageMemoryUpload.single('image'), updateCard)

router.route("/:id/items")
    .patch(protect, deliverCardItem)
    .put(protect, admin, addCardItem)

router.route("/sold/:cardId/:userId")
    .post(protect, createSoldCard)
router.route('/sold/:userId').get(protect, getMySoldCards)
export default router