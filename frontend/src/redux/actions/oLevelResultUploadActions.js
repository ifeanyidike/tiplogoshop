import axios from "axios"
import{ 
    OLEVEL_UPLOAD_CREATE_FAIL,
    OLEVEL_UPLOAD_CREATE_REQUEST, 
    OLEVEL_UPLOAD_CREATE_SUCCESS, 
    OLEVEL_UPLOAD_DETAILS_FAIL, 
    OLEVEL_UPLOAD_DETAILS_REQUEST,
    OLEVEL_UPLOAD_DETAILS_SUCCESS,
    OLEVEL_UPLOAD_LIST_MY_REQUEST,
    OLEVEL_UPLOAD_LIST_MY_SUCCESS,
    OLEVEL_UPLOAD_LIST_MY_FAIL,    
    OLEVEL_UPLOAD_LIST_REQUEST,
    OLEVEL_UPLOAD_LIST_SUCCESS,
    OLEVEL_UPLOAD_LIST_FAIL,
    OLEVEL_UPLOAD_UPDATE_REQUEST,
    OLEVEL_UPLOAD_UPDATE_SUCCESS,
    OLEVEL_UPLOAD_UPDATE_FAIL,
} from "../constants/oLevelResultUploadConstants"

export const createOlevelUploadOrder = (
    formData, orderItems, amount, paymentMethod, paymentResult) => 
    async(dispatch, getState) =>{
    try {
        dispatch({
            type: OLEVEL_UPLOAD_CREATE_REQUEST 
        })
        
        const {
            userLogin: { userInfo },
          } = getState()                            
        
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }            
        }
        
        formData.append('orderItems', orderItems)
        formData.append('price', amount)
        formData.append('paymentMethod', paymentMethod)
        formData.append('paymentResult', paymentResult)
        
        const {data} = await axios.post('/api/olevelresultupload', formData, config)
        
        dispatch({
            type: OLEVEL_UPLOAD_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OLEVEL_UPLOAD_CREATE_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const getOlevelUploadOrderDetailsById = (id) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: OLEVEL_UPLOAD_DETAILS_REQUEST
        })
        
        const { userLogin: { userInfo }} = getState()        
        
        const config = {
            headers: {                
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.get(`/api/olevelresultupload/${id}`, config)
        
        dispatch({
            type: OLEVEL_UPLOAD_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: OLEVEL_UPLOAD_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
        
    }
}

export const listMyOlevelUploadOrders = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type: OLEVEL_UPLOAD_LIST_MY_REQUEST
        })
        
        const {userLogin: {userInfo}} = getState()
        
        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.get('/api/olevelresultupload/myorders', config)
        
        dispatch({
            type: OLEVEL_UPLOAD_LIST_MY_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: OLEVEL_UPLOAD_LIST_MY_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}

export const updateOlevelUploadOrder = (orderId, order) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: OLEVEL_UPLOAD_UPDATE_REQUEST
        })
        
        const {userLogin : {userInfo}} = getState()
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.put(`/api/olevelresultupload/${orderId}/`, 
                            order, config)
        
        dispatch({
            type: OLEVEL_UPLOAD_UPDATE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: OLEVEL_UPLOAD_UPDATE_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}


export const listOlevelUploadOrders = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type: OLEVEL_UPLOAD_LIST_REQUEST
        })
        
        const { userLogin: {userInfo}} = getState()
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        
        const {data} = await axios.get(`/api/olevelresultupload`, config)
        
        dispatch({
            type: OLEVEL_UPLOAD_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: OLEVEL_UPLOAD_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
        })
    }
}