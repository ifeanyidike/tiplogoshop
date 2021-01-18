import styled from "styled-components"
import { motion } from "framer-motion"
import { device, colors } from "./breakpoints"
import { CardContainer } from "./CardStyle"

import { Button, HomeAltCardContainer } from "./HomeStyle"

const numrangeDim = '200px'
const numCircle = '50px'

export const BaseContainer = styled(motion.div)`
    background-color: ${colors.background};        
    
    font-family: 'Jost', sans-serif;
    h1{
        font-family: 'Aclonica', sans-serif;
        font-size: 1.5rem;
        font-weight: 300;
    }
    
    .topimage{
        background-image: url(/images/slide5.jpg);
        background-color: ${colors.darktext};
        background-blend-mode: lighten;
        background-position: center;
        height: 40vh;        
         display: grid; 
         place-items: center; 
                
        .centeritem{            
            width: fit-content;                
            
            text-align:center;
            img{
                width: calc(40vh/1.8);                 
            }            
            h4{
                color: ${colors.white};
                font-weight: 400;
                font-size: 2rem;
            }
        }
        
    }
   
    
    .edit{
        flex-direction: column;
        align-items: center;
        padding-top: 20px !important;   
    }
    
    .buyinfo--first{
        display:flex;
        justify-content: center;
        
        padding-top: 50px;
        
        .contents{
            .numrange{
                h5{
                    font-weight: 400;
                    font-size: 1.2rem;
                    text-align: center;
                    margin-bottom: 5px;
                    hr{
                        width: 30%;
                        margin: 5px auto 20px auto;
                        height: 2px;
                        border: 0;
                        outline: 0;
                        background-color: ${colors.goldish};
                        color: ${colors.goldish};
                    }
                }
            }
            
            margin-top: 30px;            
                        
            .price__items{
                margin-top: 20px;
                display: flex;
                
                
                .price{
                    font-size: 1.8rem;
                    margin-right: 20px;
                    font-weight: 600;
                    color: ${colors.darkred}
                }
                small{
                    display:flex;
                    align-items: center;
                    
                    div{
                        width: 8px;
                        height: 8px;
                        background-color: orange;
                        border-radius: 50%;
                    }
                    span{
                        margin-left: 5px;
                    }
                }
            }
        }
    }
    
    .buyinfo--second{
        
        position: relative;
        
        .backbutton{
            position: absolute;
            top: 50px;
        }
        .MuiTableCell-root{
            font-family: 'Jost' !important;
        }
        
        .paymentmethod{                     
            margin: 50px auto;
            background-color: ${colors.white};
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
            padding: 40px 80px;
            border-radius: 5px;
            .paymenttitle{                
                margin-bottom: 15px;
            }
            .paymenttitle, .paymentitem .MuiFormControlLabel-label{
                font-family: 'Jost' !important;
            }
        }   
        hr{
            border: 0;
            outline: 0;
            background: ${colors.goldish};
            height: 2px;
            margin-top: 20px;
        }
        .bottom{
            margin-bottom: 20px;
        }
        .paymentmethod-alt{                     
            margin: 10px auto;            
            background-color: ${colors.white};            
            padding: 20px 80px;
            border-radius: 5px;
            .paymenttitle{                
                margin-bottom: 15px;
            }
            .paymenttitle, .paymentitem .MuiFormControlLabel-label{
                font-family: 'Jost' !important;
            }
        }       
    }
    
    .buyinfo--third{
        
        position: relative;
        
        .backbutton{
            position: absolute;
            top: 50px;
        }
        
        .table{
            margin: 0 auto;
            width: fit-content;
            
            .table__action{
                display: flex;
                align-items: center;
                justify-content: space-between;
                
                a{
                    display: flex;
                    align-items: center;
                    font-size: 1.2rem;
                    color: ${colors.darkred};
                    text-decoration: none;
                }
            }
        }
    }
    .number{
        font-family: 'Aclonica', sans-serif;
        color: ${colors.goldish};
        border-radius: 50%;
        width: ${numCircle};
        height: ${numCircle};
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${colors.goldish};
        span{
            font-size: calc(${numCircle}/1.4)
        }
        margin: 0 auto;
        
    }
    
    .buyinfo--edit{
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        background-color: white;
        width: fit-content;
        margin: 40px auto;    
        padding-bottom: 20px;    
    }
    .editaction{
        margin: 0 auto;
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
`;

