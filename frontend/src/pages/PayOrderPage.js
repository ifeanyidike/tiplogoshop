import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from "react-redux"
import LaunchIcon from '@material-ui/icons/Launch';
import CustomTable from "../components/Tables/CustomTable"
import { useLocation, Link } from "react-router-dom"
import BaseFile from "../components/Services/Base"
import queryString from "query-string"
import PayStack from "../components/Payment/PayStackCardPayment"
import { getCardOrderDetails, cardPayOrder } from "../redux/actions/cardOrderActions"
import { listCardDetails, listFewCards } from "../redux/actions/cardActions"
import Loader from "../components/Loaders/SimpleLoader"
import { logout, debitWallet } from "../redux/actions/userActions"
import { PayButton } from "../styles/ServiceStyle.js"
import Wallet from "../components/Utils/Wallet"
import MessageModal from "../components/Utils/MessageModal"
import WalletPayment from "../components/Payment/WalletPayment"
import { CARD_ORDER_PAY_RESET } from '../redux/constants/cardOrderConstants';

const PayOrder = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [insufficientAmount, setInsufficientAmount] = useState(false)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const cardListFew = useSelector(state => state.cardListFew)
    const { loading: cardsLoading, cards, error: cardsError } = cardListFew

    const cardOrderDetails = useSelector(state => state.cardOrderDetails)
    const { error: orderError, order, loading: orderLoading } = cardOrderDetails

    const cardDetails = useSelector(state => state.cardDetails)
    const { loading: cardLoading, card, error: cardError } = cardDetails

    const cardOrderPay = useSelector(state => state.cardOrderPay)
    const { error: payError, loading: payLoading, success: paySuccess } = cardOrderPay

    const walletDebit = useSelector(state => state.cardOrderPay)
    const { error: walletError,
        loading: walletLoading,
        success: walletSuccess
    } =
        walletDebit

    let orderitem;
    let balance;
    if (order) {
        const { orderItems } = order
        orderitem = orderItems
        balance = parseInt(userInfo.wallet - orderitem.price)
    }
    useEffect(() => {
        if (userInfo) {
            const { exp } = jwt_decode(userInfo.token)
            const expirationTime = (exp * 1000) - 6000
            if (Date.now() >= expirationTime) {
                dispatch(logout())
            }
        }

        const { orderId } = queryString.parse(location.search)
        dispatch(getCardOrderDetails(orderId))
        dispatch(listFewCards(4))
        dispatch({ type: CARD_ORDER_PAY_RESET })
    }, [dispatch, location, userInfo])



    return (

        <BaseFile
            loading={cardsLoading}
            cards={cards}
            error={cardsError}
            TopImage={<img src={orderitem && orderitem.image} alt={orderitem && orderitem.name} />}
            topText={orderitem && orderitem.name}
        >
            <div
                className="buyinfo--third"
            >
                {walletLoading && <Loader />}
                {walletError && walletError}
                {
                    orderLoading ?
                        <Loader /> :
                        orderError ?
                            orderError :
                            (
                                <div className="table">
                                    <Wallet mt={20} />
                                    {
                                        payLoading ? <Loader /> :
                                            payError ? payError :
                                                paySuccess ?
                                                    <>
                                                        <div>
                                                            Success!
                                        <Link to="/profile"> View Purchase Info</Link>
                                                        </div>

                                                    </>
                                                    :
                                                    (
                                                        <>
                                                            <CustomTable
                                                                cost={orderitem.price}
                                                                qty={orderitem.qty}
                                                                name={orderitem.name}
                                                                orderId={order._id}
                                                                paymentMethod={order.paymentMethod}
                                                            />

                                                            {
                                                                !order.isPaid && (

                                                                    <div className="table__action">
                                                                        <Link
                                                                            to={`/edititem/cardorder?id=${order._id}`}>
                                                                            Edit card <LaunchIcon />
                                                                        </Link>
                                                                        {
                                                                            order.paymentMethod === 'PayStack' ?
                                                                                <PayStack
                                                                                    orderId={order._id}
                                                                                    orderitem={orderitem}
                                                                                    amount={parseInt(orderitem.price)}
                                                                                />
                                                                                :
                                                                                order.paymentMethod === 'Wallet' ?
                                                                                    orderitem &&
                                                                                    <WalletPayment
                                                                                        orderitem={orderitem}
                                                                                        balance={balance}
                                                                                        order={order}
                                                                                        setInsufficientAmount={setInsufficientAmount}
                                                                                    />
                                                                                    :
                                                                                    null
                                                                        }


                                                                    </div>
                                                                )}
                                                        </>
                                                    )
                                    }


                                </div>
                            )

                }
            </div>
            <MessageModal
                open={insufficientAmount}
                setOpen={setInsufficientAmount}
                caption="Insufficient Fund"
                message=
                {<div>
                    Please add money to your wallet or <br />choose another payment method
                    </div>}
            />
        </BaseFile>

    )
}
export default PayOrder
