import React from 'react'
import {CardContainer} from "../../styles/CardStyle"
import {Link} from 'react-router-dom'


const AltCard = ({icon, src, title, desc, href, anchor, color, variants}) => {
    return (
        <CardContainer 
            variants={variants}
            initial='initial'
            animate='animate'
            whileHover='onHover'
            variant={color}
        >
            
            {/* <i className={icon}></i> */}
            <div className="cardimage__panel">
                <img src={src} alt={title} />
            </div> 
            <h4>{title}</h4>
            <p>{desc}</p>
            <Link to={href}>{anchor}</Link>
        </CardContainer>
    )
}

export default AltCard
