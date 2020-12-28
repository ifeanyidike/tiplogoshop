import React, {useEffect} from 'react'
import Header from "../components/MainHeader"
import {
    HomeTopContainer, 
    HomeTabContainer, 
    HomeCardContainer, 
    HomeAltCardContainer,
    HomeCounterContainer, 
    HomeTestimonialContainer,   
} from "../styles/HomeStyle"
import {Divider} from "../styles/globalStyles"
import {size} from "../styles/breakpoints"
import Wavebottom from "../svg/wavebottom.js"
import Card from "../components/Cards/Card"
import AltCard from "../components/Cards/AltCard"
import Counter from "../components/Counter"
import Tabs from "../components/TabContainer"
import Testimonial from "../components/Testimonial"
import TopSection from "../components/TopSection"
import {cardFeatures, altCardFeatures, counter} from "../components/JsonAPIs"
import Footer from "../components/Footer"
import {useDispatch, useSelector} from "react-redux"
import { listFewCards } from '../redux/actions/cardActions'
import LoadCards from "../components/LoadCards"

const HomePage = ({setShowDrawer}) => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(listFewCards(4))
    }, [dispatch])
    
    const cardListFew  = useSelector(state => state.cardListFew)
    const {loading: cardsLoading, cards, error: cardsError} = cardListFew
    
    
    
    return (
        <React.Fragment>
            <HomeTopContainer>
            <Header setShowDrawer={setShowDrawer} />
                <TopSection />
                <Wavebottom />
            </HomeTopContainer>
                        
            <HomeTabContainer>
                <Tabs  />                
            </HomeTabContainer>
            
            
            <HomeAltCardContainer>
                <Divider />
                <LoadCards 
                    loading={cardsLoading} 
                    cards = {cards}        
                    error = {cardsError}
                    href = "all"
                />
                                   
            </HomeAltCardContainer>
            
            {/* <HomeCardContainer>                                                                    
                
                <div className="card__container">
                    { cardFeatures.map(feature => (
                        <Card 
                            src={feature.src}
                            firstCategory={feature.firstCategory}
                            secondCategory={feature.secondCategory}
                            caption={feature.caption}
                            cta={feature.cta}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                         />
                    )) }
                </div>
            </HomeCardContainer> */}
            <HomeTestimonialContainer>
                <Divider />
                <div className="testimonial__content">
                    <h2>Client testimonials</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa assumenda provident est consequatur?</p>
                    
                    <Testimonial 
                        perPage={
                            window.innerWidth >= parseInt(size.laptop_lg) ? 3 : 
                            window.innerWidth >= parseInt(size.tablet) ? 2 : 1} 
                        
                    />
                </div>
                
            </HomeTestimonialContainer>
            {/* <HomeCounterContainer>
                        {counter.map((counterfeature, index) =>(
                            <div key={index} className="counter__pane">
                                <i className={counterfeature.icon}></i>
                                <Counter max={counterfeature.max} />
                                <p>{counterfeature.description}</p>
                            </div>
                
                        ))}                                                            
            </HomeCounterContainer> */}
            
            <Footer />            
            
        </React.Fragment>
    )
}

export default HomePage
