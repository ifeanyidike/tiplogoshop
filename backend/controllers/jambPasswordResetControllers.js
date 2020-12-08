import asyncHandler from "express-async-handler"
import JambPasswordResetOrder from "../models/JambPasswordResetModel.js"

//@desc     Create new JambPasswordResetOrder
//@route    POST /api/JambPasswordResetOrders
//@access   Private

export const addJambPasswordResetItems = asyncHandler(async(req, res)=>{
    const { orderItems, paymentMethod } = req.body
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')
        return
    }else{
        const order = new JambPasswordResetOrder({
            orderItems: orderItems,
            user: req.user._id,
            paymentMethod: paymentMethod
        })
        
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

//@desc     GET JambPasswordResetOrder by ID
//@route    GET /api/JambPasswordResetOrders/:id
//@access   Private

export const getJambPasswordResetOrderById = asyncHandler(async(req, res)=>{
    const order = 
        await JambPasswordResetOrder.findById(req.params.id).populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

//@desc     Update JambPasswordResetOrder to Paid
//@route    PUT /api/JambPasswordResetOrders/:id/pay
//@access   Private

export const updateJambPasswordResetOrderToPaid = asyncHandler(async(req, res)=>{
    const order = await JambPasswordResetOrder.findById(req.params.id)
    const {id, status, updated_time, email} = req.body
    
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id,
            status,
            updated_time,
            email
        }
        
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }    
})


//@desc     Get logged in user Jamb Password Reset Orders
//@route    GET /api/JambPasswordResetOrders/myJambChangeOrders
//@access   Private

export const getMyJambPasswordResetOrders = asyncHandler(async(req, res)=>{
    const orders = await JambPasswordResetOrder.find({user: req.user._id})
    
    res.json(orders)
})

//@desc     Get all Jamb Password Reset Orders
//@route    GET /api/Jamb Password Reset Orders/
//@access   Private/Admin

export const getJambPasswordResetOrders = asyncHandler(async(req, res)=>{
    const orders = await JambPasswordResetOrder.find({}).populate('user', 'id name')
    
    res.json(orders)
    
})