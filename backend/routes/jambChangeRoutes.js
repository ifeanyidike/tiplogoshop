import express from "express"
const router = express.Router()

import {
    createChangeOfCourseInstitutionOrder,
    updateChangeOfCourseInstitutionOrder,
    getChangeOfCourseInstitutionOrderById,
    getMyChangeOfCourseInstitutionOrders,
    getChangeOfCourseInstitutionOrders,
    deleteChangeOfCourseInstitutionOrder,
    adminGetMyChangeOfCourseOrders,
    adminChangeOfCourseFileUpload,
    getChangeOfCourseBlobById
} from "../controllers/jambChangeControllers.js"
import { documentsUpload, imageMemoryUpload } from "../controllers/uploadControllers.js"
import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, createChangeOfCourseInstitutionOrder)
    .get(protect, admin, getChangeOfCourseInstitutionOrders)

router.route('/myorders').get(protect, getMyChangeOfCourseInstitutionOrders)
router.route('/myorders/:userId').get(protect, adminGetMyChangeOfCourseOrders)

router.route("/:id").get(protect, getChangeOfCourseInstitutionOrderById)
    .delete(protect, admin, deleteChangeOfCourseInstitutionOrder)
    .put(protect, updateChangeOfCourseInstitutionOrder)

router.route('/:id/blob').get(getChangeOfCourseBlobById)

router.route("/:id/adminupload").put(protect, admin,
    imageMemoryUpload.single('document'), adminChangeOfCourseFileUpload)

export default router