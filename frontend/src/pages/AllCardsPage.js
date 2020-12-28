import React, {useEffect} from 'react'
import Header from "../components/MainHeader"
import Base from "../components/Services/Base"
import {useDispatch, useSelector} from "react-redux"
import { listCards } from '../redux/actions/cardActions'


const AllCardsPage = () => {
    
    const cardList  = useSelector(state => state.cardList)
    const {loading: cardsLoading, cards, error: cardsError} = cardList
    
    const dispatch = useDispatch()       
    
    useEffect(()=>{
        dispatch(listCards())
    }, [dispatch])
    
    return (
        <div>            
            <Base
                loading={cardsLoading} 
                cards = {cards}        
                error = {cardsError}
                topText="Browse All Cards. A Click Away to Purchase."
            >
                
            </Base>
        </div>
    )
}

export default AllCardsPage
