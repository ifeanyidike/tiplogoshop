import React, {useState, useEffect} from 'react'
import {Grid, TextField, IconButton, InputAdornment} from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';

import { useHistory, useLocation, Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {forgotPassword} from "../redux/actions/userActions"
import Header from "../components/MainHeader"
import {ResetButton, PasswordResetContainer} from "../styles/AuthStyle"
import Loader from "../components/Loaders/SimpleLoader"

const ForgotPassword = () => {
   
    const location = useLocation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')                     
    
    const {loading, error, success, result} = useSelector(state => state.passwordForgot)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(forgotPassword(email))
        
    }
    
    return (
        <div>            
            <Header />
            <PasswordResetContainer>                
                <form className="content" onSubmit={handleSubmit}>
                    <div className="message">
                        {
                            loading ? <Loader />
                            : error ? error
                            : result && result.message
                        }
                    </div>
                    <h2>Please Enter Your Email</h2>                    
        
                    <Grid item xs={12}>
                        <TextField
                            required                
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            fullWidth
                            autoComplete="off"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DraftsIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <ResetButton type="submit">Send Email</ResetButton>
                </form>
            </PasswordResetContainer>
        </div>
    )
}

export default ForgotPassword
