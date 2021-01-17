import styled from 'styled-components'
import { motion } from "framer-motion"
import { device, colors } from "./breakpoints"
import { Button } from "./HomeStyle"

export const UserProfileContainer = styled.div`
    font-family: 'Jost', sans-serif;
    h1, h2, h3{
        font-family: 'Aclonica', sans-serif;
    }
    display: grid;            
    grid-gap: 20px;
    @media ${device.tablet}{
        grid-template-columns: 1fr;
    }
    .card__image{     
        grid-column: 1; 
        
        @media ${device.tablet}{
            grid-column: auto;
        } 
        display: flex;
        justify-content: center;
        .profile_pic{
           width: 150px;
            height: 150px;        
        }
    }
    .card__content{
        grid-column: 2/10;
        grid-row: 1/3;
        @media ${device.tablet}{
            grid-column: auto;
            grid-row: auto;
        } 
        
        
        .heading{
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media ${device.tablet}{
                flex-direction: column;
            }
            div{
                span{
                    margin-right: 5px;
                }
                display: flex;
            }
        }
        .contents{
            margin: 10px 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            
            grid-gap: 20px;
            @media ${device.tablet}{
                grid-template-columns: 1fr;
                place-items: start;
                grid-row-gap: 10px;
            }
            div > span:first-child{
                margin-right: 5px;
                font-weight: bold;
            }
        }
        
        .actions{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            
        }
        
        .delete{
            
            margin-top: 10px;
            .deleteheader{
               font-weight: bold;
            }
            .deleteconfirm{
                display: flex;
                justify-content: space-between;
                
            }
        }
        
    }
`

export const AdminButton = styled(Button)`
    margin: 0.5rem;
    
    padding: 0.3rem 0.5rem;
    width: fit-content;
    font-weight: bold;
`