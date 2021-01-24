import React from 'react'
import { FooterElement } from "../styles/FooterStyle"
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterElement>
            <div>
                <label><PublicIcon /> Tiplogo</label>
            </div>
            <div className="footer__items">
                <small><Link>Contact Tiplogo</Link> </small>
                <small><Link>Privacy</Link> </small>
                <small><Link>Terms of use</Link> </small>
                <small><Link>Help</Link> </small>
                <small>&copy; {new Date().getFullYear()} </small>
            </div>
        </FooterElement>
    )
}

export default Footer
