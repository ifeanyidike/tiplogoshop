import React from 'react'
import LoadCards from '../components/LoadCards'
import BaseRoot from "../components/Services/BaseRoot"
import {ServicesContainer, ServicesCard} from "../styles/ServiceStyle"
import ServicesItems from "../components/Services/ServicesItems"
import {Link} from "react-router-dom"

const AllServices = () => {
    return (
        <BaseRoot topText="Services">                        
            <ServicesContainer>                
                <ServicesItems />
            </ServicesContainer>                                                    
        </BaseRoot>
    )
}

export default AllServices
