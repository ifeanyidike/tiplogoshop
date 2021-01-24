import React, { useState, useEffect } from 'react'
import Content from "../TableContent"
import { useDispatch, useSelector } from "react-redux"
import { listChangeOfCourseOrders } from "../../../redux/actions/changeOfCourseActions"
import { useHistory } from "react-router-dom"
import { AdminButtonAlt, AdminPrice, RightAlign } from "../../../styles/AdminStyles"
import { listServiceByName, updateService } from '../../../redux/actions/serviceActions'
import { Card, CardContent } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'

const ChangeOfCourseList = ({ setValue }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const serviceName = 'jamb change of course and institution'

    const headCells = [
        { id: 'type', numeric: false, disablePadding: true, label: 'Type' },
        { id: 'price', numeric: true, disablePadding: false, label: 'Cost' },
        { id: 'user', numeric: true, disablePadding: false, label: 'Customer' },
        { id: 'createdAt', numeric: true, disablePadding: false, label: 'Date created' },
    ];

    useEffect(() => {
        dispatch(listChangeOfCourseOrders())
        dispatch(listServiceByName(serviceName))
    }, [dispatch])

    const handleOverview = (id) => {
        setValue(1)
        history.push(`/admin/changeofcourse/?orderId=${id}`)
    }

    const { error, loading, orders } = useSelector(state => state.changeOfCourseOrderList)

    const [price, setPrice] = useState(0)

    const { service } = useSelector(state => state.serviceByName)


    useEffect(() => {
        if (service) {
            setPrice(service.cost)
        }
    }, [service])

    return (
        <div>
            <Content
                caption="Change of course order List"
                headCells={headCells}
                setValue={setValue}
                error={error && error}
                loading={loading && loading}
                items={orders}
                handleOverview={handleOverview}
                anchor="_id"
                showUser={true}
                showCost={true}
                displayArr={["type"]}
            />



        </div>
    )
}

export default ChangeOfCourseList
