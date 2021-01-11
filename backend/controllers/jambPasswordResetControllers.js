import asyncHandler from "express-async-handler"
import JambPasswordResetOrder from "../models/jambPasswordResetModels.js"

//@desc     Create new jambpasswordreset
//@route    POST /api/jambpasswordreset
//@access   Private

export const createJambPasswordResetOrder = asyncHandler(async(req, res)=>{
    const { orderItems, price, paymentMethod, paymentResult } = req.body
    
    if(!orderItems){
        throw new Error('No order items')
    }
    
    if(!paymentResult){
        throw new Error('No payment result')
    }
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')        
    }else{
        const order = new JambPasswordResetOrder({
            orderItems,
            user: req.user._id,
            price,
            paymentMethod,
            paymentResult,
            isPaid: true,
            paidAt: Date.now()
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})


//@desc     Create new jambpasswordreset
//@route    PUT /api/jambpasswordreset
//@access   Private

export const updateJambPasswordResetOrder = asyncHandler(async(req, res)=>{
    const { orderItems} = req.body
    
    if(!orderItems){
        throw new Error('No order items')
    }
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')        
    }else{
        const order = new JambPasswordResetOrder({
            orderItems
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})



//@desc     GET jambpasswordreset by ID
//@route    GET /api/jambpasswordreset/:id
//@access   Private

export const getJambPasswordResetOrderById = asyncHandler(async(req, res)=>{
    const order = 
        await JambPasswordResetOrder.findById(req.params.id)
        .populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})


//@desc     Get logged in user Jamb Change Orders
//@route    GET /api/jambpasswordreset/myorders
//@access   Private

export const getMyJambPasswordResetOrders = asyncHandler(async(req, res)=>{
    const orders = await JambPasswordResetOrder.find({user: req.user._id})
    res.json(orders)
})

//@desc     Get all Jamb Change Orders
//@route    GET /api/jambpasswordreset/
//@access   Private/Admin

export const getJambPasswordResetOrders = asyncHandler(async(req, res)=>{
    const orders = await JambPasswordResetOrder.find({})
                    .populate('user', 'id name')
    res.json(orders)    
})

//@desc     Get all Jamb Change Orders
//@route    GET /api/jambpasswordreset/
//@access   Private/Admin

export const deleteJambPasswordResetOrder = asyncHandler(async(req, res)=>{
    const order = await JambPasswordResetOrder.findById(req.params.id)
    if(order){
        order.remove()
        res.json({message: 'order removed'})
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
    
    res.json(orders)    
})