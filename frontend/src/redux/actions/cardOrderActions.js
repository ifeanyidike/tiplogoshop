import axios from "axios"
import{ 
    CARD_ORDER_CREATE_FAIL,
    CARD_ORDER_CREATE_REQUEST, 
    CARD_ORDER_CREATE_SUCCESS, 
    CARD_ORDER_DETAILS_FAIL, 
    CARD_ORDER_DETAILS_REQUEST,
    CARD_ORDER_DETAILS_SUCCESS,
    CARD_ORDER_LIST_MY_REQUEST,
    CARD_ORDER_LIST_MY_SUCCESS,
    CARD_ORDER_LIST_MY_FAIL,
    CARD_ORDER_LIST_MY_RESET,
    CARD_ORDER_PAY_FAIL,
    CARD_ORDER_PAY_REQUEST,
    CARD_ORDER_LIST_REQUEST,
    CARD_ORDER_LIST_SUCCESS,
    CARD_ORDER_PAY_SUCCESS,
    CARD_ORDER_LIST_FAIL,
    CARD_ORDER_UPDATE_REQUEST,
    CARD_ORDER_UPDATE_SUCCESS,
    CARD_ORDER_UPDATE_FAIL
} from "../constants/cardOrderConstants"

export const createCardOrder = (order) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_CREATE_REQUEST 
        })
        
        const {
            userLogin: { userInfo },
          } = getState()                            
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }            
        }
        
        const {data} = await axios.post('/api/cardorders', order, config)
        
        dispatch({
            type: CARD_ORDER_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CARD_ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const getCardOrderDetails = (id) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_DETAILS_REQUEST
        })
        
        const { userLogin: { userInfo }} = getState()        
        
        const config = {
            headers: {                
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.get(`/api/cardorders/${id}`, config)
        
        dispatch({
            type: CARD_ORDER_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: CARD_ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
        
    }
}

export const listMyCardOrders = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_LIST_MY_REQUEST
        })
        
        const {userLogin: {userInfo}} = getState()
        
        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get('/api/cardorders/myorders', config)
        
        dispatch({
            type: CARD_ORDER_LIST_MY_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: CARD_ORDER_LIST_MY_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const cardUpdateOrder = (orderId, order) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_UPDATE_REQUEST
        })
        
        const {userLogin : {userInfo}} = getState()
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.patch(`/api/cardorders/${orderId}/update`, 
                            order, config)
        
        dispatch({
            type: CARD_ORDER_UPDATE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: CARD_ORDER_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const cardPayOrder = (orderId, paymentResult) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_PAY_REQUEST
        })
        
        const {userLogin : {userInfo}} = getState()
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.put(`/api/cardorders/${orderId}/pay`, paymentResult, config)
        
        dispatch({
            type: CARD_ORDER_PAY_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: CARD_ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const listCardOrders = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type: CARD_ORDER_LIST_REQUEST
        })
        
        const { userLogin: {userInfo}} = getState()
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.get(`/api/cardorders`, config)
        
        dispatch({
            type: CARD_ORDER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CARD_ORDER_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}