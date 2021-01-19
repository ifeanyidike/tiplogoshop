import express from "express"
const router = express.Router()

import {
    CreateOLevelResultUploadOrder,
    getOLevelResultUploadOrderById,
    getMyOLevelResultUploadOrders,
    adminGetMyOLevelResultUploadOrders,
    getOLevelResultUploadOrders,
    adminOLevelResultUploadFileUpload,
    deleteOLevelResultUploadOrder
} from "../controllers/oLevelResultUploadControllers.js"

import { documentsUpload } from "../controllers/uploadControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect,
    documentsUpload.array('document'),
    CreateOLevelResultUploadOrder)
    .get(protect, admin, getOLevelResultUploadOrders)

router.route('/myorders').get(protect, getMyOLevelResultUploadOrders)
router.route('/myorders/:userId').get(protect, adminGetMyOLevelResultUploadOrders)

router.route("/:id").get(protect, getOLevelResultUploadOrderById)
    .delete(protect, admin, deleteOLevelResultUploadOrder)
router.route("/:id/adminupload").put(protect, admin,
    documentsUpload.single('document'), adminOLevelResultUploadFileUpload)


export default router