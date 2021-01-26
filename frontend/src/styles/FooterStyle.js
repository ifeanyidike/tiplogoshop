import styled from 'styled-components'
import { device, colors } from "./breakpoints"

export const FooterElement = styled.footer`
    
    background: ${colors.background};
    padding: 40px 80px 20px 80px;
    @media ${device.tablet_md}{
        padding: 40px 10px 20px 10px;
    }
   
    display: flex;
    justify-content: space-between;
    a{
        text-decoration: none;    
        color: ${colors.darkblue}    
    }
    label{
        display: flex;
        align-items: center;
        .MuiSvgIcon-root{
            margin-right: 5px;
        }
    }
    .footer__items{
        flex-grow: 0.3;
        display: flex;
        justify-content: space-between;
        @media ${device.mobile_lg}{
            small:first-child{
                display: none;
            }
            small:nth-child(4){
                display: none;
            }
        }
    }
`