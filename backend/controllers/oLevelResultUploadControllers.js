import asyncHandler from "express-async-handler"
import OLevelResultUploadOrder from "../models/oLevelResultUploadModels.js"
import {documentsUpload} from "../controllers/uploadControllers.js"

//@desc     Create new OLevelResultUpload
//@route    POST /api/olevelresultupload
//@access   Private
export const CreateOLevelResultUploadOrder =  asyncHandler(async(req, res)=>{
    const { orderItems, price, paymentMethod, paymentResult } = req.body
    let filePath = []
    if(!req.files){
        throw new Error('No file supplied')
    }
    
    req.files.forEach(file => filePath.push(file.path))
    
    if(!orderItems){
        throw new Error('No order items')
    }
    
    if(!paymentResult){
        throw new Error('No payment result')
    }
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')        
    }else{
        const order = new OLevelResultUploadOrder({
            orderItems:{
                type: orderItems.type,
                name: orderItems.name,
                profileCode: orderItems.profileCode,
                file: filePath
            },
            user: req.user._id,
            price,
            paymentMethod,
            paymentResult,
            isPaid: true,
            paidAt: Date.now()
        })
        
        const createdOrder = await order.save()
        res.status(201).json({
            item: createdOrder,
            filePath: `/${req.file.path}`
        })
    }
})


//@desc     GET OLevelResultUpload by ID
//@route    GET /api/olevelresultupload/:id
//@access   Private
export const getOLevelResultUploadOrderById = asyncHandler(async(req, res)=>{
    const order = 
        await OLevelResultUploadOrder.findById(req.params.id)
        .populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

//@desc     Get logged in user OLevelResultUploads
//@route    GET /api/olevelresultupload/myorders
//@access   Private
export const getMyOLevelResultUploadOrders = asyncHandler(async(req, res)=>{
    const orders = await OLevelResultUploadOrder.find({user: req.user._id})
    res.json(orders)
})

//@desc     Get all OLevel Result Uploads
//@route    GET /api/olevelresultuploads/
//@access   Private/Admin
export const getOLevelResultUploadOrders = asyncHandler(async(req, res)=>{
    const orders = await OLevelResultUploadOrder.find({})
                    .populate('user', 'id name')
    res.json(orders)    
})