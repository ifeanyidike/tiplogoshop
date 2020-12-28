import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { listFewProducts } from '../redux/actions/cardActions'
import {altCardFeatures} from "./JsonAPIs"
import AltCard from "./Cards/AltCard"

const LoadCards = ({loading, cards, error, href}) => {
  
    
  return (
    <>        
      <h2>What We Offer</h2>
                <p className="top__paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis alias officiis, 
                    autem dolores nihil repellat rem voluptas ducimus quibusdam saepe.</p>
                    
                                                  
                    <div className="card__container">
                        {loading ? 
                            "Loading.." : 
                            error ? 
                            "Error" :
                            cards && cards.map((feature, index) =>(
                                <AltCard
                                    key={feature._id}          
                                    id = {feature._id}                      
                                    src = {feature.image}
                                    title={feature.name}
                                    desc = {feature.description}
                                    anchor = {altCardFeatures[index].anchor}
                                    color = {altCardFeatures[index].color}
                                    variants = {altCardFeatures[index].variants}
                                    href = {href}                    
                                />
                            ))
                        } 
                    </div> 
    </>
  )
}

export default LoadCards
