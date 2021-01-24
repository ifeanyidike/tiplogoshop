import styled from 'styled-components'
import { device, colors } from "./breakpoints"

export const FooterElement = styled.div`
    
    background: ${colors.background};
    padding: 80px 80px 20px 80px;
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
    }
`