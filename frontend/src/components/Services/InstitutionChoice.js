import React from 'react'
import {Input, NativeSelect, FormControl, FormHelperText} from '@material-ui/core'
import {TextareaAutosize, InputLabel, InputAdornment} from '@material-ui/core'
import {TextField, MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {LockOpen as LockOpenIcon, Message as MessageIcon} from '@material-ui/icons'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
      width: '100%'
    },        
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
  

const InstitutionChoice = ({stage, programme, setProgramme, 
        institution, setInstitution,
        course, setCourse, required}) => {
    const classes = useStyles();
    console.log(stage, required)
    
    console.log(programme)
    console.log(stage, programme.[stage])
    return (
        <div className="content">
            <FormControl fullWidth className={classes.formControl}>                                
                <TextField
                    select
                    required={required}
                    label="Programme Programme"
                        value={programme.[stage]}
                        onChange={(e)=> setProgramme({...programme, [stage]: e.target.value})}
                        SelectProps={{
                            native: true
                        }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><LoyaltyIcon /> </InputAdornment>    
                        }}                               
                        helperText="Please select preferred programme"                     
                    >
                        <>
                            <option value="" >
                                
                            </option>
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </>
                </TextField>
            </FormControl>
                        
            <FormControl fullWidth className={classes.formControl}>                                
                <TextField
                    select
                    required={required}
                    value={institution.[stage]}                                    
                    label="Institution"
                    onChange={(e)=> setInstitution({...institution, [stage]: e.target.value})}
                    SelectProps={{
                        native: true
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SchoolIcon /> </InputAdornment>
                    }}
                    helperText="Please select institution"                
                >
                    <>
                        <option value="" >
                            
                        </option>
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </>
                </TextField>
            </FormControl>
                        
            <FormControl fullWidth className={classes.formControl}>                                
                <TextField                
                    select
                    required={required}
                    label="Courses"
                    value={course.[stage]}
                    onChange={(e)=> setCourse({...course, [stage]: e.target.value})}
                    SelectProps={{
                        native: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MenuBookIcon /> </InputAdornment>
                    }}
                    helperText="Please select course"                
                >
                    <>
                        <option value="" >
                            
                        </option>
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}                    
                    </>
                </TextField>
            </FormControl>
        </div>
    )
}

export default InstitutionChoice
