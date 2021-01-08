import React from 'react'
import { Link } from 'react-router-dom'
import { 
    firstCardContainerVariants,
    secondCardContainerVariants,
    thirdCardContainerVariants,
    fourthCardContainerVariants
 } from '../../animationVariants/CardVariants'
import {ServicesCard} from "../../styles/ServiceStyle"

const ServicesItems = () => {
    return (
        <>
           <ServicesCard  
                variants={firstCardContainerVariants}                           
                initial='initial'
                animate='animate'
                whileHover='onHover'
                variant="darkblue"
            >
            
                <div className="icondiv">
                    <i className="fas fa-cloud-upload-alt"></i>
                </div>                           
                <h4>Jamb O-Level Result Upload</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Atque, itaque. <Link to="/services/result-upload">here</Link>
                </p>                            
            </ServicesCard> 
            <ServicesCard  
                variants={secondCardContainerVariants}                           
                initial='initial'
                animate='animate'
                whileHover='onHover'
                variant="lightgreen"
            >
            
                <div className="icondiv">
                    <i className="fas fa-exchange-alt"></i>
                </div>                            
                <h4>Change of Course & Institution</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Atque, itaque. <Link to="/services/change-of-course-institution">here</Link>
                </p>                            
            </ServicesCard>
            <ServicesCard  
                variants={thirdCardContainerVariants}                           
                initial='initial'
                animate='animate'
                whileHover='onHover'
                variant="lightblue"
            >
            
                <div className="icondiv">
                    <i className="fas fa-history"></i>
                </div>                              
                <h4>Jamb Password Reset</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Atque, itaque. <Link to="/services/jamb-password-reset">here</Link>
                </p>                            
            </ServicesCard>
            
        </>
    )
}

export default ServicesItems
