import asyncHandler from "express-async-handler"
import JambChangeOrder from "../models/jambChangeModels.js"

//@desc     Create new JambChange
//@route    POST /api/JambChange
//@access   Private

export const addJambChangeItems = asyncHandler(async(req, res)=>{
    const { orderItems, paymentMethod } = req.body
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')
        return
    }else{
        const order = new JambChangeOrder({
            orderItems: orderItems,
            user: req.user._id,
            paymentMethod: paymentMethod
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

//@desc     GET JambChange by ID
//@route    GET /api/JambChange/:id
//@access   Private

export const getJambChangeOrderById = asyncHandler(async(req, res)=>{
    const order = 
        await JambChangeOrder.findById(req.params.id).populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

//@desc     Update JambChange to Paid
//@route    PUT /api/JambChange/:id/pay
//@access   Private

export const updateJambChangeOrderToPaid = asyncHandler(async(req, res)=>{
    const order = await JambChangeOrder.findById(req.params.id)
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


//@desc     Get logged in user Jamb Change Orders
//@route    GET /api/JambChange/myJambChanges
//@access   Private

export const getMyJambChangeOrders = asyncHandler(async(req, res)=>{
    const orders = await JambChangeOrder.find({user: req.user._id})
    res.json(orders)
})

//@desc     Get all Jamb Change Orders
//@route    GET /api/Jamb Change Orders/
//@access   Private/Admin

export const getJambChangeOrders = asyncHandler(async(req, res)=>{
    const orders = await JambChangeOrder.find({}).populate('user', 'id name')
    res.json(orders)
    
})