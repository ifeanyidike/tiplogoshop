import React from 'react'
import {CardContainer} from "../../styles/CardStyle"
import {Link} from 'react-router-dom'


const AltCard = ({icon,title, desc, href, anchor, color, variants}) => {
    return (
        <CardContainer 
            variants={variants}
            initial='initial'
            animate='animate'
            whileHover='onHover'
            variant={color}
        >
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{desc}</p>
            <Link to={href}>{anchor}</Link>
        </CardContainer>
    )
}

export default AltCard
