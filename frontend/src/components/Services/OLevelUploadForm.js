import React, {useState} from 'react'
import {ButtonSingle, NextButton, NumRangeContainer} from "../../styles/ServiceStyle"
import {colors} from "../../styles/breakpoints"
import { makeStyles } from '@material-ui/core/styles';
import {Input, NativeSelect, FormControl, FormHelperText} from '@material-ui/core'
import {InputLabel, InputAdornment} from '@material-ui/core'
import {Person as PersonIcon, TrendingFlat as TrendingFlatIcon} from '@material-ui/icons'
import {Code as CodeIcon, Remove as RemoveIcon} from '@material-ui/icons'
import {Add as AddIcon} from '@material-ui/icons'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Fab from '@material-ui/core/Fab';
import CurrencyFormat from 'react-currency-format';
import {DropzoneDialog} from 'material-ui-dropzone'
import NavigationIcon from '@material-ui/icons/Navigation';
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


const OLevelUploadForm = ({
    type, 
    setType,
    name, 
    setName,
    profileCode,
    setProfileCode,
    upload, 
    setUpload,    
    activeStep,
    setActiveStep,    
}) => {
const classes = useStyles();
const [num, setNum] = useState(1)
const [noFiles, setNoFiles] = useState(false)

const onSubmit = e => {
    e.preventDefault()
    if(upload.files.length === 0){
        setNoFiles(true)
        return
    }
    setActiveStep(activeStep + 1)
    
}

const handleNumIncrement = (e) =>{
    e.preventDefault()
    const newNum = num === 2 ? num : num + 1
    setNum(newNum)    
}

const handleNumDecrement = (e) =>{
    e.preventDefault()
    const newNum = num === 1 ? num : num - 1        
    setNum(newNum)    
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
            <FormControl className={classes.formControl}>
                <NativeSelect  
                    fullWidth   
                        required                   
                            className={classes.selectEmpty}
                            value={type}                        
                            onChange={(e) => setType(e.target.value) }
                            inputProps={{ 'aria-label': 'type' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <TrendingFlatIcon />
                                </InputAdornment>}
                            >                            
                                <option value="WAEC">WAEC</option>
                                <option value="NECO">NECO</option>                        
                    </NativeSelect>
                    <FormHelperText>Select Type</FormHelperText>
                </FormControl>
                
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
                    <InputLabel htmlFor="standard-adornment-amount">ProfileCode</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={profileCode}
                        required
                        onChange={(e)=> setProfileCode(e.target.value)}
                        startAdornment={<InputAdornment position="start"><CodeIcon /> </InputAdornment>}
                        />
                </FormControl>
                
                <div className="numrange--services">
                    <div className="label">
                        Number of Sittings
                    </div>
                    <NumRangeContainer size={150} >
                        <button onClick={handleNumDecrement}>
                            <RemoveIcon />
                        </button>
                        <span>{num}</span>
                        <button onClick={handleNumIncrement}>
                            <AddIcon />
                        </button>
                    </NumRangeContainer>
                </div>
            
                <div className="filesection">
                    <Fab
                        onClick={() => setUpload({...upload, open: true})} 
                        variant="extended">
                        <NavigationIcon className={classes.extendedIcon} />
                        Add File{num === 2 ? 's' : ''}
                    </Fab>                                                        
                             
                    <DropzoneDialog
                        open={upload.open}
                        filesLimit = {num}
                        required
                        clearOnUnmount = {false}
                        onChange={(files) => console.log('Files:', files)}
                        onSave={(files) => setUpload({files: files, open: false})}
                        submitButtonText={` Add File${num === 2 ? 's' : ''}`}
                        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', 'text/plain']}
                        showPreviews={true}
                        maxFileSize={5000000}
                        onClose={() => setUpload({...upload, open: false})}
                    />
                </div>
                
            <ButtonSingle>
                <NextButton
                    variant = {colors.darkblue}                     
                    type="submit" >Next <NavigateNextIcon />
                </NextButton>
            </ButtonSingle>
            
        </form>                                
        <MessageModal 
            open={noFiles}
            setOpen={setNoFiles}
            caption="Files Empty" 
            message = "You need to add at least one file to proceed."
                         
        />
      </div>
    )
}

export default OLevelUploadForm
