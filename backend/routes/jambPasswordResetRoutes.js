import express from "express"
const router = express.Router()

import {
    addJambPasswordResetItems,
    getJambPasswordResetOrderById,
    updateJambPasswordResetOrderToPaid,
    getMyJambPasswordResetOrders,
    getJambPasswordResetOrders,    
} from "../controllers/jambPasswordResetControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, addJambPasswordResetItems)
    .get(protect, admin, getJambPasswordResetOrders)

router.route('/myorders').get(protect, getMyJambPasswordResetOrders)

router.route("/:id").get(protect, getJambPasswordResetOrderById)

router.route("/:id/pay").put(protect, updateJambPasswordResetOrderToPaid)

export default router