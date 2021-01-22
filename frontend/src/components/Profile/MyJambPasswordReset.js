import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import FixedTable from "./ProfileFixedHeaderTable"
import Loader from "../Loaders/SimpleLoader"
import { listMyJambPasswordResetOrders } from '../../redux/actions/jambPasswordResetActions'

const MyJambPasswordReset = () => {
    const dispatch = useDispatch()
    const headCells = [
        { id: '_id', label: 'Order ID' },
        { id: 'paymentMethod', label: 'Payment Method' },
        { id: 'price', label: 'Price' },
    ];
    const orderHeaders = [
        { id: 'email', label: 'Email' },
        { id: 'name', label: "Candidate's name" },

    ]

    useEffect(() => {
        dispatch(listMyJambPasswordResetOrders())
    }, [dispatch])

    const { loading, error, orders } = useSelector(state => state.jambPasswordResetOrderListMy)
    console.log(orders)

    return (
        <div>
            {
                loading ? <Loader />
                    :
                    error ? error
                        :
                        <FixedTable
                            columns={headCells}
                            rows={orders}
                            orderItems={["email", "name"]}
                            orderHeaders={orderHeaders}
                        />
            }

        </div>
    )
}

export default MyJambPasswordReset
