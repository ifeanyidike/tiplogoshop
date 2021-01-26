import React, { useEffect, useState } from 'react'
import axios from "axios"
import { usePaystackPayment } from 'react-paystack';
import { PayButton, NextButton } from "../../styles/ServiceStyle.js"
import { useSelector } from "react-redux"
import { WalletButton } from "../../styles/ProfileStyle"


const PayStackPayment = ({ amount, onSuccess, simple }) => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [key, setKey] = useState("")
    useEffect(() => {
        const getKey = async () => {
            const { data: clientKey } = await axios.get('/api/config/paystack')
            console.log(clientKey)
            setKey(clientKey)
        }
        getKey()
    }, [key])
    console.log(key, amount)

    const config = {
        reference: (new Date()).getTime(),
        email: userInfo.email,
        amount: amount * 100,
        publicKey: key,
    };

    const PayStackHooks = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <>
                {
                    simple ?
                        <WalletButton
                            mr={10}
                            onClick={() => {
                                initializePayment(onSuccess, onClose)
                            }}
                        >
                            <i className="fab fa-amazon-pay fa-2x"></i>
                        </WalletButton>
                        :
                        <PayButton
                            onClick={() => {
                                initializePayment(onSuccess, onClose)
                            }}
                            customsize={40}
                        >
                            <i

                                className="fab fa-amazon-pay"></i>
                        </PayButton>
                }

            </>

        );
    };

    const onClose = (ref) => console.log(ref)

    return (
        <>
            <PayStackHooks />
        </>
    )
}

export default PayStackPayment
