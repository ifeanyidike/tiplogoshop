import React from 'react'
import {Backdrop, Drawer, DrawerContent} from "../styles/DrawerStyle"
import SvgIcon from '../images/svg/sitelogo.js'
import {motion, AnimatePresence} from "framer-motion"
import {
    backdropVariant, 
    drawerVariant,
    mainListVariants,
    firstListVariants,
    secondListVariants,
    thirdListVariants,
    fourthListVariants
} from "../animationVariants/DrawerVariants"
import SocialNetworks from "../components/SocialNetworks"
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom"

const SideDrawer = ({showDrawer, setShowDrawer}) => {   
    
    const animateDrawer = () =>{
        const navLinks = document.querySelectorAll("nav ul li.item");        
        navLinks.forEach((link, ind) => {     
            if(link.style.animation){                
                link.style.animation = ''                            
            }
        })
    }
    
    const handleCancelClick = () =>{
        animateDrawer()
        setShowDrawer(false)        
    }
    
    return (
        <AnimatePresence>                        
                <>
                {showDrawer &&(
                    <Backdrop
                        key="backdrop"
                        variants={backdropVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={()=>setShowDrawer(false)}
                    />
                )}
                    <Drawer
                        key="drawer"
                        variants={drawerVariant}  
                        initial="hidden"
                        animate="visible"
                        style={{transform: showDrawer ? "translateX(0)" : "translateX(-100%)"}}
                    >                                         
                        <DrawerContent>                            
                            <motion.ul
                                variants={mainListVariants}
                                initial="initial"
                                animate="animate"
                                
                            >
                                <li className="sidedrawer__firstchild">
                                    <CloseIcon 
                                        fontSize='large' 
                                        className='closeIcon' 
                                        onClick={handleCancelClick}                                    
                                    />
                                    <SvgIcon />
                                    
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, pariatur.</span>
                                </li>
                                <Link to='/' className="drawer__link first">
                                    <motion.li className='item' >                                    
                                        <i className="fas fa-graduation-cap fa-2x"></i> 
                                        <span>Buy Pin</span>                                     
                                    </motion.li>
                                </Link>
                                <Link to='/' className="drawer__link">
                                    <motion.li className='item' >                                     
                                        <i className="fas fa-cogs fa-2x"></i> 
                                        <span>Services</span>                                     
                                    </motion.li>
                                </Link>
                                
                                <Link to='/' className="drawer__link">
                                    <motion.li className='item' >                                     
                                        <i className="fas fa-file-signature fa-2x"></i> 
                                        <span>Get Help</span>                                     
                                    </motion.li>
                                </Link>
                                
                                <Link to='/' className="drawer__link">
                                    <motion.li className='item' >                                     
                                        <i className="fas fa-info-circle fa-2x"></i> 
                                        <span>Join</span>                                    
                                    </motion.li>
                                </Link>
                                <motion.li>
                                    <SocialNetworks />
                                </motion.li>                            
                            </motion.ul>   
                        </DrawerContent>   
                    </Drawer>
                </>
            
        </AnimatePresence>
    )
}

export default SideDrawer
