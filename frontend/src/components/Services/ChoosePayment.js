import React, {useState, useEffect} from 'react'
import {
    BackButton,
    NextButton,    
} from "../../styles/ServiceStyle.js"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PaymentMethods from "../Payment/PaymentMethods"
import Loader from "../Loaders/SimpleLoader"
import {useDispatch, useSelector} from "react-redux"
import {useHistory, Link} from "react-router-dom"
import {createCardOrder} from "../../redux/actions/cardOrderActions"
import {CARD_ORDER_CREATE_RESET} from "../../redux/constants/cardOrderConstants"
import NotLoggedIn from "../Utils/NotLoggedIn"
import MessageModal from "../Utils/MessageModal"


const ChoosePayment = ({num, baseAmount}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    useEffect(()=>{
       dispatch({type: CARD_ORDER_CREATE_RESET}) 
    },[dispatch])
    
    const [paymentMeans, setPaymentMeans] = useState('PayStack');  
    const [insufficientAmount, setInsufficientAmount] = useState(false)
    const [outOfStock, setOutOfStock] = useState(false)
    
    const cardOrderCreate  = useSelector(state => state.cardOrderCreate)        
    const {loading: createLoading, order, success: createSuccess, error: createError} 
        = cardOrderCreate
        
    const userLogin  = useSelector(state => state.userLogin)        
    const {loading: userLoading, userInfo, error: userError} = userLogin
        
    const cardDetails  = useSelector(state => state.cardDetails)
    const {loading: cardLoading, card, error: cardError} = cardDetails  
        
    const handleOrderOverview = () =>{
        history.push(`/payorder/card?orderId=${order._id}`)  
    }
    
    const balance = parseInt(userInfo.wallet - num*baseAmount)
    
    
    const handleOrderPlacement = () =>{                
        if(userInfo){
            if(paymentMeans === 'Wallet'){
                if(balance < 0){
                    setInsufficientAmount(true)
                    return
                }
            }
            if(card.items.length === 0){
                setOutOfStock(true)
                return
            }
            
            dispatch(createCardOrder({
                orderItems: {
                    card: card._id,
                    name: card.name,
                    qty: num,
                    image: card.image,
                    price: num * baseAmount
                },
                paymentMethod: paymentMeans
            }))                        
                     
        }
      }
    
    return (
        <div className="buyinfo--second">              
                 
                   
                
                <div className="paymentmethod-alt"                
                >
                    {
                        createLoading ? <Loader /> :
                        createError ?                                                 
                        createError
                        :
                        createSuccess ?
                        (
                            <>
                                Order placed!
                                <NextButton                         
                                    onClick={handleOrderOverview}>
                                    Confirm Order and Pay <ArrowForwardIosIcon />
                                </NextButton>
                            </>
                        )
                        :
                        (
                            <>
                                <PaymentMethods 
                                    value={paymentMeans} 
                                    setValue={setPaymentMeans}                         
                                />                     
                                {
                                    userInfo ?
                                    
                                    <NextButton                         
                                        onClick={handleOrderPlacement}
                                    >
                                        Place Order <ArrowForwardIosIcon />
                                    </NextButton>
                                    :
                                    <NextButton                         
                                        onClick={()=>history.push("/auth")}>
                                        Login to Place Order <ArrowForwardIosIcon />
                                    </NextButton>
                                }
                                
                            </> 
                        )
                    }
                                                                                                               
                </div> 
                <MessageModal 
                    open={insufficientAmount}
                    setOpen={setInsufficientAmount}
                    caption="Insufficient Fund" 
                    message = 
                    {<div>
                        Please add money to your wallet or <br />choose another payment method
                    </div>}             
                />  
                
                <MessageModal 
                    open={outOfStock}
                    setOpen={setOutOfStock}
                    caption="Out of Stock" 
                    message = 
                    {<div>
                        Sorry. This card is out of stock. <br />
                        Try another card.
                    </div>}             
                />               
            </div>      
    )
}

export default ChoosePayment
