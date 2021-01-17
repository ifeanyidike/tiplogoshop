import express from "express"
const router = express.Router()

import {
    createChangeOfCourseInstitutionOrder,
    updateChangeOfCourseInstitutionOrder,
    getChangeOfCourseInstitutionOrderById,
    getMyChangeOfCourseInstitutionOrders,
    getChangeOfCourseInstitutionOrders,
    deleteChangeOfCourseInstitutionOrder,
    adminGetMyChangeOfCourseOrders
} from "../controllers/jambChangeControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, createChangeOfCourseInstitutionOrder)
    .get(protect, admin, getChangeOfCourseInstitutionOrders)

router.route('/myorders').get(protect, getMyChangeOfCourseInstitutionOrders)
router.route('/myorders/:userId').get(protect, adminGetMyChangeOfCourseOrders)

router.route("/:id").get(protect, getChangeOfCourseInstitutionOrderById)
    .delete(protect, admin, deleteChangeOfCourseInstitutionOrder)
    .put(protect, updateChangeOfCourseInstitutionOrder)

export default router