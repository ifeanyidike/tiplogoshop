import asyncHandler from "express-async-handler"
import CardOrder from "../models/cardOrderModels.js"

//@desc     Create new CardOrder
//@route    POST /api/CardOrders
//@access   Private

export const addCardOrderItems = asyncHandler(async(req, res)=>{
    const{orderItems, paymentMethod} = req.body
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')
        return
    }else{
        const order = new CardOrder({
            orderItems: orderItems,
            user: req.user._id,
            paymentMethod: paymentMethod
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

//@desc     GET CardOrder by ID
//@route    GET /api/CardOrders/:id
//@access   Private

export const getCardOrderById = asyncHandler(async(req, res)=>{
    const order = 
    await CardOrder.findById(req.params.id).populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})

//@desc     Update CardOrder to Paid
//@route    PUT /api/CardOrders/:id/pay
//@access   Private

export const updateCardOrderToPaid = asyncHandler(async(req, res)=>{
    const order = await CardOrder.findById(req.params.id)
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


//@desc     Get logged in user Card Orders
//@route    GET /api/CardOrders/myCardOrders
//@access   Private

export const getMyCardOrders = asyncHandler(async(req, res)=>{
    const orders = await CardOrder.find({user: req.user._id})
    res.json(orders)
})

//@desc     Get all Card Orders
//@route    GET /api/Card Orders/
//@access   Private/Admin

export const getCardOrders = asyncHandler(async(req, res)=>{
    const orders = await CardOrder.find({}).populate('user', 'id name')
    res.json(orders)
    
})