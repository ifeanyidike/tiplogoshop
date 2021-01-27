import React from 'react'
import MainHeader from '../components/MainHeader.js'
import { UnAuthorizedContainer, AccessButton } from "../styles/NotFoundStyles.js"
import { useHistory } from "react-router-dom"
import Meta from "../components/Meta"

const NotFoundPage = () => {
    const history = useHistory()

    return (
        <UnAuthorizedContainer >
            <Meta />
            <MainHeader />

            <div className="notfound">
                <p aria-label="404">
                    <span data-text="N">N</span>
                    <span data-text="O">O</span>

                    <span data-text="W">W</span>
                    <span data-text="A">A</span>
                    <span data-text="Y">Y</span>
                    <span data-text="!">!</span>

                </p>
                <span className="caption">401 - UNAUTHORIZED ACCESS</span>
                <span className="text">The page you are looking for lies beyond your bounds. </span>
                <span className="text">You cannot access it. Contact the site administrator to proceed. </span>
                <AccessButton onClick={() => history.push('/')}>GO TO HOMEPAGE</AccessButton>
            </div>
        </UnAuthorizedContainer>
    )
}

export default NotFoundPage
