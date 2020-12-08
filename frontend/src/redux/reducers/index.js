import {combineReducers} from "redux"
import {
    userLoginReducer,
    userRegisterReducer
 } from "./userReducers"

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

export default reducer