import React, { useState, useEffect } from 'react'
import { ButtonSingle, NextButton } from "../../styles/ServiceStyle"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Input, NativeSelect, FormControl, FormHelperText } from '@material-ui/core'
import { TextareaAutosize, InputLabel, InputAdornment } from '@material-ui/core'
import { Person as PersonIcon, TrendingFlat as TrendingFlatIcon } from '@material-ui/icons'
import { ExitToApp as ExitToAppIcon, Code as CodeIcon } from '@material-ui/icons'
import { LockOpen as LockOpenIcon, Message as MessageIcon } from '@material-ui/icons'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InstitutionChoices from "./InstitutionChoices"
import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from "react-redux"
import { listServiceByName } from "../../redux/actions/serviceActions"
import { WALLET_DEBIT_RESET } from '../../redux/constants/userConstants'
import ServiceAlert from './ServiceAlert';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));


const CourseChangeForm = ({
    type,
    setType,
    name,
    setName,
    profileCode,
    setProfileCode,
    OTP,
    setOTP,
    regNo,
    setRegNo,
    programme,
    setProgramme,
    institution,
    setInstitution,
    course,
    setCourse,
    activeStep,
    setActiveStep,
    moreInfo,
    setMoreInfo
}) => {
    const classes = useStyles();
    const [toggleType, setToggleType] = useState(type === 'UTME' ? true : type === 'DE' ? false : true)
    const [OTPStatus, setOTPStatus] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const name = 'jamb change of course and institution'

        dispatch(listServiceByName(name))
        dispatch({ type: WALLET_DEBIT_RESET })
    }, [dispatch])

    const { service } = useSelector(state => state.serviceByName)


    const handleTypeChange = (e) => {
        const val = e.target.value
        setType(val)
        if (val === 'UTME') {
            setToggleType(true)
        } else {
            setToggleType(false)
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        setActiveStep(activeStep + 1)
    }

    return (
        <div>
            <ServiceAlert />
            <div className="topmainitem">
                <div>
                    <i className="fas fa-tags"></i>
                    <CurrencyFormat
                        value={service && service.cost}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₦'}
                        renderText={value => <h3>{value}</h3>} />
                </div>
                <div>
                    <FormControlLabel
                        label="Check if you have OTP"
                        control={
                            <Checkbox
                                checked={OTPStatus}
                                onChange={(e) => setOTPStatus(e.target.checked)}
                                color="secondary"
                            />
                        }
                    />
                </div>
            </div>
            <form onSubmit={onSubmit} style={{ display: OTPStatus ? 'block' : 'none' }}>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        fullWidth
                        required
                        className={classes.selectEmpty}
                        value={type}
                        onChange={handleTypeChange}
                        inputProps={{ 'aria-label': 'type' }}
                        startAdornment={
                            <InputAdornment position="start">
                                <TrendingFlatIcon />
                            </InputAdornment>}
                    >
                        <option value="UTME">UTME</option>
                        <option value="DE">Direct Entry</option>
                    </NativeSelect>
                    <FormHelperText>Select Type</FormHelperText>
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
                    <Input
                        id="standard-adornment-name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        startAdornment={<InputAdornment position="start"><PersonIcon /> </InputAdornment>}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Jamb Registration Number</InputLabel>
                    <Input
                        id="standard-adornment-regNo"
                        value={regNo}
                        required
                        onChange={(e) => setRegNo(e.target.value)}
                        startAdornment={<InputAdornment position="start"><ExitToAppIcon /> </InputAdornment>}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">ProfileCode</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={profileCode}
                        required
                        onChange={(e) => setProfileCode(e.target.value)}
                        startAdornment={<InputAdornment position="start"><CodeIcon /> </InputAdornment>}
                    />
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">OTP</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={OTP}
                        required
                        onChange={(e) => setOTP(e.target.value)}
                        startAdornment={<InputAdornment position="start"><LockOpenIcon /> </InputAdornment>}
                    />
                </FormControl>

                <div className="choices">
                    <div className="choiceitem">
                        <h3>1st Choice</h3>
                        <InstitutionChoices
                            programme={programme}
                            setProgramme={setProgramme}
                            institution={institution}
                            setInstitution={setInstitution}
                            course={course}
                            setCourse={setCourse}
                            stage="first"
                            required={true}
                        />
                    </div>
                    <div className="choiceitem">
                        <h3>2st Choice</h3>
                        <InstitutionChoices
                            programme={programme}
                            setProgramme={setProgramme}
                            institution={institution}
                            setInstitution={setInstitution}
                            course={course}
                            setCourse={setCourse}
                            stage="second"
                            required={true}
                        />
                    </div>
                    <div className="choiceitem" style={{ display: toggleType ? 'block' : 'none' }}>
                        <h3>3rd Choice</h3>
                        <InstitutionChoices
                            programme={programme}
                            setProgramme={setProgramme}
                            institution={institution}
                            setInstitution={setInstitution}
                            course={course}
                            setCourse={setCourse}
                            stage="third"
                            required={toggleType}
                        />
                    </div>
                    <div className="choiceitem" style={{ display: toggleType ? 'block' : 'none' }}>
                        <h3>4th Choice</h3>
                        <InstitutionChoices
                            programme={programme}
                            setProgramme={setProgramme}
                            institution={institution}
                            setInstitution={setInstitution}
                            course={course}
                            setCourse={setCourse}
                            stage="fourth"
                            required={toggleType}
                        />
                    </div>
                </div>
                <FormControl className={classes.formControl}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        onChange={e => setMoreInfo(e.target.value)}
                        value={moreInfo}
                        rowsMin={5}
                        startAdornment={<InputAdornment position="start"><MessageIcon /> </InputAdornment>}
                        placeholder="Additional Information (Optional)" />
                </FormControl>
                <ButtonSingle>
                    <NextButton
                        type="submit" >Next <NavigateNextIcon />
                    </NextButton>
                </ButtonSingle>

            </form>

        </div>
    )
}

export default CourseChangeForm
