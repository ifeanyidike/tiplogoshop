import express from "express"
const router = express.Router()

import {
    addCardOrderItems,
    getCardOrderById,
    updateCardOrderWithoutPay,
    updateCardOrderToPaid,
    updateCardOrderToDelivered,
    getMyCardOrders,
    getCardOrders        
} from "../controllers/cardOrderControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, addCardOrderItems)
    .get(protect, admin, getCardOrders)

router.route('/myorders').get(protect, getMyCardOrders)

router.route("/:id").get(protect, getCardOrderById)

router.route("/:id/update").patch(protect, updateCardOrderWithoutPay)

router.route("/:id/pay").put(protect, updateCardOrderToPaid)
router.route("/:id/deliver").put(protect, updateCardOrderToDelivered)

export default router