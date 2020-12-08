import styled from "styled-components"
import {motion} from "framer-motion"
import {device, colors} from "./breakpoints"

export const BaseContainer = styled(motion.div)`
    background-color: ${colors.white};
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
    padding: 30px 50px;
    width: 70%;
    margin: 50px auto;
    font-family: 'Jost', sans-serif;
    h1{
        font-family: 'Aclonica', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
    }
`;

export const InputGroupContainer = styled(motion.div)`
    display: flex;
    border: 2px solid ${colors.lightergray};
    background: #F9FAFD; 
    border-radius: 5px;    
    width: ${props => `${props.width + 330}px` || '100%'};
    
    span{
        
        background: #F9FAFD;        
        padding: 10px;                
    }
    input[type=text]{
        margin-left: 5px;
        border: 0;
        outline: 0;
        flex-grow: 1;
        font-size: 1.5rem;        
    }
    
    
`