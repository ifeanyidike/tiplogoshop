import React from 'react'
import {AuthTabContainer} from "../styles/AuthStyle"
import Header from "../components/MainHeader"
import AuthPanel from "../components/Auth/"


const AuthPage = ({setShowDrawer}) => {
    return (
        <div>
        <Header  />
            <AuthTabContainer>                
                <AuthPanel />    
            </AuthTabContainer>                        
        </div>
    )
}

export default AuthPage