export const NumRangeContainer = styled(motion.div)`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => `${props.size}px` || numrangeDim};
    height: calc(${props => `${props.size}px` || numrangeDim} /3);
    
    button{
        border: 0;
        outline: 0;
        cursor: pointer;
        width: 33%;
        height: 100%;
    }
    span{
        font-size: calc(${props => `${props.size}px` || numrangeDim} / 4.7);
        width: 33%;
        height: 100%;
        text-align: center;
        margin: auto 0;
    }
`
export const CardButton = styled(Button)`
    margin: 0 0 0 45px;
    width: fit-content;
    display:flex;
    align-items: center;
    .MuiSvgIcon-root{
        margin-left: 5px;
    }
`

export const BackButton = styled(Button)`    
    border: 2px solid ${props => props.variant || colors.lightgray};
    background: ${props => props.variant || colors.lightgray};
    margin: 0 0 0 80px;
    width: fit-content;
    display:flex;
    align-items: center;
    .MuiSvgIcon-root{
        margin-left: 5px;
    }
`
export const NextButton = styled(BackButton)`        
    margin:0 !important;    
        
`


export const PayButton = styled(NextButton)`                   
    padding: 0.2rem 1.4rem;
    background: ${colors.lightred};    
    border: 2px solid ${colors.lightred};
    margin: 5px auto !important;
`

export const EditButton = styled(NextButton)`                   
    padding: 0.2rem 1.4rem;
    background: ${colors.goldish};    
    border: 2px solid ${colors.goldish};
    margin: 5px auto !important;
    
`


export const CardMoreContainer = styled(HomeAltCardContainer)`
    padding: 0 80px 10px 80px !important;   
`

export const ServicesContainer = styled(HomeAltCardContainer)`
    padding: 40px 80px 10px 80px !important;   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    grid-gap: 40px;
`

export const ServiceTypeContainer = styled(HomeAltCardContainer)`
    padding: 40px 80px 10px 80px !important;   
    display: grid;    
    place-items: center;
    
`

export const ServicesCard = styled(CardContainer)` 
    max-width: 100%;
    text-align: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: ${props =>
        props.variant === 'lightish' ? colors.white
            : null
    };
    
    color: ${props =>
        props.variant === 'lightish' ? colors.darktext
            : null
    };
                    
   .icondiv{
       width: fit-content;       
       margin: 0 auto;
       i{
        font-size: 3rem;              
    }
   }        
    p{
        text-align: center;
        a{
            font-weight: bold;
            color: ${colors.darkred};
            border-bottom: 1px solid ${colors.dimwhite}
        }
    }   
`

export const ServicePanel = styled(ServicesCard)`
    width: 70%;
    ${'' /* align-items: flex-start; */}
    display: block;
    p, span, a{
        margin-top: 0px;
    }
    p{
        text-align: left;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 0.75rem;
    }
    .MuiFormControl-root{
        margin-top: 15px;
    }
    textarea{
        padding: 10px;
        border: 1px solid ${colors.midtext};
        border-radius: 10px;
    }
    
    .choices{
        display: grid;        
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;                
        place-items: center;
        margin: 20px 0;
        .choiceitem{       
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);     
            border-radius: 10px;
            h3{
                padding: 10px;
                border-radius: 10px;
                font-family: "Aclonica", sans-serif;
                background-color: ${colors.dimwhite};                
            }
            .content{
                padding: 10px 20px 15px 10px;
            }
        }
    }
    
    .topmainitem{
        display: flex;        
        justify-content: space-between;        
        
        div{            
            i{
                color: ${colors.darkred};
                font-size: 1.5rem;
            }            
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
        }
    }
    .numrange--services{
        
        div{          
           margin-left: 0;            
        }
        .label{            
            text-align: left;
        }
        margin: 20px 0;
    }
    
    .filesection{
        margin-bottom: 50px;
    }
    .paymentinfo{
        display: grid;
        place-items: center;
        div{
            margin: 0 auto;
            
        }
        
    }
`
export const ListFeatureElement = styled.div`
    margin: 20px 0;
    padding: 0 10px;
    border: 1px solid ${colors.background}
`
export const NoMarginBackButton = styled(NextButton)`
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const ButtonSingle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`