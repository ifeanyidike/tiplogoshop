import React, { useState, useEffect } from 'react'
import NumRange from "../NumRange"
import AccountWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CustomTable from "../Tables/CustomTable"
import { createCardOrder, getCardOrderDetails } from "../../redux/actions/cardOrderActions"
import { useDispatch, useSelector } from "react-redux"
import PaymentMethods from "../Payment/PaymentMethods"
import Loader from "../Loaders/SimpleLoader"
import { useHistory, Link } from "react-router-dom"
import { listCardDetails } from '../../redux/actions/cardActions'
import LaunchIcon from '@material-ui/icons/Launch';
import ChoosePayment from './ChoosePayment';
import Wallet from "../Utils/Wallet"
import CurrencyFormat from 'react-currency-format';
import { createTransport } from 'nodemailer';

const BaseChildren = ({ baseAmount, availability, name }) => {

    const cardDetails = useSelector(state => state.cardDetails)
    const { loading: cardLoading, card, error: cardError } = cardDetails

    const [num, setNum] = useState(1)
    const [totalCost, setTotalCost] = useState(null)

    const cardOrderCreate = useSelector(state => state.cardOrderCreate)
    const { order, success: createSuccess } = cardOrderCreate

    useEffect(() => {
        if (!cardLoading && !cardError) {
            setTotalCost(card.price)
        }
    }, [cardLoading, cardError, card])




    return (
        <div className="children">

            <Wallet mt={50} width={300} />
            <div className="buyinfo--edit">
                {
                    !createSuccess &&
                    <div className="buyinfo--first edit">
                        <div className="number" >
                            <span>1</span>
                        </div>

                        <div className="contents">
                            <div className="numrange">
                                <h5>How many cards?
                            <hr />
                                </h5>
                                <NumRange
                                    num={num}
                                    setNum={setNum}
                                    setPrice={setTotalCost}
                                    amount={parseInt(card.price)}
                                    limit={card && card.items && card.items.length}
                                />
                                <div className="price__items">
                                    <span className="price">
                                        <CurrencyFormat
                                            value={parseInt(totalCost)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'₦'}
                                            renderText={value => <h2>{value}</h2>}
                                        />

                                    </span>

                                    <small>
                                        <div></div>
                                        <span>
                                            {
                                                card && card.items &&
                                                (card.items.length > 0 ? "In stock" : "Out of stock")
                                            }
                                        </span>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="buyinfo--second">
                    <hr />

                    <div className="paymentmethod-alt">
                        <div className="number bottom" >
                            <span>2</span>
                        </div>
                        <ChoosePayment
                            num={num}
                            baseAmount={baseAmount}
                        />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default BaseChildren
