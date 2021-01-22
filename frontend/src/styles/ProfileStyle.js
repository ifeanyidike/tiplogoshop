import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, colors } from "./breakpoints"
import { Button } from "./HomeStyle"
import { UserProfileContainer } from "./AdminStyles"

export const ProfileContainer = styled(motion.div)`
    background: ${colors.background};
    .backgroundheader{
        background: url(/images/slide4.jpg);
        width: 100%;
        height: fit-content;
        padding: 20px 0;
        background-position: center;
        background-size: cover;          
        display: grid;
        place-items: center;
    }
    .profileimage{
        width: 100px;
        height: 100px;
        border-radius: 50%;     
        border: 2px solid ${colors.lightred};
        margin: 0 auto;
        margin-top: -50px;                
        z-index: 2;
        position: relative;
                
        .file{            
            width: 50%;
            height: 50%;
            opacity: 0;
            cursor: pointer;            
            z-index: 3;
            position: absolute;
        }
        
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;                                    
        }   
        
        button.filebutton{
            position: absolute;
            color: white;
            top: 20px;
            right: -25px;
        }
        button.submitbutton{
            position: absolute;
            top: 15px;
            right: -90px;
        }
        
        .MuiSvgIcon-root{            
            color: white;
            
        }
    }   
    .contentpane{
        background-color: white;
        margin: 20px auto;
        padding: 20px 40px;
        width: 60vw;
        border-radius: 10px;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
        h2{
            text-align: center;        
        }
        .MuiFormControl-root{     
            
            font-family: 'Jost', sans-serif;                       
            margin: 15px 0;            
        }
    } 
    .submit{
        display: grid;
        place-items: center;
    }
`

export const ProfileButton = styled(Button)`    
`
export const UploadButton = styled(Button)`
    padding: 0.2rem 0.5rem;
    width: fit-content;
    display:flex;
    align-items: center;
`

export const WalletContainer = styled(motion.div)`
    font-family: 'Jost', sans-serif !important;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 50px;
    border-radius: 10px;
    margin: 0 auto;    
    margin-bottom: ${props => `${props.mb}px`};
    margin-top: ${props => `${props.mt}px`};
    width: ${props => `${props.width}px`};
    
    i{
        font-size: 30px;
        color: ${colors.midtext}
    }
    h2{
        margin-top: 5px;
    }                     
`

export const WalletButton = styled(Button)`    
    padding: 0.2rem 0.5rem;
    margin: 0.5rem ${props => props.mh + 'px' || 0};
    margin-left: ${props => props.ml + 'px' || 0};
    margin-right: ${props => props.mr + 'px' || 0};
    width: 100%;
`

export const ItemOverviewContainer = styled(UserProfileContainer)`
margin-top: 40px;
    .card__image{
        .item__pic{
            width: 200px;
            height: 200px;
        }
    }
`