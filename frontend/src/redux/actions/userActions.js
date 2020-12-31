import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_CONFIRM_EMAIL_REQUEST,
    USER_CONFIRM_EMAIL_SUCCESS,
    USER_CONFIRM_EMAIL_FAIL,
    USER_PASSWORD_RESET_REQUEST,
    USER_PASSWORD_RESET_SUCCESS,
    USER_PASSWORD_RESET_FAIL,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAIL,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_RESEND_CODE_REQUEST,
    USER_RESEND_CODE_SUCCESS,
    USER_RESEND_CODE_FAIL,
    USER_PROFILE_PHOTO_REQUEST,
    USER_PROFILE_PHOTO_SUCCESS,
    USER_PROFILE_PHOTO_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    SET_PROFILE_IMAGE,
    WALLET_DEBIT_REQUEST,
    WALLET_DEBIT_SUCCESS,
    WALLET_DEBIT_FAIL,
    WALLET_CREDIT_REQUEST,
    WALLET_CREDIT_SUCCESS,
    WALLET_CREDIT_FAIL
} from "../constants/userConstants"
import uuid from 'react-uuid'
import { cardPayOrder } from './cardOrderActions'

const normalConfig = {
    headers: {
        'Content-Type' : 'application/json'
    }
}

export const login = (email, password) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })                
        
        const { data } = await axios.post('/api/users/login', 
                                {email, password}, normalConfig)
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message                    
        })
    }
}

export const register = (name, email, password) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
                    
        const { data } = await axios.post('/api/users/register', 
                        {name, email, password}, normalConfig)
        
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        
        // localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const updateUser = (user) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })
        
        const { userLogin: { userInfo } } = getState()                            
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }            
        }
                    
        const { data } = await axios.put('/api/users/profile/update', {user}, config)
        
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        }) 
        
        localStorage.setItem('userInfo', JSON.stringify(data))    
        
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const activateAccount = (token) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_CONFIRM_EMAIL_REQUEST
        })
                    
        const { data } = await axios.put('/api/users/emailconfirmation', 
                        {token}, normalConfig)
        
        dispatch({
            type: USER_CONFIRM_EMAIL_SUCCESS,
            payload: data
        })
        
        // localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_CONFIRM_EMAIL_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const resendConfirmationEmail = (email) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_RESEND_CODE_REQUEST
        })
                    
        const { data } = await axios.patch('/api/users/resendemail', 
                        {email}, normalConfig)
        
        dispatch({
            type: USER_RESEND_CODE_SUCCESS,
            payload: data
        })                
        
    } catch (error) {
        dispatch({
            type: USER_RESEND_CODE_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}


export const forgotPassword = (email) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_FORGOT_PASSWORD_REQUEST
        })
                    
        const { data } = await axios.put('/api/users/forgotpassword', 
                        {email}, normalConfig)
        
        dispatch({
            type: USER_FORGOT_PASSWORD_SUCCESS,
            payload: data
        })
        
        // localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_FORGOT_PASSWORD_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const resetPassword = (token, password) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_PASSWORD_RESET_REQUEST
        })
                    
        const { data } = await axios.put('/api/users/resetpassword', 
                        {token, password}, normalConfig)
        
        dispatch({
            type: USER_PASSWORD_RESET_SUCCESS,
            payload: data
        })
        
        // localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_PASSWORD_RESET_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const facebooklogin = (userID, accessToken) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })    
        
        const { data } = await axios.post('/api/users/facebooklogin', 
                                    {userID, accessToken}, normalConfig)
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
             
        localStorage.setItem('userInfo', JSON.stringify(data))    
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const setProfilePhoto = (formData) => async(dispatch, getState) =>{            
    try {
        dispatch({
            type: USER_PROFILE_PHOTO_REQUEST
        })
        
        const { userLogin: { userInfo } } = getState()
        
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        
        const { data } = await axios.post('/api/upload/profilephoto', formData, config)
        
        dispatch({
            type: USER_PROFILE_PHOTO_SUCCESS,
            payload: data
        })                
        
    } catch (error) {
        dispatch({
            type: USER_PROFILE_PHOTO_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const setUserImage = (photoUrl) => async(dispatch, getState) =>{                
    dispatch({
        type: SET_PROFILE_IMAGE,
        payload: photoUrl
    })
}


export const debitWallet = (qty, cardId, orderId, amount) => async(dispatch, getState) =>{            
    try {
        dispatch({
            type: WALLET_DEBIT_REQUEST
        })
        
        const { userLogin: { userInfo } } = getState()
        
        const id = userInfo._id
        const transactionId = uuid()
        
        const paymentResult = {
            id: transactionId,
            status: 'success',
            update_time: String((new Date()).getTime()),
            email: userInfo.email
          }
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        
        const { data } = await axios.put('/api/users/wallet/debit', {id, amount, paymentResult}, config)
        
        dispatch({
            type: WALLET_DEBIT_SUCCESS,
            payload: data
        })                
        
        if(data){
            dispatch(cardPayOrder(qty, cardId, orderId, paymentResult))
        }
        
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: WALLET_DEBIT_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const creditWallet = (amount, paymentResult, method) => async(dispatch, getState) =>{            
    try {
        dispatch({
            type: WALLET_CREDIT_REQUEST
        })
        
        const { userLogin: { userInfo } } = getState()
        
        const id = userInfo._id
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }
        
        const { data } = await axios.put('/api/users/wallet/credit', {id, amount, paymentResult, method}, config)
        
        dispatch({
            type: WALLET_CREDIT_SUCCESS,
            payload: data
        })                
        
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: WALLET_CREDIT_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}