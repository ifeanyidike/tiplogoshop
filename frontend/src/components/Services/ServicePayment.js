import React, { useState } from 'react'
import Wallet from "../Utils/Wallet"
import { ButtonGroup, NextButton, NoMarginBackButton } from "../../styles/ServiceStyle"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PaymentMethods from "../Payment/PaymentMethods"
import { colors } from "../../styles/breakpoints"
import { useDispatch, useSelector } from 'react-redux'
import { debitWallet } from "../../redux/actions/userActions"
import PaystackPayment from "../Payment/PayStackServicesPayment"
import Loader from "../Loaders/SimpleLoader"

const ServicePayment = ({
    activeStep,
    setActiveStep,
    serviceOrder,

}) => {
    const [paymentMethod, setPaymentMethod] = useState('PayStack')
    const { service } = useSelector(state => state.serviceByName)
    const changeOfCourseOrderCreate = useSelector(state => state.changeOfCourseOrderCreate)
    const { loading: cocLoading, error: cocError, success: cocSuccess } = changeOfCourseOrderCreate

    const oLevelUploadOrderCreate = useSelector(state => state.oLevelUploadOrderCreate)
    const { loading: oluLoading, error: oluError, success: oluSuccess } = oLevelUploadOrderCreate

    const jambPasswordResetOrderCreate = useSelector(state => state.jambPasswordResetOrderCreate)
    const { loading: jprLoading, error: jprError, success: jprSuccess } = jambPasswordResetOrderCreate

    const dispatch = useDispatch()

    const handleWalletPayment = () => {
        const { transactionType, orderItems } = serviceOrder()
        const amount = parseInt(service.cost)
        dispatch(debitWallet({ transactionType, orderItems, amount }))

    }

    return (
        <div>
            <Wallet width={300} />
            <div className="paymentinfo">
                {
                    cocLoading ? <Loader /> :
                        cocError ? cocError :
                            cocSuccess ?
                                <div>Successful. We'll get back to you soon. </div>
                                : ''
                }

                {
                    oluLoading ? <Loader /> :
                        oluError ? oluError :
                            oluSuccess ?
                                <div>Successful. We'll get back to you soon. </div>
                                : ''
                }

                {
                    jprLoading ? <Loader /> :
                        jprError ? jprError :
                            jprSuccess ?
                                <div>Successful. We'll get back to you soon. </div>
                                : ''
                }

                <PaymentMethods
                    value={paymentMethod}
                    setValue={setPaymentMethod}
                />
            </div>

            <ButtonGroup>
                <NoMarginBackButton
                    variant={colors.darkred}
                    onClick={() => setActiveStep(activeStep - 1)}>
                    <NavigateBeforeIcon /> Previous
            </NoMarginBackButton>
                {
                    paymentMethod === 'PayStack' ?
                        <PaystackPayment
                            transactionType={serviceOrder().transactionType}
                            orderItems={serviceOrder().orderItems}
                        />
                        :
                        <NextButton
                            variant={colors.darkblue}
                            onClick={handleWalletPayment}
                        >
                            Pay <NavigateNextIcon />
                        </NextButton>
                }

            </ButtonGroup>
        </div>
    )
}

export default ServicePayment
