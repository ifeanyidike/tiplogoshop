import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    BaseContainer,
    CardMoreContainer,
} from "../../styles/ServiceStyle.js"
import LoadCards from "../LoadCards"
import { DRAWER_OPEN, DRAWER_CLOSE } from "../../redux/constants/utilConstants"
import { useDispatch, useSelector } from "react-redux"
import Header from "../MainHeader"
import Loader from "../Loaders/SimpleLoader"

const Base = ({
    cardLoading,
    cardError,
    cards,
    TopImage,
    topText,
    children
}) => {
    const dispatch = useDispatch()

    dispatch({ type: DRAWER_OPEN })
    // const drawerToggle = useSelector(state => state.drawerToggle)

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
                {
                    cardLoading ? <Loader />
                        :
                        cardError ? cardError
                            :
                            <>
                                {children}
                                <CardMoreContainer>
                                    <LoadCards
                                        loading={cardLoading}
                                        cards={cards}
                                        error={cardError}
                                    />
                                </CardMoreContainer>
                            </>
                }
            </BaseContainer>
        </>
    )
}

export default Base
