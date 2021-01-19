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
            .fullwidth{
                grid-column: 1/span 2
            }
            textarea{
                padding: 10px;
                border: 1px solid ${colors.midtext};
                border-radius: 10px;
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
    .carditems, .messagecontainer{
        grid-column: 1/10;
    }
    .embossitem{
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);     
        padding: 20px 40px;
        margin-bottom: 20px;
    }
    
`

export const AdminButton = styled(Button)`
    margin: 0.5rem;
    
    padding: 0.3rem 0.5rem;
    width: fit-content;
    font-weight: bold;
`

export const AdminButtonAlt = styled(AdminButton)`
    border-color: ${colors.midtext};
    background-color: ${colors.midtext};
    display: flex;
    align-items: center;
    margin: 0 auto;
`
export const AdminButtonPro = styled(AdminButton)`
    border-color: ${props => props.color};
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    
`


export const AdminHeader = styled.header`    
    .message{
        font-family: "Jost", sans-serif;
        background: ${colors.dimwhite};
        font-weight: bold;
        border-radius: 5px;
        padding: 5px 0;
        text-align: center;
        color: ${colors.darkred}
    }
`
export const DrawerContainer = styled.div`
    a{
        text-decoration: none;        
    }
`
export const RightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 'fit-content';
    
`
