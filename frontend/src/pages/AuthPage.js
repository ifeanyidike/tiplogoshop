import React from 'react'
import { AuthTabContainer } from "../styles/AuthStyle"
import Header from "../components/MainHeader"
import AuthPanel from "../components/Auth/"
import Meta from "../components/Meta"


const AuthPage = ({ setShowDrawer }) => {
    return (
        <div>
            <Meta />
            <Header />
            <AuthTabContainer>
                <AuthPanel />
            </AuthTabContainer>
        </div>
    )
}

export default AuthPage
