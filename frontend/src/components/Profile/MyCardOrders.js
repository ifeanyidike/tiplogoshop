import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { listMyCardOrders } from "../../redux/actions/cardOrderActions"

const MyCardOrders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listMyCardOrders())
    }, [dispatch])

    const { loading, error, orders } = useSelector(state => state.cardOrderListMy)
    console.log(orders)

    return (
        <div>

        </div>
    )
}

export default MyCardOrders
