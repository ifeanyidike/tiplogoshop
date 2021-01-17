import React, { useState, useEffect } from 'react'
import Content from "./Content"
import { useDispatch, useSelector } from "react-redux"
import { getAUser, getAllUsers } from "../../redux/actions/userActions"


const UsersList = ({ setValue }) => {
    const { error, loading, users } = useSelector(state => state.usersList)
    const dispatch = useDispatch()

    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Full Name' },
        { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
        { id: 'type', numeric: true, disablePadding: false, label: 'Auth Type' },
        { id: 'wallet', numeric: true, disablePadding: false, label: 'Wallet Balance' },
        { id: 'createdAt', numeric: true, disablePadding: false, label: 'Date created' },
    ];

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div>
            <Content
                caption="Users List"
                headCells={headCells}
                setValue={setValue}
                getAnItem={getAUser}
                error={error && error}
                loading={loading && loading}
                items={users && users}
                anchor="name"
                displayArr={["email", "type", "wallet"]}
            />
        </div>
    )
}

export default UsersList
