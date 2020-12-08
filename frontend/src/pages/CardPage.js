import React, {useEffect} from 'react'
import BaseFile from "../components/Services/Base"
import Header from "../components/MainHeader"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

const CardPage = ({setShowDrawer}) => {
    const history = useHistory()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    useEffect(()=>{
        if(!userInfo){
            history.goBack()    
        }
    })
    
    return (
        <div>
            <Header setShowDrawer={setShowDrawer} />
            <BaseFile />
            <button onClick={()=> history.goBack()}>Go back</button>
        </div>
    )
}

export default CardPage
