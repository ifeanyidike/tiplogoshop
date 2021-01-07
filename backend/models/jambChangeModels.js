import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems:
        {
            type: {     
                type: String,
                required: true
            },
            fullName: {
                type: String,
                required: true
            },
            regNo:{
                type:String,
                required: true
            },
            profileCode:{
                type:String,
                required: true
            },
            otp:{
                type:String,
                required: true
            },
            choices:[
              {
                  preferredProgram: {
                    type:String,
                    required: true
                  },
                  institution: {
                    type:String,
                    required: true
                  },
                  course: {
                    type:String,
                    required: true
                  },
              }  
            ],                    
        },    
    price: {
        type:Number,
        required: true
    },
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
        updated_time:{
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

const JambChangeOrder = mongoose.model('JambChangeOrder', orderSchema)
export default JambChangeOrder