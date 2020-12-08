import mongoose from "mongoose"
import bcrypt from "bcryptjs"

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
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
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

const User = mongoose.model("User", userSchema);
export default User