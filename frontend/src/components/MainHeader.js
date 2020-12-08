import React from 'react'
import SvgIcon from '../images/svg/sitelogo.js'
import {Header, HeaderRightItems, Hamburger} from "../styles/HeaderStyle"
import {
        headerRightVariants, 
        headerTextVariants,
        hamburgerVariants,
        hamburgerItemsVariants
    } from "../animationVariants/HeaderVariants"
import {motion} from "framer-motion"
import {Link, useHistory, useLocation} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../redux/actions/userActions"


const MainHeader = ({setShowDrawer}) => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    
    const path = location.pathname
    
    const userLogin  = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const animateDrawer = () =>{
        const navLinks = document.querySelectorAll("nav ul li.item");
        navLinks.forEach((link, ind) => {                        
            link.style.animation = `navlinkfade 1s ease forwards ${ind / 2 + 0.8}s`                                        
        })
    }
    const handleHamburgerClick = () =>{
        animateDrawer()
        setShowDrawer(true)        
    }
    const logoutHandler = () =>{
        dispatch(logout())
        history.push('/auth')
    }
    
    
    return (
        <>
        
        <Header>
            <Hamburger
                variants={hamburgerVariants}
                initial="hidden"
                animate="visible"
                whileHover="onHover"
                onClick={handleHamburgerClick}
            >
                <motion.div variants={hamburgerItemsVariants} className="line1"></motion.div>
                <motion.div variants={hamburgerItemsVariants} className="line2"></motion.div>
                <motion.div variants={hamburgerItemsVariants} className="line3"></motion.div>
            </Hamburger>
            <SvgIcon />
            <HeaderRightItems variants={headerRightVariants} initial="hidden" animate="visible">                
                <ul>
                    <motion.li 
                        variants={headerTextVariants}
                        initial="initial"
                        whileHover="onHover"
                        >
                        <Link 
                            to="/" 
                            style={{fontWeight: path === '/' && 'bold' }}>
                            About
                        </Link>
                    </motion.li>
                    <motion.li 
                        variants={headerTextVariants}
                        initial="initial"
                        whileHover="onHover"
                        >
                        <Link
                            to="/cards"
                            style={{fontWeight: path === '/cards' && 'bold' }}
                        >
                        Buy Pin
                        </Link>
                    </motion.li>
                    <motion.li 
                        variants={headerTextVariants}
                        initial="initial"
                        whileHover="onHover"
                        >
                        <Link 
                            to="/"
                            style={{fontWeight: path === '/services' && 'bold' }}
                        >
                        Services
                        </Link>
                    </motion.li>
                    <motion.li 
                        variants={headerTextVariants}
                        initial="initial"
                        whileHover="onHover"
                        >
                        <Link 
                            to="/"
                            style={{fontWeight: path === '/help' && 'bold' }}
                        >Get Help</Link>
                    </motion.li>
                    <motion.li 
                        variants={headerTextVariants}
                        initial="initial"
                        whileHover="onHover"
                        >
                        
                        {userInfo ?                         
                            (
                                <Link                                     
                                    onClick={logoutHandler}                                                                  
                                >
                                    Logout
                                </Link>
                            )                            
                            :
                            (
                                <Link 
                                    to="/auth"
                                    style={{fontWeight: path=== '/join' && 'bold' }}
                                >
                                    Join
                                </Link>
                            )
                            
                        }
                        
                    </motion.li>
                    
                </ul>
            </HeaderRightItems>
        </Header>
        </>
    )
}

export default MainHeader
