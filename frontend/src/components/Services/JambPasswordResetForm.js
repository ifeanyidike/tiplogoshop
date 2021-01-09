import React, {useState} from 'react'
import {ButtonSingle, NextButton} from "../../styles/ServiceStyle"
import {colors} from "../../styles/breakpoints"
import { makeStyles } from '@material-ui/core/styles';
import {Input, FormControl, IconButton} from '@material-ui/core'
import {InputLabel, InputAdornment} from '@material-ui/core'
import {Person as PersonIcon} from '@material-ui/icons'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CurrencyFormat from 'react-currency-format';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  DatePicker 
} from '@material-ui/pickers';
import MessageModal from "../Utils/MessageModal"

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
    name, 
    setName,
    email, 
    setEmail,
    dateOfBirth,
    setDateOfBirth,
    password, 
    setPassword,       
    activeStep,
    setActiveStep,    
}) => {
const classes = useStyles();
const [num, setNum] = useState(1)
const [confirmPassword, setConfirmPassword] = useState("")
const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)
const [passwordMismatch, setPasswordMismatch] = useState(false)

const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
const onSubmit = e => {
    e.preventDefault()
    if(password !== confirmPassword){
        setPasswordMismatch(true)
        return
    }
    setActiveStep(activeStep + 1)
}

const handleDateChange = (date) =>{
    setDateOfBirth(date)
}

  return (
      <div>
        
        <div className="topmainitem">
            <div>
                <i className="fas fa-tags"></i>
                <CurrencyFormat 
                    value={2456981} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'₦'} 
                    renderText={value => <h3>{value}</h3>} />
            </div>
        </div>
        <form onSubmit={onSubmit} >                                                
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-name">Full Name</InputLabel>
                    <Input
                        id="standard-adornment-name"
                        value={name}
                        required
                        onChange={(e)=> setName(e.target.value)}
                        startAdornment={<InputAdornment position="start"><PersonIcon /> </InputAdornment>}
                    />
                </FormControl>
                                
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                    <Input
                        id="standard-adornment-email"
                        value={email}
                        required
                        type="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        startAdornment={<InputAdornment position="start"><AlternateEmailIcon /> </InputAdornment>}
                        />
                </FormControl>                                
                
                <FormControl fullWidth className={classes.formControl}>                
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Choose Your Date of Birth"
                            format="DD/MM/YYYY"
                            value={dateOfBirth}
                            onChange={handleDateChange}
                            InputProps={{
                                startAdornment:
                                <InputAdornment position="start">
                                    <EventNoteIcon />
                                </InputAdornment>
                            
                            }}
                    /> 
                    
                       
                    </MuiPickersUtilsProvider> 
                                                      
                </FormControl>
                
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        value={password}
                        required
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=> setPassword(e.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                    <VpnKeyIcon />
                            </InputAdornment>
                        }
                        endAdornment = {
                            <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=> setShowPassword(!showPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                            </InputAdornment>
                        }
                        />
                </FormControl>
                
                <FormControl fullWidth className={classes.formControl}>
                    <InputLabel htmlFor="standard-adornment-amount">Confirm Password</InputLabel>
                    <Input
                        id="standard-adornment-confirm-password"
                        value={confirmPassword}
                        required
                        type={showConfirmPassword ? 'text' : 'password'}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        startAdornment={
                            <InputAdornment position="start">
                                    <VpnKeyIcon />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                
                
            <ButtonSingle>
                <NextButton
                    variant = {colors.darkblue}                     
                    type="submit" >Next <NavigateNextIcon />
                </NextButton>
            </ButtonSingle>
            
        </form>   
        
        <MessageModal 
            open={passwordMismatch}
            setOpen={setPasswordMismatch}
            caption="Mismatched Passwords" 
            message = "Your password confirmation do not match"
                         
        />                              

      </div>
    )
}

export default CourseChangeForm
