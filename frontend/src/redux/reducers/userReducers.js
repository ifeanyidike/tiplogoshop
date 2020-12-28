import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_CONFIRM_EMAIL_REQUEST,
    USER_CONFIRM_EMAIL_SUCCESS,
    USER_CONFIRM_EMAIL_FAIL,
    USER_PASSWORD_RESET_REQUEST,
    USER_PASSWORD_RESET_SUCCESS,
    USER_PASSWORD_RESET_FAIL,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAIL,
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
} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true}
        
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        
        case USER_LOGOUT:
            return {}
            
        default:
            return state
    }
}


export const userRegisterReducer = (state={}, action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true}
            
        case USER_REGISTER_SUCCESS:
            return {
                loading: false, 
                success: true,
                result: action.payload
            }
        
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}

export const userUpdateReducer = (state={}, action) =>{
    switch(action.type){
        case USER_UPDATE_REQUEST:
            return {loading: true}
            
        case USER_UPDATE_SUCCESS:
            return {
                loading: false,                 
                userInfo: action.payload
            }
        
        case USER_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}


export const accountActivateReducer = (state={}, action) =>{
    switch(action.type){
        case USER_CONFIRM_EMAIL_REQUEST:
            return {loading: true}
            
        case USER_CONFIRM_EMAIL_SUCCESS:
            return {loading: false, success: true}
        
        case USER_CONFIRM_EMAIL_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}

export const emailResendReducer = (state={}, action) =>{
    switch(action.type){
        case USER_RESEND_CODE_REQUEST:
            return {loading: true}
            
        case USER_RESEND_CODE_SUCCESS:
            return {loading: false, success: true, result: action.payload}
        
        case USER_RESEND_CODE_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state
    }
}

export const passwordForgotReducer = (state={}, action) =>{
    switch(action.type){
        case USER_FORGOT_PASSWORD_REQUEST:
            return {
                loading: true
            }
            
        case USER_FORGOT_PASSWORD_SUCCESS:
            return {
                loading: false, 
                result: action.payload,
                success: true
            }
        
        case USER_FORGOT_PASSWORD_FAIL:
            return {
                loading: false, 
                error: action.payload
            }        
        default:
            return state
    }
}

export const passwordResetReducer = (state={}, action) =>{
    switch(action.type){
        
        case USER_PASSWORD_RESET_REQUEST:
            return {
                loading: true
            }
            
        case USER_PASSWORD_RESET_SUCCESS:
            return {
                loading: false, 
                result: action.payload,
                success: true
            }
        
        case USER_PASSWORD_RESET_FAIL:
            return {
                loading: false, 
                error: action.payload
            }        
        default:
            return state
    }
}


export const profilePhotoReducer = (state={}, action) =>{
    switch(action.type){
        case USER_PROFILE_PHOTO_REQUEST:
            return {
                loading: true
            }
            
        case USER_PROFILE_PHOTO_SUCCESS:
            return {
                loading: false, 
                photoUrl: action.payload,
                success: true
            }
        
        case USER_PROFILE_PHOTO_FAIL:
            return {
                loading: false, 
                error: action.payload
            }        
        default:
            return state
    }
}


export const photoReducer = (state={}, action) =>{
    switch(action.type){        
        case SET_PROFILE_IMAGE:
            return {                
                imageUrl: action.payload,                
            }
                   
        default:
            return state
    }
}