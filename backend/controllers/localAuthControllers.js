import User from "../models/userModels.js"
import fetch from "node-fetch"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
export const registerUsers = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body
    
    const userExists = await User.findOne({email})
    
    if(userExists){
        
        // res.status(400).json({error: 'User already exists'})
        res.status(400)
        throw new Error('User already exists')
    }
    
    const user = await User.create({name, email, password})
    
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,   
            token: generateToken(user._id)         
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }   
})

// @desc    Auth user and get a token
// @route   POST /api/users
// @access  Public
export const loginUsers = asyncHandler(async(req, res) =>{
    const {email, password} = req.body
    
    const user = await User.findOne({email})    
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})