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
    userDeleteReducer,
    usersEmailReducer,
    userEmailReducer,
    userEmailByEmailReducer
} from "./userReducers"

import {
    reviewListReducer,
    reviewDetailsReducer,
    reviewDeleteReducer,
    reviewCreateReducer,
    reviewUpdateReducer,
    reviewDetailsByUserReducer
} from "./reviewReducers"

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
    schoolUpdateReducer,
    courseDeleteReducer
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
    changeOfCourseOrderListReducer,
    changeOfCourseOrderDeleteReducer,
    changeOfCourseAdminUploadReducer,
    changeOfCourseBlobReducer
} from "./changeOfCourseReducers"

import {
    oLevelUploadOrderCreateReducer,
    oLevelUploadOrderDetailsReducer,
    oLevelUploadOrderUpdateReducer,
    oLevelUploadOrderListMyReducer,
    oLevelUploadOrderListReducer,
    oLevelUploadOrderDeleteReducer,
    oLevelUploadAdminUploadReducer,
    oLevelUploadBlobReducer
} from "./oLevelResultUploadReducers"

import {
    jambPasswordResetOrderCreateReducer,
    jambPasswordResetOrderDetailsReducer,
    jambPasswordResetOrderUpdateReducer,
    jambPasswordResetOrderListMyReducer,
    jambPasswordResetOrderListReducer,
    jambPasswordResetOrderDeleteReducer
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


    usersEmail: usersEmailReducer,
    userEmail: userEmailReducer,
    userEmailByEmail: userEmailByEmailReducer,
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
    courseDelete: courseDeleteReducer,

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
    changeOfCourseOrderDelete: changeOfCourseOrderDeleteReducer,
    changeOfCourseAdminUpload: changeOfCourseAdminUploadReducer,
    changeOfCourseBlob: changeOfCourseBlobReducer,

    oLevelUploadOrderCreate: oLevelUploadOrderCreateReducer,
    oLevelUploadOrderDetails: oLevelUploadOrderDetailsReducer,
    oLevelUploadOrderUpdate: oLevelUploadOrderUpdateReducer,
    oLevelUploadOrderListMy: oLevelUploadOrderListMyReducer,
    oLevelUploadOrderList: oLevelUploadOrderListReducer,
    oLevelUploadOrderDelete: oLevelUploadOrderDeleteReducer,
    oLevelUploadAdminUpload: oLevelUploadAdminUploadReducer,
    oLevelUploadBlob: oLevelUploadBlobReducer,

    jambPasswordResetOrderCreate: jambPasswordResetOrderCreateReducer,
    jambPasswordResetOrderDetails: jambPasswordResetOrderDetailsReducer,
    jambPasswordResetOrderUpdate: jambPasswordResetOrderUpdateReducer,
    jambPasswordResetOrderListMy: jambPasswordResetOrderListMyReducer,
    jambPasswordResetOrderList: jambPasswordResetOrderListReducer,
    jambPasswordResetOrderDelete: jambPasswordResetOrderDeleteReducer,

    reviewList: reviewListReducer,
    reviewDetails: reviewDetailsReducer,
    reviewDelete: reviewDeleteReducer,
    reviewCreate: reviewCreateReducer,
    reviewUpdate: reviewUpdateReducer,
    reviewDetailsByUser: reviewDetailsByUserReducer,
})

export default reducer