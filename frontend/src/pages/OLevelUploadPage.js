import React, {useState} from 'react'
import BaseRoot from "../components/Services/BaseRoot"
import {ServiceTypeContainer, ServicePanel} from "../styles/ServiceStyle"
import { firstCardContainerVariants} from '../animationVariants/CardVariants'
import OLevelUploadForm from "../components/Services/OLevelUploadForm"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import OLevelUploadReview from '../components/Services/OLevelUploadReview'
import ServicePayment from '../components/Services/ServicePayment'

const useStyles = makeStyles((theme) => ({   
    stepper: {
        padding: theme.spacing(3, 0, 5),
      },
  }));
  
const steps = ['Form Entry', 'Review your order', 'Payment'];                

const ChangeOfCourseInstitution = () => {    
    const classes = useStyles();
    const [type, setType] = useState("WAEC")
    const [name, setName] = useState("")    
    const [profileCode, setProfileCode] = useState("")    
    const [upload, setUpload] = useState({
        open: false,
        files: []
    })
  
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
                        <OLevelUploadForm
                            type={type}
                            setType={setType}
                            name={name}
                            setName={setName}
                            profileCode={profileCode}
                            setProfileCode = {setProfileCode}
                            upload = {upload}
                            setUpload = {setUpload}
                            activeStep = {activeStep}    
                            setActiveStep = {setActiveStep}
                        />  
                        :
                        activeStep === 1 ?
                        <OLevelUploadReview
                            type = {type}
                            name = {name}
                            profileCode = {profileCode}
                            upload = {upload}                            
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

export default ChangeOfCourseInstitution
