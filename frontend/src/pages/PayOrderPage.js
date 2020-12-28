import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch, useSelector} from "react-redux"
import LaunchIcon from '@material-ui/icons/Launch';
import CustomTable from "../components/Tables/CustomTable"
import {useLocation, Link} from "react-router-dom"
import BaseFile from "../components/Services/Base"
import queryString from "query-string"
import PayStack from "../components/PayStackPayment"
import {getCardOrderDetails} from "../redux/actions/cardOrderActions"
import {listCardDetails, listFewCards} from "../redux/actions/cardActions"
import Loader from "../components/Loaders/SimpleLoader"
import {logout} from "../redux/actions/userActions"

const PayOrder = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const cardListFew  = useSelector(state => state.cardListFew)
    const {loading: cardsLoading, cards, error: cardsError} = cardListFew    
    
    const cardOrderDetails  = useSelector(state => state.cardOrderDetails)
    const {error: orderError, order, loading: orderLoading} = cardOrderDetails
    
    const cardDetails  = useSelector(state => state.cardDetails)
    const {loading: cardLoading, card, error: cardError} = cardDetails
    
    const cardOrderPay  = useSelector(state => state.cardOrderPay)
    const {error: payError, loading: payLoading, success: paySuccess } = cardOrderPay    
    
    let orderitem;
    if(order){
        const {orderItems} = order
        const [orderElem] = orderItems
        orderitem = orderElem
    } 
           
    useEffect(()=>{     
        if(userInfo){
            const {exp} = jwt_decode(userInfo.token)
            const expirationTime = (exp * 1000) - 6000
            if(Date.now() >= expirationTime){
                dispatch(logout())
            }              
        }   
        
        const {orderId} = queryString.parse(location.search) 
        dispatch(getCardOrderDetails(orderId))
        dispatch(listFewCards(4))        
    }, [dispatch, location])
    
    return (
                            
        <BaseFile
            loading={cardsLoading} 
            cards = {cards}        
            error = {cardsError}   
            TopImage={<img src={orderitem && orderitem.image} alt={orderitem && orderitem.name} />} 
            topText = {orderitem && orderitem.name}           
        >                    
            <div 
                className="buyinfo--third"                
            >                                    
                {
                    orderLoading ? 
                        <Loader /> :
                    orderError ?
                        orderError  :                    
                    (
                        <div className="table">
                            {
                                payLoading ? <Loader /> :
                                payError ? payError :
                                paySuccess ? 
                                <>
                                    <div>
                                        Success!
                                        <Link> View Purchase Info</Link>
                                    </div>
                                    
                                </>
                                :
                                (
                                    <>
                                        <CustomTable 
                                            cost={orderitem.price} 
                                            qty={ orderitem.qty} 
                                            name={ orderitem.name}  
                                            orderId = {order._id}                               
                                            paymentMethod = {order.paymentMethod}
                                        />
                                        
                                        {
                                            !order.isPaid && (
                                    
                                            <div className="table__action">
                                                <Link 
                                                    to={`/edititem/cardorder?id=${order._id}`}>
                                                    Edit card <LaunchIcon />
                                                </Link>                                            
                                            
                                                    <PayStack
                                                        orderId ={order._id}
                                                        amount={parseInt(orderitem.price)}                                                       
                                                    />                                                                                          
                                            </div>   
                                        )}
                                    </>
                                )
                            }
                        
                                                                                                          
                        </div>
                    )
                    
                }                                                           
            </div>                                                                                     
        </BaseFile>
        
    )
}
export default PayOrder
