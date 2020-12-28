import User from "../models/userModels.js"
import fetch from "node-fetch"
import {mg, mgOptions} from "../utils/sendEmail.js"
import asyncHandler from "express-async-handler"
import generateToken, {generateShortToken} from "../utils/generateToken.js"
import jwt from "jsonwebtoken"

const jwtEmailActivate = process.env.JWT_SECRET_ACTIVATE
const jwtPassReset = process.env.JWT_SECRET_RESET

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
        const emailToken = generateShortToken(user._id, jwtEmailActivate, '30m')  
        const from = "nonreply@tiplogo.com"      
        const url = `${process.env.CLIENT_URL}/auth/activate/${emailToken}`
        const subject = "Email confirmation"
        const message = `            
                Please click this link to confirm your email: 
                <a  href="${url}">${url}</a>            
        `
        
        const data = mgOptions(from, email, subject, message)        
        mg.messages().send(data, (error, body)=>{
            if (error){
                console.log(error)
                res.send(error)
                throw new Error(error)
                
            }else{
                console.log(body)
                res.status(201).json({
                  token: emailToken,
                  message: `Email sent, please activate your account to login`
                })                
            }
        })
        // res.status(201).json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     isAdmin: user.isAdmin,   
        //     token: generateToken(user._id)         
        // })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }   
})


// @desc    resend confirmation email
// @route   PUT /api/users/resendconfirmationemail
// @access  Public

export const resendEmail = asyncHandler(async(req, res) =>{
    
    const { email } = req.body  
    
    const user = await User.findOne({email})
    
    if(user){
        const emailToken = generateShortToken(user._id, jwtEmailActivate, '30m')  
        const from = "nonreply@tiplogo.com"      
        const url = `${process.env.CLIENT_URL}/auth/activate/${emailToken}`
        const subject = "Email confirmation"
        const message = `            
                Please click this link to confirm your email: 
                <a  href="${url}">${url}</a>            
        `        
        const data = mgOptions(from, email, subject, message)        
        mg.messages().send(data, (error, body)=>{
            if (error){
                console.log(error)
                res.send(error)
                throw new Error(error)
                
            }else{                
                res.status(201).json({
                  token: emailToken,
                  message: `Email sent, please activate your account to login`
                })                
            }
        })
       
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }  
    
})

// @desc    activate an account
// @route   PUT /api/users/emailconfirmation
// @access  Public

export const activateAccount = asyncHandler(async(req, res) =>{
    const {token} = req.body        
    
    if(token){        
        const decoded = jwt.verify(token, jwtEmailActivate)
        const user = await User.findById(decoded.id)
        if(user){
            user.confirmed = true
            await user.save()
            res.status(200).send("Email has been verified")
        }else{
            res.status(404)
            throw new Error('User not found')
        }
    }else{
        res.status(404)
        throw new Error('Invalid token')
    }    
    // }else{
        
    // }
})

// @desc    forget password
// @route   PUT /api/users/forgetpassword
// @access  Public

export const forgotPassword = asyncHandler(async(req, res) =>{    
    const { email } = req.body    
    const user = await User.findOne({email})
    const resetToken = generateShortToken(user._id, jwtPassReset ,'30m')  
        
    const from = "nonreply@tiplogo.com"      
    const url = `${process.env.CLIENT_URL}/auth/passwordreset/${resetToken}`
    const subject = "Password Reset"
    const message = `            
        Please click this link to reset your password: 
        <a  href="${url}">${url}</a>            
    `;
        
    const data = mgOptions(from, email, subject, message)
    
    if(user && user.confirmed){
        res.status(401)
        throw new Error("The email is not confirmed")
    }
    
    if(user){
       user.resetLink = resetToken
       const updatedUser = await user.save()
       
       if(updatedUser){
           mg.messages().send(data, (error, body)=>{
            if (error){
                console.log(error)
                res.send(error)
                throw new Error(error)                    
            }else{                
                res.status(201).json({                    
                    message: `Email sent, please click on the link to reset your password`
                })                
            }
           })
        }
    }else{
        res.status(404)
        throw new Error("User not found")
    }
})

// @desc    reset password
// @route   PUT /api/users/resetpassword
// @access  Public

export const resetPassword = asyncHandler(async(req, res) =>{    
    
    const { token, password } = req.body  
      
    if(token){
        try {
            const decoded = jwt.verify(token, jwtPassReset)
            const user = await User.findById(decoded.id)
        
            if(user){
                user.password = password
                const updatedUser = await user.save()    
                if(updatedUser){
                    res.status(200).json({message: 'Password Updated'})
                }else{
                    res.status(401)
                    throw new Error("An error occurred")
                }
            }else{
                res.status(404)
                throw new Error("User or token does not exist")
            } 
        } catch (error) {
            res.status(401)
            throw new Error("Token failed")
        }               
    }else{
        res.status(404)
        throw new Error("No token found")
    }          
})


// @desc    Auth user and get a token
// @route   POST /api/users
// @access  Public
export const loginUsers = asyncHandler(async(req, res) =>{
    const {email, password} = req.body
    
    const user = await User.findOne({email})    
    
    if(user && !user.confirmed){
        throw new Error('Email not confirmed')
    }
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            wallet: user.wallet,
            profile: user.profile
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile/update
// @access  Private

export const updateUserProfile = asyncHandler(async(req, res)=>{    
    
    const user = await User.findById(req.body.user._id)
    const {name, email, profile, password} = req.body.user
    
    if(user){
        user.name = name || user.name
        user.email = email || user.email
        user.profile = profile || user.profile
        console.log(req.body.user)
        if(req.body.password){
            user.password = password            
        }
        
        const updatedUser = await user.save()
        
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
            wallet: updatedUser.wallet,
            profile: updatedUser.profile            
        })        
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})