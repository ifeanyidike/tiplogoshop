import mongoose from "mongoose"
import User from "./userModels.js";

const cardSchema = mongoose.Schema({
    user:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,  
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,        
    } 
      
}, {
    timestamps: true
});

const Card = mongoose.model("Card", cardSchema)

export default Card