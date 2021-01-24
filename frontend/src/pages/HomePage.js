import React, { useEffect } from 'react'
import Header from "../components/MainHeader"
import {
    HomeTopContainer,
    HomeTabContainer,
    HomeCardContainer,
    HomeAltCardContainer,
    HomeCounterContainer,
    HomeTestimonialContainer,
} from "../styles/HomeStyle"
import { Divider } from "../styles/globalStyles"
import { size } from "../styles/breakpoints"
import Wavebottom from "../svg/wavebottom.js"
import Tabs from "../components/TabContainer"
import Testimonial from "../components/Testimonial"
import TopSection from "../components/TopSection"
import { cardFeatures, altCardFeatures, counter } from "../components/JsonAPIs"
import Footer from "../components/Footer"
import { useDispatch, useSelector } from "react-redux"
import { listFewCards } from '../redux/actions/cardActions'
import LoadCards from "../components/LoadCards"

const HomePage = ({ setShowDrawer }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFewCards(4))
    }, [dispatch])

    const cardListFew = useSelector(state => state.cardListFew)
    const { loading: cardsLoading, cards, error: cardsError } = cardListFew



    return (
        <React.Fragment>
            <HomeTopContainer>
                <Header setShowDrawer={setShowDrawer} />
                <TopSection />
                <Wavebottom />
            </HomeTopContainer>

            <HomeTabContainer id="services">
                <Tabs />
            </HomeTabContainer>


            <HomeAltCardContainer>
                <Divider />
                <LoadCards
                    loading={cardsLoading}
                    cards={cards}
                    error={cardsError}
                    href="all"
                />

            </HomeAltCardContainer>


            <HomeTestimonialContainer>
                <Divider />
                <div className="testimonial__content">
                    <h2>Client testimonials</h2>
                    <p>Hear what other customers say about Tiplogo Nigeria Limited.</p>

                    <Testimonial
                        perPage={
                            window.innerWidth >= parseInt(size.laptop_lg) ? 3 :
                                window.innerWidth >= parseInt(size.tablet) ? 2 : 1}

                    />
                </div>

            </HomeTestimonialContainer>

        </React.Fragment>
    )
}

export default HomePage
