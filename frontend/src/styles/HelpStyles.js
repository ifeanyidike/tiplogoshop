import styled from 'styled-components'
import { motion } from 'framer-motion'
import { device, colors } from "./breakpoints"
import { AdminButtonPro } from "./AdminStyles"

export const HelpContainer = styled.div`
    
    .content{
        display: grid;
        place-items: center;
        margin: 80px 30px 40px 30px;
        
        .topcontent{
            display: grid;        
            grid-template-columns: repeat(2, 1fr);  
            
            @media ${device.tablet}{
                grid-template-columns: 1fr;  
            }
            grid-gap: 40px;            
            width: 100%;
            .card{
                padding: 20px;
            }
        }
    }

    .formcontrol{
        margin: 1rem;
        min-width: 100%;
        width: 100%;
    }
    
    .altcontact{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        h2{
            font-family: 'Aclonica', sans-serif            
        }
        .text{
            margin: 30px auto;
            p{
                padding: 15px;
            }
            
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
            border-radius: 10px;
        }
        .buttons{
            width: 100%;                        
            display: flex;
            justify-content: space-around;
            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                
            }
        }
    }
`

export const HelpButtonPro = styled(AdminButtonPro)`
    padding: 5px 15px 5px 15px;
    a{
        text-decoration: none;
        color: ${colors.darkblue};
        display: flex;
        align-items: center;
        .MuiSvgIcon-root{
            margin-right: 3px;
        }
    }
`