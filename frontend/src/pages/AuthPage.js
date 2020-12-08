import React from 'react'
import {AuthTabContainer} from "../styles/AuthStyle"
import Header from "../components/MainHeader"
import AuthPanel from "../components/Auth/"


const AuthPage = ({setShowDrawer}) => {
    return (
        <div>
        <Header setShowDrawer={setShowDrawer} />
            <AuthTabContainer>                
                <AuthPanel />    
            </AuthTabContainer>                        
        </div>
    )
}

export default AuthPage
