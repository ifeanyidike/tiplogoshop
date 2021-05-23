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
    const [schoolAttended, setSchoolAttended] = useState("")
    const [schoolType, setSchoolType] = useState("PUBLIC")

    const [firstEntry, setFirstEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [secondEntry, setSecondEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [thirdEntry, setThirdEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [fourthEntry, setFourthEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [fifthEntry, setFifthEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [sixthEntry, setSixthEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [seventhEntry, setSeventhEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [eighthEntry, setEighthEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })
    const [ninethEntry, setNinethEntry] = useState({
        subject: 'English Language',
        grade: '',
        examNumber: '',
        examType: ''
    })

    const manualEntries = {
        first: firstEntry,
        second: secondEntry,
        third: thirdEntry,
        fourth: fourthEntry,
        fifth: fifthEntry,
        sixth: sixthEntry,
        seventh: seventhEntry,
        eighth: eighthEntry,
        nineth: ninethEntry
    }

    const setManualEntries = {
        first: setFirstEntry,
        second: setSecondEntry,
        third: setThirdEntry,
        fourth: setFourthEntry,
        fifth: setFifthEntry,
        sixth: setSixthEntry,
        seventh: setSeventhEntry,
        eighth: setEighthEntry,
        nineth: setNinethEntry
    }

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
        const subjectUpload = []
        if (manualEntries.first.grade || manualEntries.first.examNumber || manualEntries.first.examType) {
            subjectUpload.push(manualEntries.first)
        } else if (manualEntries.second.grade || manualEntries.second.examNumber || manualEntries.second.examType) {
            subjectUpload.push(manualEntries.second)
        } else if (manualEntries.third.grade || manualEntries.third.examNumber || manualEntries.third.examType) {
            subjectUpload.push(manualEntries.third)
        } else if (manualEntries.fourth.grade || manualEntries.fourth.examNumber || manualEntries.fourth.examType) {
            subjectUpload.push(manualEntries.fourth)
        } else if (manualEntries.fifth.grade || manualEntries.fifth.examNumber || manualEntries.fifth.examType) {
            subjectUpload.push(manualEntries.fifth)
        } else if (manualEntries.sixth.grade || manualEntries.sixth.examNumber || manualEntries.sixth.examType) {
            subjectUpload.push(manualEntries.sixth)
        } else if (manualEntries.seventh.grade || manualEntries.seventh.examNumber || manualEntries.seventh.examType) {
            subjectUpload.push(manualEntries.seventh)
        } else if (manualEntries.eighth.grade || manualEntries.eighth.examNumber || manualEntries.eighth.examType) {
            subjectUpload.push(manualEntries.eighth)
        } else if (manualEntries.nineth.grade || manualEntries.nineth.examNumber || manualEntries.nineth.examType) {
            subjectUpload.push(manualEntries.nineth)
        }

        return {
            transactionType: 'olevelresultupload',

            orderItems: {
                type,
                name,
                profileCode,
                schoolAttended,
                schoolType,
                files: upload.files,
                subjectUpload
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
                                        entries={manualEntries}
                                        setEntries={setManualEntries}
                                        activeStep={activeStep}
                                        setActiveStep={setActiveStep}
                                        schoolAttended={schoolAttended}
                                        setSchoolAttended={setSchoolAttended}
                                        schoolType={schoolType}
                                        setSchoolType={setSchoolType}
                                    />
                                    :
                                    activeStep === 1 ?
                                        <OLevelUploadReview
                                            type={type}
                                            name={name}
                                            profileCode={profileCode}
                                            upload={upload}
                                            entries={manualEntries}
                                            schoolAttended={schoolAttended}
                                            schoolType={schoolType}
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
