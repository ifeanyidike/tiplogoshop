import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import CryptoJS from 'crypto-js'

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
        },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowercase: true
        },
    wallet:{
        type: Number,
        default: 0.0
    },
    profile:{        
        picture:{
            type: String,
        },
        phoneNo:{
            type: String
        },
        address:{
            type:String
        }
    },
    confirmed:{
        type:  Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    },
    resetLink:{
        type: String,        
        default: '',
    },    
},{
    timestamps: true
});

//compare password and match it with the entered one
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//hash the password. Pre runs before the model.
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

//hash the wallet. Pre runs before the model.
userSchema.pre('save', async function(next){
    if(!this.isModified('wallet')){
        next()
    }
    
    const cipherText = await CryptoJS.AES.encrypt(this.wallet, process.env.WALLET_SECRET_KEY).toString();
    this.wallet = cipherText
})

const User = mongoose.model("User", userSchema);
export default User