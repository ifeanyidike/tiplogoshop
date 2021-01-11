import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { createChangeOfCourseOrder } from '../../redux/actions/changeOfCourseActions'
import PayStack from "./PayStack"

const PayStackCardPayment = ({orderItems}) => {
    const dispatch = useDispatch()    
    const {service} = useSelector(state => state.serviceByName)
    const userLogin  = useSelector(state => state.userLogin)
    const {userInfo } = userLogin       
    
    
    const onSuccess = (reference) => {
        const paymentResult = {
            id: reference.trxref,
            status: reference.status,
            update_time: String((new Date()).getTime()),
            email: userInfo.email
        }                            

        dispatch(createChangeOfCourseOrder (
            {   orderItems, price: parseInt(service.cost), 
                paymentMethod:'PayStack' , paymentResult
            })
        )
    }
        
    return (
        <PayStack
            amount = {service.cost}
            onSuccess = {onSuccess}        
        />
    )
}

export default PayStackCardPayment
