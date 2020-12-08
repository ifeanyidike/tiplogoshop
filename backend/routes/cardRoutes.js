import express from "express"
const router = express.Router()

import {
    getCards,
    getCardById,
    deleteCard,
    createCard,
    updateCard,    
} from "../controllers/cardControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").get(getCards).post(protect, admin, createCard)
router.route('/:id').get(getCardById)
    .delete(protect, admin, deleteCard)
    .put(protect, admin, updateCard)

export default router