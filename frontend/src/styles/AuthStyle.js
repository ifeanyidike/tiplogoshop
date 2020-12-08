import styled from 'styled-components'
import {motion} from 'framer-motion'
import {device, colors} from "./breakpoints"
import {TabContainer} from "./TabStyle"
import {Button} from "./HomeStyle"

export const AuthTabContainer = styled(TabContainer)`
    
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    width:40%;
    margin: 50px auto; 
    
    @media ${device.tablet}{
        width:100%;
    }
   
    .register__text{        
        font-family: 'Jost', sans-serif;
        text-align: center;
        *{
            margin-bottom: 20px;
        }
        h6{
            font-family: 'Aclonica', sans-serif;
            font-weight: 400
        }
        p{
            font-weight: 300 !important;
        }
        
    }
    
    .tabs div div{
        
        width: 100%;
        @media ${device.tablet}{            
            flex-direction: row;
        };       
    }   
    .tabs div div button{
        font-family: 'Jost', sans-serif !important;
        border-radius: 0 !important;
        background-color: #F9F9F9;
        
    }
                                   
    .login__buttons{
        display:flex;
        flex-direction: column;
    }
`;

export const AuthButton = styled(Button)`
    width: 500px !important;
`

export const FacebookButton = styled(motion.div)`
    width: 100% !important;        
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiSvgIcon-root{
        margin-right: 5px;
    }
    .kep-login-facebook{
        font-family: 'Jost', sans-serif !important;
        text-transform: capitalize !important;
        font-weight: 500 !important;
        width: 500px !important;
    }
`

export const GoogleButton = styled(Button)``