import React, { useState, useEffect } from 'react'
import Content from "../Content"
import ChangeOfCourseList from "./ChangeOfCourseList"
import ChangeOfCourseDetails from "./ChangeOfCourseDetails"
import { Card, CardContent } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'
import { listServiceByName } from '../../../redux/actions/serviceActions'
import { useDispatch, useSelector } from "react-redux"

const CardOrders = () => {
    const [value, setValue] = useState(0);
    const labels = ["Change of Course Order List", "Change of Course Order Details"]


    return (
        <div>
            <Content
                labels={labels}
                TabContent={
                    [<ChangeOfCourseList setValue={setValue} />,
                    <ChangeOfCourseDetails setValue={setValue} />
                    ]}
                value={value}
                setValue={setValue}
            />


        </div>
    )
}

export default CardOrders
