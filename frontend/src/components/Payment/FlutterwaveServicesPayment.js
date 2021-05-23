import { closePaymentModal } from 'flutterwave-react-v3'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createChangeOfCourseOrder } from '../../redux/actions/changeOfCourseActions'
import { createJambPasswordResetOrder } from '../../redux/actions/jambPasswordResetActions'
import { createOlevelUploadOrder } from '../../redux/actions/oLevelResultUploadActions'
import Flutterwave from "./Flutterwave"

const FlutterwaveCardPayment = ({ transactionType, orderItems }) => {
    const dispatch = useDispatch()
    const { service } = useSelector(state => state.serviceByName)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const onSuccess = (reference) => {
        const paymentResult = {
            id: reference.transaction_id,
            status: reference.status,
            update_time: String((new Date()).getTime()),
            email: userInfo.email
        }

        if (transactionType === 'changeofcourse') {
            dispatch(createChangeOfCourseOrder(
                {
                    orderItems, price: parseInt(service.cost),
                    paymentMethod: 'Flutterwave', paymentResult
                })
            )
        } else if (transactionType === 'jambpasswordreset') {
            dispatch(createJambPasswordResetOrder(
                {
                    orderItems, price: parseInt(service.cost),
                    paymentMethod: 'Flutterwave', paymentResult
                })
            )
        } else if (transactionType === 'olevelresultupload') {

            dispatch(createOlevelUploadOrder(
                orderItems,
                parseInt(service.cost),
                'Flutterwave',
                paymentResult
            ))
        }
        closePaymentModal()
    }

    return (
        <Flutterwave
            amount={service && service.cost}
            service={orderItems.name}
            onSuccess={onSuccess}
        />

    )
}

export default FlutterwaveCardPayment
