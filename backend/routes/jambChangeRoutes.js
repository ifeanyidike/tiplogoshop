import express from "express"
const router = express.Router()

import {
    CreateChangeOfCourseInstitutionOrder,
    UpdateChangeOfCourseInstitutionOrder,
    getChangeOfCourseInstitutionOrderById,
    getMyChangeOfCourseInstitutionOrders,
    getChangeOfCourseInstitutionOrders,    
    deleteChangeOfCourseInstitutionOrder
} from "../controllers/jambChangeControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, CreateChangeOfCourseInstitutionOrder)    
    .get(protect, admin, getChangeOfCourseInstitutionOrders)

router.route('/myorders').get(protect, getMyChangeOfCourseInstitutionOrders)

router.route("/:id").get(protect, getChangeOfCourseInstitutionOrderById)
                    .delete(protect, admin, deleteChangeOfCourseInstitutionOrder)
                    .put(protect, UpdateChangeOfCourseInstitutionOrder)

export default router