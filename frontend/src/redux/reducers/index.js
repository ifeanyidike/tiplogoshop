import { combineReducers } from "redux"
import { drawerToggleReducer, messageReducer } from "./utilReducers"
import {
    userListReducer,
    usersListReducer,
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
    walletCreditReducer,
    userMakeAdminReducer,
    userDeleteReducer
} from "./userReducers"

import {
    cardListReducer,
    cardListFewReducer,
    cardDetailsReducer,
    cardDeleteReducer,
    cardCreateReducer,
    cardUpdateReducer,
    cardItemsDeliverReducer,
    cardAddItemReducer
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

import { soldCardCreateReducer, cardMyReducer } from "./soldCardReducers"

import {
    cardOrderCreateReducer,
    cardOrderDeleteReducer,
    cardOrderDetailsReducer,
    cardOrderUpdateReducer,
    cardOrderPayReducer,
    cardOrderDeliverReducer,
    cardOrderListMyReducer,
    cardOrderListReducer,
    cardMyOrderNotPaidListReducer
} from "./cardOrderReducers"

import {
    changeOfCourseOrderCreateReducer,
    changeOfCourseOrderDetailsReducer,
    changeOfCourseOrderUpdateReducer,
    changeOfCourseOrderListMyReducer,
    changeOfCourseOrderListReducer
} from "./changeOfCourseReducers"

import {
    oLevelUploadOrderCreateReducer,
    oLevelUploadOrderDetailsReducer,
    oLevelUploadOrderUpdateReducer,
    oLevelUploadOrderListMyReducer,
    oLevelUploadOrderListReducer
} from "./oLevelResultUploadReducers"

import {
    jambPasswordResetOrderCreateReducer,
    jambPasswordResetOrderDetailsReducer,
    jambPasswordResetOrderUpdateReducer,
    jambPasswordResetOrderListMyReducer,
    jambPasswordResetOrderListReducer
} from "./jambPasswordResetReducers"

const reducer = combineReducers({
    cardList: cardListReducer,
    cardListFew: cardListFewReducer,
    cardDetails: cardDetailsReducer,
    cardDelete: cardDeleteReducer,
    cardCreate: cardCreateReducer,
    cardUpdate: cardUpdateReducer,
    cardItemsDeliver: cardItemsDeliverReducer,
    cardAddItem: cardAddItemReducer,

    soldCardCreate: soldCardCreateReducer,
    cardMy: cardMyReducer,

    cardOrderCreate: cardOrderCreateReducer,
    cardOrderDelete: cardOrderDeleteReducer,
    cardOrderDetails: cardOrderDetailsReducer,
    cardOrderUpdate: cardOrderUpdateReducer,
    cardOrderPay: cardOrderPayReducer,
    cardOrderDeliver: cardOrderDeliverReducer,
    cardOrderListMy: cardOrderListMyReducer,
    cardOrderList: cardOrderListReducer,
    cardMyOrderNotPaidList: cardMyOrderNotPaidListReducer,

    drawerToggle: drawerToggleReducer,
    message: messageReducer,

    userMakeAdmin: userMakeAdminReducer,
    userDelete: userDeleteReducer,
    userList: userListReducer,
    usersList: usersListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    accountActivate: accountActivateReducer,
    passwordForgot: passwordForgotReducer,
    passwordReset: passwordResetReducer,
    emailResend: emailResendReducer,
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
    serviceUpdate: serviceUpdateReducer,

    changeOfCourseOrderCreate: changeOfCourseOrderCreateReducer,
    changeOfCourseOrderDetails: changeOfCourseOrderDetailsReducer,
    changeOfCourseOrderUpdate: changeOfCourseOrderUpdateReducer,
    changeOfCourseOrderListMy: changeOfCourseOrderListMyReducer,
    changeOfCourseOrderList: changeOfCourseOrderListReducer,

    oLevelUploadOrderCreate: oLevelUploadOrderCreateReducer,
    oLevelUploadOrderDetails: oLevelUploadOrderDetailsReducer,
    oLevelUploadOrderUpdate: oLevelUploadOrderUpdateReducer,
    oLevelUploadOrderListMy: oLevelUploadOrderListMyReducer,
    oLevelUploadOrderList: oLevelUploadOrderListReducer,

    jambPasswordResetOrderCreate: jambPasswordResetOrderCreateReducer,
    jambPasswordResetOrderDetails: jambPasswordResetOrderDetailsReducer,
    jambPasswordResetOrderUpdate: jambPasswordResetOrderUpdateReducer,
    jambPasswordResetOrderListMy: jambPasswordResetOrderListMyReducer,
    jambPasswordResetOrderList: jambPasswordResetOrderListReducer
})

export default reducer