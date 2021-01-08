import React, {useState} from 'react'
import BaseRoot from "../components/Services/BaseRoot"
import {ServiceTypeContainer, ServicePanel} from "../styles/ServiceStyle"
import { firstCardContainerVariants} from '../animationVariants/CardVariants'
import CourseChangeForm from "../components/Services/CourseChangeForm"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CourseChangeReview from '../components/Services/CourseChangeReview'
import ServicePayment from '../components/Services/ServicePayment'

const useStyles = makeStyles((theme) => ({   
    stepper: {
        padding: theme.spacing(3, 0, 5),
      },
  }));
  
const steps = ['Form Entry', 'Review your order', 'Payment'];                

const ChangeOfCourseInstitution = () => {    
    const classes = useStyles();
    const [type, setType] = useState("UTME")
    const [name, setName] = useState("")
    const [regNo, setRegNo] = useState("")
    const [profileCode, setProfileCode] = useState("")
    const [OTP, setOTP] = useState("")   
    const [activeStep, setActiveStep] = useState(0);
    const [moreInfo, setMoreInfo] = useState("");
    
    const [programme, setProgramme] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    })
    
    const [institution, setInstitution] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    })        
    
    const [course, setCourse] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    })
    
    
    
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
                        <CourseChangeForm 
                            type = {type}
                            setType = {setType}
                            regNo = {regNo}
                            setRegNo = {setRegNo}
                            OTP = {OTP}
                            setOTP = {setOTP}
                            profileCode = {profileCode}
                            setProfileCode = {setProfileCode}
                            name = {name}
                            setName = {setName}
                            programme = {programme}
                            setProgramme = {setProgramme}
                            institution = {institution}
                            setInstitution = {setInstitution}
                            course = {course}
                            setCourse = {setCourse}   
                            activeStep = {activeStep}    
                            setActiveStep = {setActiveStep}    
                            moreInfo = {moreInfo}         
                            setMoreInfo = {setMoreInfo}
                        />       
                        :
                        activeStep === 1 ?
                        <CourseChangeReview
                            type = {type}
                            name = {name}
                            profileCode = {profileCode}
                            OTP = {OTP}
                            regNo = {regNo}
                            programme = {programme}
                            institution = {institution}
                            course = {course}
                            moreInfo = {moreInfo} 
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
