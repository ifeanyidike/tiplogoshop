import React, { useState, useEffect } from 'react'
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
import Message from "../Message"
import { Link, useHistory } from "react-router-dom"

const ServicePayment = ({
    activeStep,
    setActiveStep,
    serviceOrder,

}) => {
    const history = useHistory()

    const [paymentMethod, setPaymentMethod] = useState('PayStack')
    const { service } = useSelector(state => state.serviceByName)
    const changeOfCourseOrderCreate = useSelector(state => state.changeOfCourseOrderCreate)
    const { loading: cocLoading, error: cocError, success: cocSuccess } = changeOfCourseOrderCreate

    const oLevelUploadOrderCreate = useSelector(state => state.oLevelUploadOrderCreate)
    const { loading: oluLoading, error: oluError, success: oluSuccess } = oLevelUploadOrderCreate

    const jambPasswordResetOrderCreate = useSelector(state => state.jambPasswordResetOrderCreate)
    const { loading: jprLoading, error: jprError, success: jprSuccess } = jambPasswordResetOrderCreate

    const walletDebit = useSelector(state => state.walletDebit)
    const { loading: walletLoading, error: walletError } = walletDebit



    const dispatch = useDispatch()

    const handleWalletPayment = () => {
        const { transactionType, orderItems } = serviceOrder()
        const amount = parseInt(service.cost)
        dispatch(debitWallet({ transactionType, orderItems, amount }))
    }

    useEffect(() => {
        if (cocSuccess || oluSuccess || jprSuccess || cocError || oluError || jprError || walletError) {
            history.push('/services')
        }
    }, [cocSuccess, oluSuccess, jprSuccess, cocError, jprError, oluError, walletError, history])

    return (
        <div>
            <Wallet width={300} />
            <div className="paymentinfo">

                <div className={(walletError || cocError || oluError || jprError) && 'paymentresults'}>
                    {
                        walletLoading ? <Loader /> :
                            walletError ?
                                <Message variant="error">
                                    {walletError}
                                    <Link onClick={() => setActiveStep(0)} >
                                        Try again
                                </Link>
                                </Message>
                                :
                                null
                    }
                    {
                        cocLoading ? <Loader /> :
                            cocError ?
                                <Message variant="error">{cocError}</Message>
                                :
                                cocSuccess ?
                                    <div>
                                        <Message variant="info">
                                            Successful. We'll get back to you soon.
                                    </Message>
                                    </div>
                                    : ''
                    }

                    {
                        oluLoading ? <Loader /> :
                            oluError ?
                                <Message variant="error">
                                    {oluError}
                                </Message>
                                :
                                oluSuccess ?
                                    <Message variant="info">
                                        Successful. We'll get back to you soon.
                                </Message>
                                    : ''
                    }

                    {
                        jprLoading ? <Loader /> :
                            jprError ?
                                <Message variant="error">
                                    {jprError}
                                </Message>
                                :
                                jprSuccess ?
                                    <div><Message variant="info">
                                        Successful. We'll get back to you soon.
                                </Message> </div>
                                    : ''
                    }
                </div>

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
