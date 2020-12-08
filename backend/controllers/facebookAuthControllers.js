import User from "../models/userModels.js"

import generateToken from "../utils/generateToken.js"
import fetch from "node-fetch"




export const facebooklogin =  (req, res) =>{
    const {userID, accessToken} = req.body
    
    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`
    
    fetch(urlGraphFacebook, { method: 'GET' })
         .then(response => response.json())
         .then(response => {
            
            const {name, email} = response
             
             User.findOne({email}).exec((err, user) => {
                
                if(err){
                    res.status(400)
                    throw new Error("Something went wrong")
                }
                
                if(user){
                    //if user exists, login user
                    loginFacebookUser(res, user)
                }else{
                    //if user does not exist, add it to database
                                                            
                    registerFacebookUser(res, name, email)
                    
                }
                
             })
         })            
             
}


const registerFacebookUser = (res, name, email) =>{ 
    let password = email+process.env.JWT_SECRET;  
    let newUser =  User.create({name, email, password})  
    
    if(newUser){
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,   
            token: generateToken(newUser._id)         
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }  
                 
 }
 
 const loginFacebookUser = (res, user) =>{     
     res.json({
         _id: user._id,
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
         token: generateToken(user._id)
     })
 }









