import express from "express"
const router = express.Router()

import {
    CreateOLevelResultUploadOrder,
    getOLevelResultUploadOrderById,
    getMyOLevelResultUploadOrders,
    getOLevelResultUploadOrders,    
} from "../controllers/oLevelResultUploadControllers.js"

import {documentsUpload} from "../controllers/uploadControllers.js"

import { protect, admin } from "../middlewares/authMiddleware.js"

router.route("/").post(protect, 
                    documentsUpload.array('document'),  
                    CreateOLevelResultUploadOrder)
                .get(protect, admin, getOLevelResultUploadOrders)

router.route('/myorders').get(protect, getMyOLevelResultUploadOrders)

router.route("/:id").get(protect, getOLevelResultUploadOrderById)


export default router