import React, {useState, useEffect} from 'react'
import NumRange from "../NumRange"
import AccountWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CustomTable from "../Tables/CustomTable"
import {createCardOrder, getCardOrderDetails} from "../../redux/actions/cardOrderActions"
import {useDispatch, useSelector} from "react-redux"
import PaymentMethods from "../PaymentMethods"
import Loader from "../Loaders/SimpleLoader"
import {useHistory, Link} from "react-router-dom"
import {
    CardButton, 
    BackButton,
    NextButton,
    PayButton
} from "../../styles/ServiceStyle.js"
import { listCardDetails } from '../../redux/actions/cardActions'
import LaunchIcon from '@material-ui/icons/Launch';
import ChoosePayment from './ChoosePayment';

const BaseChildren = ({baseAmount, availability, name}) => {
    const [paymentMeans, setPaymentMeans] = useState('PayStack');    
    
    const userLogin  = useSelector(state => state.userLogin)
    const {loading: userLoading, userInfo, error: userError} = userLogin
    
    const cardDetails  = useSelector(state => state.cardDetails)
    const {loading: cardLoading, card, error: cardError} = cardDetails             
    
    const dispatch = useDispatch()    
    const history = useHistory()                
    
    const [num, setNum] = useState(1)
    const [totalCost, setTotalCost] = useState(parseInt(baseAmount))            
    
    const [display, setDisplay]  = useState({
        first: true,
        second: false,
        third: false
    })            
    
    const displayElem = (item) =>{
        return {display: display.[item] ? "flex" : "none"}        
    }                
             
  return (
    <>
        <div className="buyinfo--edit">
            
            <div className="buyinfo--first edit">
                <div className="number" >
                    <span>1</span>
                </div>
            
                <div className="contents">                                        
                    <div className="numrange">
                        <h5>How many cards?
                            <hr/>
                        </h5>
                        <NumRange 
                            num={num} 
                            setNum={setNum} 
                            setPrice={setTotalCost} 
                            amount={parseInt(card.price)}
                        /> 
                        <div className="price__items">
                            <span className="price">₦{totalCost}</span>
                        
                            <small>
                                <div></div> 
                                <span>
                                    {
                                        card && 
                                        (card.countInStock > 0 ? "In stock" : "Out of stock")
                                    }    
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>      
            
            <ChoosePayment
                num={num}
                baseAmount={baseAmount}                     
            />        
            
        </div>
                                          
    </>
  )
}

export default BaseChildren
