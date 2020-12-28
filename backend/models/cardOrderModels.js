import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems:[
        {
            name: {
                type: String,
                required: true,                
            },
            qty: {
                type: Number,
                required: true
            },
            image:{
                type:String,
                required: true
            },
            price: {
                type:Number,
                required: true
            }, 
            card: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Cards',
            },           
        },
    ],
    paymentMethod:{
        type: String,
        required: true
    },
    paymentResult:{
        id:{
            type: String,            
        },
        status:{
            type: String
        },
        update_time:{
            type: String
        },
        email:{
            type: String
        }
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false
    },
    paidAt:{
        type: Date
    },    
    
},{
    timestamps: true
})

const CardOrder = mongoose.model('CardOrder', orderSchema)
export default CardOrder