import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import CardOrder from "../models/cardOrderModels.js"
import User from "../models/userModels.js"
import Card from "../models/cardModels.js"
import { mg, mgOptions, emailMessageCardTemplate } from "../utils/sendEmail.js"

//@desc     Create new CardOrder
//@route    POST /api/CardOrders
//@access   Private

export const addCardOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, paymentMethod } = req.body

    if (orderItems && orderItems.length === 0) {
        throw new Error('No Order items')
        return
    } else {
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

export const getCardOrderById = asyncHandler(async (req, res) => {
    const order =
        await CardOrder.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


//@desc     Update CardOrder without Pay
//@route    PUT /api/CardOrders/:id/pay
//@access   Private

export const updateCardOrderWithoutPay = asyncHandler(async (req, res) => {

    const order = await CardOrder.findById(req.params.id)
    const { orderItems, paymentMethod } = req.body

    if (orderItems && orderItems.length === 0) {
        throw new Error('No Order items')
        return
    }

    if (order.isPaid === true) {
        res.status(401)
        throw new Error('Order already completed')
    }

    if (order && order.isPaid === false) {
        order.orderItems = orderItems
        order.paymentMethod = paymentMethod

        const updatedOrder = await order.save()
        res.json(updatedOrder)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


//@desc     Update CardOrder to Paid
//@route    PUT /api/CardOrders/:id/pay
//@access   Private

export const updateCardOrderToPaid = asyncHandler(async (req, res) => {
    const order = await CardOrder.findById(req.params.id)
    const { id, status, updated_time, email } = req.body

    if (order.isPaid === true) {
        res.status(401)
        throw new Error('Order already completed')
    }

    if (order && order.isPaid === false) {
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
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})


//@desc     Update CardOrder to Delivered
//@route    PUT /api/CardOrders/:id/deliver
//@access   Private


//@desc     Get logged in user Card Orders
//@route    GET /api/CardOrders/myCardOrders
//@access   Private

export const getMyCardOrders = asyncHandler(async (req, res) => {
    const orders = await CardOrder.find({ user: req.user._id })
    res.json(orders)
})

//@desc     Get all Card Orders
//@route    GET /api/Card Orders/
//@access   Private/Admin

export const getCardOrders = asyncHandler(async (req, res) => {
    const orders = await CardOrder.find({}).populate('user', 'id name')
    res.json(orders)

})

export const updateCardOrderToDelivered = asyncHandler(async (req, res) => {

    const { purchasedItems } = req.body
    const order = await CardOrder.findById(req.params.id)
    const user_id = order.user
    const user = await User.findById(user_id)

    if (!user) {
        throw new Error("User not found")
    }
    const card = await Card.findById(order.orderItems[0].card)
    if (!card) {
        throw new Error("Card not found")
    }

    if (order.isDelivered === true) {
        res.status(401)
        throw new Error('Order already delivered')
    }

    if (order && order.isDelivered === false) {
        const from = "nonreply@tiplogo.com"
        const subject = `${card.name} Purchase`

        const heading = `Your ${card.name} details`
        const msg = 'Thanks for the purchase. Here are the details'

        const cardbody = purchasedItems.map(item => (
            `
                <tr>
                    <td>${item._id}</td>
                    <td>${item.pin && item.pin}</td>
                    <td>${item.serialNo && item.serialNo}</td>
                    <td>${item.token && item.token}</td>                    
                </tr>            
            `
        ))

        const message = emailMessageCardTemplate(heading, msg, cardbody)

        const data = mgOptions(from, user.email, subject, message)
        mg.messages().send(data, (error, body) => {
            if (error) {
                console.log(error)
                res.send(error)
                throw new Error(error)

            } else {
                order.isDelivered = true
                order.deliveredAt = Date.now()
                order.save()

                res.status(200).json({
                    message: 'Order Delivered'
                })
            }
        })
    }
})

export const getMyNotPaidCardOrders = asyncHandler(async (req, res) => {
    const ObjectId = mongoose.Types.ObjectId
    const objId = new ObjectId(req.params.userId)

    const notPaidCards = await CardOrder.find({ user: objId, isPaid: false })

    if (notPaidCards) {
        res.json(notPaidCards)
    } else {
        throw new Error("Order does not exist")
    }


})