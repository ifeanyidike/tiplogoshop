import React from 'react'
import {
    Image, 
    ScreenDiv, 
    Button
} from "../styles/HomeStyle"
import examPerson from "../svg/proctor.svg"
import {buttonVariants} from "../animationVariants/HomeVariants"
import TopCard from "./Cards/TopCard"
import {topcard_features} from "./JsonAPIs"

const TopSection = () => {
    return (
        <ScreenDiv>                
                    <Image src={examPerson} variant="homeTopVector" alt="with laptop" />
                    <div>
                        <div className="topcards">
                            {topcard_features.map(({icon, title, bcolor},index) => (
                                <TopCard 
                                    key={index} 
                                    icon={icon} 
                                    title={title}
                                    bcolor={bcolor}
                                 />
                            ))}
                        </div>
                        <h1>CBT Solutions</h1>
                        <p>Access topnotch CBT solutions including <span>cards, pins & tokens</span></p>
                        <p>Join thousands of learners today.</p>
                        <Button
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="onHover"                            
                        >
                            Get started
                        </Button>
                    </div>                    
                </ScreenDiv>
    )
}

export default TopSection
