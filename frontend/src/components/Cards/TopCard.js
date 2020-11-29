import React from 'react'
import {TopCardPane} from "../../styles/CardStyle"
import {
    topCardVariants, 
} from "../../animationVariants/HomeVariants"

const TopCard = ({icon, title, bcolor}) => {
    return (
        <TopCardPane 
            bcolor={bcolor}
            variants = {topCardVariants}
            initial="initial"
            animate="animate"
            >
            <i className={icon} />
            <span>{title}</span>
        </TopCardPane>
    )
}

export default TopCard
