import React, {useState} from 'react'
import Wallet from "../Utils/Wallet"
import {ButtonGroup, NextButton, NoMarginBackButton} from "../../styles/ServiceStyle"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PaymentMethods from "../Payment/PaymentMethods"
import {colors} from "../../styles/breakpoints"

const ServicePayment = ({
    activeStep,
    setActiveStep
}) => {
    const [paymentMethod, setPaymentMethod] = useState('PayStack')
    
  return (
    <div>
        <Wallet  width={300} />
    
        <PaymentMethods 
            value = {paymentMethod}
            setValue = {setPaymentMethod}
        />
    
        <ButtonGroup>
            <NoMarginBackButton 
                variant={colors.darkred}
                onClick={() => setActiveStep(activeStep - 1)}>
                <NavigateBeforeIcon /> Previous
            </NoMarginBackButton>
            <NextButton 
                variant={colors.darkblue}
            >
                 Pay <NavigateNextIcon/>
            </NextButton>
        </ButtonGroup>
    </div>
  )
}

export default ServicePayment
