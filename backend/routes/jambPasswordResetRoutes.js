import express from "express"
const router = express.Router()

import {
    createJambPasswordResetOrder,
    updateJambPasswordResetOrder,
    getJambPasswordResetOrderById,
    getMyJambPasswordResetOrders,
    getJambPasswordResetOrders,    
    deleteJambPasswordResetOrder
} from "../controllers/jambPasswordResetControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, createJambPasswordResetOrder)    
    .get(protect, admin, getJambPasswordResetOrders)

router.route('/myorders').get(protect, getMyJambPasswordResetOrders)

router.route("/:id").get(protect, getJambPasswordResetOrderById)
                    .delete(protect, admin, deleteJambPasswordResetOrder)
                    .put(protect, updateJambPasswordResetOrder)

export default router