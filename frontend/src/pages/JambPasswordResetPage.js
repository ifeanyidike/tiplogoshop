import React, {useState} from 'react'
import BaseRoot from "../components/Services/BaseRoot"
import {ServiceTypeContainer, ServicePanel} from "../styles/ServiceStyle"
import { firstCardContainerVariants} from '../animationVariants/CardVariants'
import JambPasswordResetForm from "../components/Services/JambPasswordResetForm"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import JambPasswordResetReview from '../components/Services/JambPasswordResetReview'
import ServicePayment from '../components/Services/ServicePayment'

const useStyles = makeStyles((theme) => ({   
    stepper: {
        padding: theme.spacing(3, 0, 5),
      },
  }));
  
const steps = ['Form Entry', 'Review your order', 'Payment'];                

const JambPasswordReset = () => {    
    const classes = useStyles();    
    const [name, setName] = useState("")    
    const [email, setEmail] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState(new Date())    
    const [password, setPassword] = useState("")    
  
    const [activeStep, setActiveStep] = useState(0);            
    
    console.log(activeStep)
    return (
    <BaseRoot topText="Services">                                     
        <ServiceTypeContainer>                           
            <ServicePanel  
                variants={firstCardContainerVariants}                           
                initial='initial'
                animate='animate'
                whileHover='onHover'
                variant="lightish"
            >
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {
                    activeStep === 0 ?
                        <JambPasswordResetForm                            
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail = {setEmail}
                            dateOfBirth = {dateOfBirth}
                            setDateOfBirth = {setDateOfBirth}
                            password = {password}
                            setPassword = {setPassword}                            
                            activeStep = {activeStep}    
                            setActiveStep = {setActiveStep}
                        />  
                        :
                        activeStep === 1 ?
                        <JambPasswordResetReview                            
                            name = {name}
                            email = {email}
                            dateOfBirth = {dateOfBirth}
                            password = {password}                            
                            activeStep = {activeStep}    
                            setActiveStep = {setActiveStep}
                        />            
                        : 
                        activeStep === 2 ?
                        <ServicePayment
                            activeStep = {activeStep}    
                            setActiveStep = {setActiveStep}
                        />
                        
                        :
                        null                    
                }                                
                    
            </ServicePanel>
        </ServiceTypeContainer>                                        
    </BaseRoot>
    )
}

export default JambPasswordReset