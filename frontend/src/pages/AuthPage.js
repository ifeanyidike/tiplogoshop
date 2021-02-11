import React from 'react'
import { AuthTabContainer, AuthMainContainer } from "../styles/AuthStyle"
import Header from "../components/MainHeader"
import AuthPanel from "../components/Auth/"
import Meta from "../components/Meta"


const AuthPage = () => {
    return (
        <div>
            <Meta />
            <Header />
            <AuthMainContainer>
                <AuthTabContainer>
                    <AuthPanel />
                </AuthTabContainer>
            </AuthMainContainer>
        </div>
    )
}

export default AuthPage
