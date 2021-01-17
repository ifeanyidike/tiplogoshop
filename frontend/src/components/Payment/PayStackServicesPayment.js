import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { createChangeOfCourseOrder } from '../../redux/actions/changeOfCourseActions'
import { createJambPasswordResetOrder } from '../../redux/actions/jambPasswordResetActions'
import { createOlevelUploadOrder } from '../../redux/actions/oLevelResultUploadActions'
import PayStack from "./PayStack"

const PayStackCardPayment = ({transactionType, orderItems}) => {
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

        if(transactionType === 'changeofcourse'){
            dispatch(createChangeOfCourseOrder (
                {   orderItems, price: parseInt(service.cost), 
                    paymentMethod:'PayStack' , paymentResult
                })
            )
        }else if (transactionType === 'jambpasswordreset'){
            dispatch(createJambPasswordResetOrder (
                {   orderItems, price: parseInt(service.cost), 
                    paymentMethod:'PayStack' , paymentResult
                })                
            )
        }else if(transactionType === 'olevelresultupload'){
            const uploadOrderItems = {
                type: orderItems.type,
                name: orderItems.name,
                profileCode: orderItems.profileCode,
            }
            const files = orderItems.files
            
            dispatch(createOlevelUploadOrder (
                    files, 
                    uploadOrderItems,
                    parseInt(service.cost),                     
                    'PayStack' , 
                    paymentResult
                )                
            )
        }
    }
        
    return (
        <PayStack
            amount = {service.cost}
            onSuccess = {onSuccess}        
        />
    )
}

export default PayStackCardPayment
