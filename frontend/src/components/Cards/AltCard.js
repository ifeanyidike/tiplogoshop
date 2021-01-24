import React from 'react'
import { CardContainer } from "../../styles/CardStyle"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"


const AltCard = ({ id, src, title, desc, href, anchor, color, variants }) => {
    const location = useLocation()
    const splittedPath = location.pathname.split(/\//);
    const refUrl = splittedPath.includes('buycards') ? `${id}` : `buycards/${id}`
    const loc = href === 'all' ? '/allcards' : refUrl

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
            <Link to={loc} >{anchor}</Link>
        </CardContainer>
    )
}

export default AltCard
