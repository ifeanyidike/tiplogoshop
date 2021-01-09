import asyncHandler from "express-async-handler"
import ChangeOfCourseInstitutionOrder from "../models/jambChangeModels.js"

//@desc     Create new changeofcourseinstitution
//@route    POST /api/changeofcourseinstitution
//@access   Private

export const CreateChangeOfCourseInstitutionOrder = asyncHandler(async(req, res)=>{
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
        const order = new ChangeOfCourseInstitutionOrder({
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


//@desc     Create new changeofcourseinstitution
//@route    PUT /api/changeofcourseinstitution
//@access   Private

export const UpdateChangeOfCourseInstitutionOrder = asyncHandler(async(req, res)=>{
    const { orderItems} = req.body
    
    if(!orderItems){
        throw new Error('No order items')
    }
    
    if(orderItems && orderItems.length === 0){
        throw new Error('No Order items')        
    }else{
        const order = new ChangeOfCourseInstitutionOrder({
            orderItems
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})



//@desc     GET changeofcourseinstitution by ID
//@route    GET /api/changeofcourseinstitution/:id
//@access   Private

export const getChangeOfCourseInstitutionOrderById = asyncHandler(async(req, res)=>{
    const order = 
        await ChangeOfCourseInstitutionOrder.findById(req.params.id)
        .populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})


//@desc     Get logged in user Jamb Change Orders
//@route    GET /api/changeofcourseinstitution/myorders
//@access   Private

export const getMyChangeOfCourseInstitutionOrders = asyncHandler(async(req, res)=>{
    const orders = await ChangeOfCourseInstitutionOrder.find({user: req.user._id})
    res.json(orders)
})

//@desc     Get all Jamb Change Orders
//@route    GET /api/changeofcourseinstitution/
//@access   Private/Admin

export const getChangeOfCourseInstitutionOrders = asyncHandler(async(req, res)=>{
    const orders = await ChangeOfCourseInstitutionOrder.find({})
                    .populate('user', 'id name')
    res.json(orders)    
})

//@desc     Get all Jamb Change Orders
//@route    GET /api/changeofcourseinstitution/
//@access   Private/Admin

export const deleteChangeOfCourseInstitutionOrder = asyncHandler(async(req, res)=>{
    const order = await ChangeOfCourseInstitutionOrder.findById(req.params.id)
    if(order){
        order.remove()
        res.json({message: 'order removed'})
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
    
    res.json(orders)    
})