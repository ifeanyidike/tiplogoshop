import React, {useState} from 'react'
import axios from "axios"
import { PayButton } from "../../styles/ServiceStyle"
import {useSelector, useDispatch} from "react-redux"
import {debitWallet} from "../../redux/actions/userActions"
import uuid from 'react-uuid'
import {cardPayOrder} from "../../redux/actions/cardOrderActions"
import {deliverCardItems} from "../../redux/actions/cardActions"
import Loader from "../Loaders/SimpleLoader"

const WalletPayment = ({ orderitem, balance, order, setInsufficientAmount}) => {    
    const dispatch = useDispatch()        
    const amount = parseInt(orderitem.price)
    const qty = orderitem.qty
    const cardId = orderitem.card
    
    const walletDebit = useSelector(state => state.walletDebit)
    const {loading, error, userInfo} = walletDebit
    console.log(userInfo)
    
    const handleWalletPay = async() =>{     
          console.log(amount)
         
          
        if(balance && balance > 0){
            //Update order as paid
            //deliver order, 
            //send to user email, 
            //mark as delivered, 
            //push to saved card table
            dispatch(debitWallet(qty, cardId, order._id, amount))     
            
        }else{
            setInsufficientAmount(true)
        }
    }
    
    return (
        <>
           { 
            loading ? <Loader />
            : error ? error 
            :
            <PayButton 
                onClick={handleWalletPay}>
                Pay with Wallet
            </PayButton>
            }
        </>
    )
}

export default WalletPayment