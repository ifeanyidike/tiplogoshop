import mongoose from "mongoose"
import asyncHandler from "express-async-handler"
import OLevelResultUploadOrder from "../models/oLevelResultUploadModels.js"
import request from "request"
import { mg, mgOptions, servicesMessageTemplate, mgOptionsWithAttachment } from "../utils/sendEmail.js"

//@desc     Create new OLevelResultUpload
//@route    POST /api/olevelresultupload
//@access   Private
export const CreateOLevelResultUploadOrder = asyncHandler(async (req, res) => {
    const {
        type, name, profileCode, price, paymentMethod, paymentResultId,
        paymentResultStatus, paymentResultUpdateTime, paymentResultEmail
    }
        = req.body


    if (!req.files) {
        throw new Error('No file supplied')
    }

    const filePath = req.files.map(file => file.path)

    if (!type || !name || !profileCode) {
        throw new Error('No order items or order items are incomplete')
    }

    const from = "nonreply@tiplogo.com"
    const subject = "O Level Result Upload Order"

    const heading = `Your O Level Result Upload Order`
    const msg = `<div> 
        <p>Thank you for placing an order for O'Level Result Upload. </p>
        <p>Check back in few hours. We'll get back to you shortly. </p>
    </div>`

    const message = servicesMessageTemplate(heading, msg)
    const data = mgOptions(from, req.user.email, subject, message)

    const order = new OLevelResultUploadOrder({
        orderItems: {
            type: type,
            name: name,
            profileCode: profileCode,
            files: filePath
        },
        user: req.user._id,
        price,
        paymentMethod,
        paymentResult: {
            id: paymentResultId,
            status: paymentResultStatus,
            updated_time: paymentResultUpdateTime,
            email: paymentResultEmail
        },
        isPaid: true,
        paidAt: Date.now()
    })



    const createdOrder = await order.save()

    if (createdOrder) {
        mg.messages().send(data, (error, body) => {
            if (error) {
                throw new Error('An error occurred when sending email')
            } else {
                res.status(201).json(createdOrder)
            }
        })
    }

})


//@desc     GET OLevelResultUpload by ID
//@route    GET /api/olevelresultupload/:id
//@access   Private
export const getOLevelResultUploadOrderById = asyncHandler(async (req, res) => {
    const order =
        await OLevelResultUploadOrder.findById(req.params.id)
            .populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

//@desc     Get logged in user OLevelResultUploads
//@route    GET /api/olevelresultupload/myorders
//@access   Private
export const getMyOLevelResultUploadOrders = asyncHandler(async (req, res) => {
    const orders = await OLevelResultUploadOrder.find({ user: req.user._id })
    res.json(orders)
})

//@desc     Get all OLevel Result Uploads
//@route    GET /api/olevelresultuploads/
//@access   Private/Admin
export const getOLevelResultUploadOrders = asyncHandler(async (req, res) => {
    const orders = await OLevelResultUploadOrder.find({})
        .populate('user', 'id name')
    res.json(orders)
})


export const adminGetMyOLevelResultUploadOrders = asyncHandler(async (req, res) => {
    const ObjectId = mongoose.Types.ObjectId
    const objId = new ObjectId(req.params.userId)

    const order = await OLevelResultUploadOrder.find({ user: objId })

    if (order) {
        res.send(order)
    } else {
        throw new Error("Order does not exist")
    }
})


//@desc     Delete a O level result upload
//@route    DELETE /api/olevelresultupload/:id
//@access   Private/Admin

export const deleteOLevelResultUploadOrder = asyncHandler(async (req, res) => {
    const order = await OLevelResultUploadOrder.findById(req.params.id)
    if (order) {
        order.remove()
        res.json({ message: 'order removed' })
    } else {
        res.status(404)
        throw new Error('Order not found')
    }

    res.json(orders)
})



export const adminOLevelResultUploadFileUpload = asyncHandler(async (req, res) => {
    const order = await OLevelResultUploadOrder.findById(req.params.id)

    if (order) {
        order.admin_upload = req.file.path

        const attachment = request(path.join(process.env.CLIENT_URL, req.file.path))
        const from = "nonreply@tiplogo.com"
        const subject = "O level result upload completed"

        const heading = `We have completed your o level result upload`
        const msg = `<div> 
            <p>Thank you for ordering your change of O level result upload with us </p>
            <p>We have successfully completed the process. Find the attached file below </p>
            <p>You can also find it in your profile in our website.  </p>
            
        </div>`

        const message = servicesMessageTemplate(heading, msg)
        const data = mgOptionsWithAttachment(
            from, req.user.email, subject, message, attachment)


        const updatedOrder = await order.save()
        if (updatedOrder) {
            mg.messages().send(data, (error, body) => {
                if (error) {
                    throw new Error('An error occurred when sending email')
                } else {
                    res.json(req.file.path)
                }
            })
        }
    } else {
        res.statusCode(404)
        throw new Error('Order not found')
    }
})