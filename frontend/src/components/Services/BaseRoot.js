import React from 'react'
import {
    BaseContainer,
} from "../../styles/ServiceStyle.js"
import { useDispatch, useSelector } from "react-redux"
import Header from "../MainHeader"

const Base = ({
    TopImage,
    topText,
    children
}) => {



    return (
        <>
            <Header />
            <BaseContainer>
                <div className="topimage">
                    <div className="centeritem">
                        {TopImage}
                        <h4>{topText}</h4>
                    </div>
                </div>
                {children}
            </BaseContainer>
        </>
    )
}

export default Base