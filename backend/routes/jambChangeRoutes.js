import express from "express"
const router = express.Router()

import {
    addJambChangeItems,
    getJambChangeOrderById,
    updateJambChangeOrderToPaid,
    getMyJambChangeOrders,
    getJambChangeOrders,    
} from "../controllers/jambChangeControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, addJambChangeItems)
    .get(protect, admin, getJambChangeOrders)

router.route('/myorders').get(protect, getMyJambChangeOrders)

router.route("/:id").get(protect, getJambChangeOrderById)

router.route("/:id/pay").put(protect, updateJambChangeOrderToPaid)

export default router