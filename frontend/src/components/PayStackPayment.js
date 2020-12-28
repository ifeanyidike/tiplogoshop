import React, {useEffect, useState} from 'react'
import axios from "axios"
import { usePaystackPayment } from 'react-paystack';
import { PayButton } from "../styles/ServiceStyle.js"
import {useDispatch, useSelector} from "react-redux"
import {cardPayOrder} from "../redux/actions/cardOrderActions"

const PayStackPayment = ({orderId, amount}) => {
    const dispatch = useDispatch()    
    
    const userLogin  = useSelector(state => state.userLogin)
    const {error, loading, userInfo } = userLogin              
    
    const [key, setKey] = useState("")
    useEffect(() => {
        const getKey = async () => {
            const { data: clientKey } = await axios.get('/api/config/paystack')            
            setKey(clientKey)
        }
        getKey()        
    }, [key])

    const config = {
        reference: (new Date()).getTime(),
        email: userInfo.email,
        amount: amount * 100,
        publicKey: key,
    };

    const PayStackHooks = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            
            <PayButton 
                onClick={() => {
                        initializePayment(onSuccess, onClose)
                }}
            >
                <i className="fab fa-amazon-pay fa-2x"></i>
            </PayButton>
            
        );
    };


    const onSuccess = (reference) => {
        const paymentResult = {
            id: reference.trxref,
            status: reference.status,
            update_time: String((new Date()).getTime()),
            email: userInfo.email
        }

        dispatch(cardPayOrder(orderId, paymentResult))        
    }

    const onClose = (ref) => console.log(ref)

    return (
        <div>
            <PayStackHooks />
        </div>
    )
}

export default PayStackPayment
