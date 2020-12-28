import {combineReducers} from "redux"
import { drawerToggleReducer } from "./elementReducers"
import {
    userLoginReducer,
    userRegisterReducer,
    accountActivateReducer,
    passwordForgotReducer,
    passwordResetReducer,
    emailResendReducer,
    profilePhotoReducer,
    userUpdateReducer,
    photoReducer
 } from "./userReducers"

 import {
    cardListReducer,
    cardListFewReducer,
    cardDetailsReducer,
    cardDeleteReducer,
    cardCreateReducer,
    cardUpdateReducer
} from "./cardReducers"

import {
    cardOrderCreateReducer,
    cardOrderDetailsReducer,
    cardOrderUpdateReducer,
    cardOrderPayReducer,
    cardOrderListMyReducer,
    cardOrderListReducer
} from "./cardOrderReducers"


const reducer = combineReducers({
    cardList: cardListReducer,
    cardListFew: cardListFewReducer,
    cardDetails: cardDetailsReducer,
    cardDelete: cardDeleteReducer,
    cardCreate: cardCreateReducer,
    cardUpdate: cardUpdateReducer,
    
    cardOrderCreate: cardOrderCreateReducer,
    cardOrderDetails: cardOrderDetailsReducer,
    cardOrderUpdate: cardOrderUpdateReducer,
    cardOrderPay: cardOrderPayReducer,
    cardOrderListMy: cardOrderListMyReducer,
    cardOrderList: cardOrderListReducer,
    
    drawerToggle: drawerToggleReducer,
        
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,    
    accountActivate: accountActivateReducer,
    passwordForgot: passwordForgotReducer,
    passwordReset: passwordResetReducer,
    emailResend:emailResendReducer,
    profilePhoto: profilePhotoReducer,
    userUpdate: userUpdateReducer,
    photo: photoReducer,
})

export default reducer