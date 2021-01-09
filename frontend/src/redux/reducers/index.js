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
    photoReducer,
    walletDebitReducer,
    walletCreditReducer
 } from "./userReducers"

 import {
    cardListReducer,
    cardListFewReducer,
    cardDetailsReducer,
    cardDeleteReducer,
    cardCreateReducer,
    cardUpdateReducer,
    cardItemsDeliverReducer
} from "./cardReducers"

import {
    schoolListReducer,
    schoolDetailsReducer,
    schoolByProgrammeReducer,
    schoolCreateReducer,
    schoolUpdateReducer    
} from "./schoolReducers"

import {
    serviceListReducer,
    serviceDetailsReducer,
    serviceByNameReducer,
    serviceCreateReducer,
    serviceUpdateReducer    
} from "./serviceReducers"

import { soldCardCreateReducer} from "./soldCardReducers"

import {
    cardOrderCreateReducer,
    cardOrderDetailsReducer,
    cardOrderUpdateReducer,
    cardOrderPayReducer,
    cardOrderDeliverReducer,
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
    cardItemsDeliver: cardItemsDeliverReducer,
    
    soldCardCreate: soldCardCreateReducer,
    
    cardOrderCreate: cardOrderCreateReducer,
    cardOrderDetails: cardOrderDetailsReducer,
    cardOrderUpdate: cardOrderUpdateReducer,
    cardOrderPay: cardOrderPayReducer,
    cardOrderDeliver: cardOrderDeliverReducer,
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
    walletDebit: walletDebitReducer,
    walletCredit: walletCreditReducer,
    
    schoolList: schoolListReducer,
    schoolDetails: schoolDetailsReducer,
    schoolByProgramme: schoolByProgrammeReducer,
    schoolCreate: schoolCreateReducer,
    schoolUpdate: schoolUpdateReducer,
    
    serviceList: serviceListReducer,
    serviceDetails: serviceDetailsReducer,
    serviceByName: serviceByNameReducer,
    serviceCreate: serviceCreateReducer,
    serviceUpdate: serviceUpdateReducer
})

export default reducer