import React from 'react'
import {BaseContainer} from "../../styles/ServiceStyle.js"
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, InputAdornment} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import InputGroup from "../InputGroup"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Base = () => {
    const classes = useStyles();
    return (
        <BaseContainer>
            <h1>Buy NECO Result Token</h1>
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>                    
                    <InputLabel htmlFor="uncontrolled-native">Card Type</InputLabel>
                    <NativeSelect
                        defaultValue={30}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                        <FormHelperText>Choose the type of card to purchase</FormHelperText>
                </FormControl>
            </Grid>
            <InputGroup />  
            
            
        </BaseContainer>
    )
}

export default Base
