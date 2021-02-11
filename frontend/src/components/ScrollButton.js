import React from 'react'
import { ScrollContainer } from '../styles/ScrollStyles'
import { IconButton } from "@material-ui/core"
import { animateScroll as scroll } from 'react-scroll'

const ScrollButton = () => {
    return (
        <ScrollContainer onClick={() => scroll.scrollToTop()}>
            <IconButton>
                <i className="fas fa-chevron-up"></i>
            </IconButton>

        </ScrollContainer>
    )
}

export default ScrollButton
