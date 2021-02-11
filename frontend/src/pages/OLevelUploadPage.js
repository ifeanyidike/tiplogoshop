import React, { useState, useEffect } from 'react'
import BaseRoot from "../components/Services/BaseRoot"
import { ServiceTypeContainer, ServicePanel } from "../styles/ServiceStyle"
import { firstCardContainerVariants } from '../animationVariants/CardVariants'
import OLevelUploadForm from "../components/Services/OLevelUploadForm"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import OLevelUploadReview from '../components/Services/OLevelUploadReview'
import ServicePayment from '../components/Services/ServicePayment'
import { useDispatch, useSelector } from "react-redux"
import { WALLET_DEBIT_RESET } from '../redux/constants/userConstants'
import { OLEVEL_UPLOAD_CREATE_RESET } from '../redux/constants/oLevelResultUploadConstants'
import { JAMB_PASSWORD_RESET_CREATE_RESET } from '../redux/constants/jambPasswordResetConstants'
import { COCI_CREATE_RESET } from '../redux/constants/changeOfCourseConstants'
import NotLoggedIn from "../components/Utils/NotLoggedIn"
import Meta from "../components/Meta"
import { animateScroll as scroll } from 'react-scroll'


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
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    useEffect(() => {
        dispatch({ type: WALLET_DEBIT_RESET })
        dispatch({ type: OLEVEL_UPLOAD_CREATE_RESET })
        dispatch({ type: JAMB_PASSWORD_RESET_CREATE_RESET })
        dispatch({ type: COCI_CREATE_RESET })

    }, [dispatch])

    const resultUploadOrder = () => {

        return {
            transactionType: 'olevelresultupload',

            orderItems: {
                type,
                name,
                profileCode,
                files: upload.files,
            }
        }
    }

    return (
        <BaseRoot topText="Services">
            <Meta />
            {
                !userInfo ?
                    <NotLoggedIn />
                    :

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
                                        setProfileCode={setProfileCode}
                                        upload={upload}
                                        setUpload={setUpload}
                                        activeStep={activeStep}
                                        setActiveStep={setActiveStep}
                                    />
                                    :
                                    activeStep === 1 ?
                                        <OLevelUploadReview
                                            type={type}
                                            name={name}
                                            profileCode={profileCode}
                                            upload={upload}
                                            activeStep={activeStep}
                                            setActiveStep={setActiveStep}
                                        />
                                        :
                                        activeStep === 2 ?
                                            <ServicePayment
                                                activeStep={activeStep}
                                                setActiveStep={setActiveStep}
                                                serviceOrder={resultUploadOrder}
                                            />

                                            :
                                            null
                            }

                        </ServicePanel>
                    </ServiceTypeContainer>
            }
        </BaseRoot>
    )
}

export default ChangeOfCourseInstitution
