import express from "express"
const router = express.Router()

import {
    addCardOrderItems,
    getCardOrderById,
    updateCardOrderToPaid,
    getMyCardOrders,
    getCardOrders,    
} from "../controllers/cardOrderControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, addCardOrderItems)
    .get(protect, admin, getCardOrders)

router.route('/myorders').get(protect, getMyCardOrders)

router.route("/:id").get(protect, getCardOrderById)

router.route("/:id/pay").put(protect, updateCardOrderToPaid)

export default router