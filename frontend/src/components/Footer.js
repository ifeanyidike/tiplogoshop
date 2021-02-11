import React from 'react'
import { FooterElement } from "../styles/FooterStyle"
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { useSelector } from 'react-redux'

const Footer = ({ hide }) => {
    return (
        <FooterElement>

            <div className="topfooter" style={{ display: hide ? 'none' : 'grid' }}>
                <div className="description">
                    <img src="/images/tiplogo.png" alt="Logo" />
                    <p>
                        Buy WAEC/NECO Scratch Cards, all JAMB correction of data, JAMB Regularisation, etc.
                    </p>
                </div>
                <div className='links'>
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/help'>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/auth'>Sign up</Link>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h4>Contacts</h4>
                    <ul>
                        <li><LocationOnIcon /> 2 John Kay Avenue Okitipupa, Ondo State</li>
                        <li><MailOutlineIcon /> tiplogocafe@gmail.com</li>
                        <li><PhoneIcon /> <span>08069598685, 08057740422</span></li>
                    </ul>
                </div>
                <div className="account">
                    <h4>Account</h4>
                    <ul>
                        <li><p><span>Bank Name: </span> STANBIC IBTC</p></li>
                        <li><p><span>Account Name:</span> Tiplogo Nigeria Limited</p></li>
                        <li><p><span>Account Number:</span> 0036877916</p></li>
                    </ul>

                </div>

            </div>
            <div className='bottombar'>
                <div>
                    <label><PublicIcon /> Tiplogo</label>
                </div>
                <div className="footer__items">
                    <small><Link to="/help">Contact Tiplogo</Link> </small>
                    <small><Link to='/'>Privacy</Link> </small>
                    <small><Link to='/'>Terms of use</Link> </small>
                    <small><Link to="/help">Help</Link> </small>
                    <small>&copy; {new Date().getFullYear()} </small>
                </div>
            </div>
        </FooterElement>
    )
}

export default Footer
