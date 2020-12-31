import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import BaseFile from "../components/Services/Base"
import Loader from "../components/Loaders/SimpleLoader"
import {useHistory, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {createOrder, getCardOrderDetails} from "../redux/actions/cardOrderActions"
import { 
    listCardDetails,
    listFewCards 
} from '../redux/actions/cardActions'
import queryString from "query-string"
import EditCards from '../components/Services/EditCards'
import NotLoggedIn from "../components/Utils/NotLoggedIn"
import {logout} from "../redux/actions/userActions"

const CardPage = () => {
    
    const location = useLocation()    
    const {id} = queryString.parse(location.search)      
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
        
    const cardListFew  = useSelector(state => state.cardListFew)
    const {loading: cardsLoading, cards, error: cardsError} = cardListFew
    
    const cardOrderDetails  = useSelector(state => state.cardOrderDetails)
    const {loading: orderLoading, order, error: orderError} = cardOrderDetails
    
    console.log(orderLoading, order, orderError)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{         
        if(userInfo){
            const {exp} = jwt_decode(userInfo.token)
            const expirationTime = (exp * 1000) - 6000
            if(Date.now() >= expirationTime){
                dispatch(logout())
            }              
        }
        
        dispatch(getCardOrderDetails(id))  
        dispatch(listFewCards(4))        
    }, [dispatch, userInfo, id])
    
    let orderitem;
    if(order){
        const {orderItems} = order
        const [orderElem] = orderItems
        orderitem = orderElem
    }    
    
    return (
        <div>                                            
            {
                            
            !userInfo ?
            <NotLoggedIn />
            :    
             <>
                {
                         
                <BaseFile
                    loading={cardsLoading} 
                    cards = {cards}        
                    error = {cardsError}                       
                    TopImage={
                        orderitem && <img src={orderitem.image} alt={orderitem.name} />
                    } 
                    topText = {orderitem && orderitem.name}  
                >
                       {/* <pre>order{JSON.stringify(order, null, 2)}</pre>     */}
                    {   
                    orderLoading ? <Loader /> :
                    orderError ? orderError :
                       <EditCards
                            id = {order._id}
                            cardObj = {orderitem}
                            paymentMethod = {order.paymentMethod}
                       /> 
                    }   
                </BaseFile>
                }
              </>
            }
                        
        </div>
    )
}

export default CardPage
