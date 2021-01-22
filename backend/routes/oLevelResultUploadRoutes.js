import express from "express"
const router = express.Router()

import {
    createOLevelResultUploadOrder,
    getOLevelResultUploadOrderById,
    getMyOLevelResultUploadOrders,
    adminGetMyOLevelResultUploadOrders,
    getOLevelResultUploadOrders,
    adminOLevelResultUploadFileUpload,
    deleteOLevelResultUploadOrder,
    getOLevelResultUploadBlobById,

} from "../controllers/oLevelResultUploadControllers.js"

import { documentsUpload, imageMemoryUpload } from "../controllers/uploadControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect,
    imageMemoryUpload.array('document'),
    createOLevelResultUploadOrder)
    .get(protect, admin, getOLevelResultUploadOrders)

router.route('/myorders').get(protect, getMyOLevelResultUploadOrders)
router.route('/myorders/:userId').get(protect, adminGetMyOLevelResultUploadOrders)

router.route('/:id/blob').get(getOLevelResultUploadBlobById)

router.route("/:id").get(protect, getOLevelResultUploadOrderById)
    .delete(protect, admin, deleteOLevelResultUploadOrder)

router.route("/:id/adminupload").put(protect, admin,
    imageMemoryUpload.single('document'), adminOLevelResultUploadFileUpload)


export default router