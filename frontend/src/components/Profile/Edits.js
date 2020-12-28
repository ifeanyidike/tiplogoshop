import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import PersonIcon from '@material-ui/icons/Person';
import DraftsIcon from '@material-ui/icons/Drafts';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import {IconButton}  from "@material-ui/core"
import {useSelector} from "react-redux"
import {ProfileButton} from "../../styles/ProfileStyle"


const Edits = ({values, setValues}) => {
    
    const {userInfo} = useSelector(state => state.userLogin)
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div className="contentpane">
                <h2>Basic Info</h2>
                    <FormControl fullWidth  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.name}
                            placeholder={userInfo.name}
                            onChange={handleChange('name')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonIcon />
                                    </InputAdornment>
                                }
                            labelWidth={45}
                        />
                        </FormControl>                            
                                                    
                        <FormControl fullWidth  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.email}
                                disabled
                                placeholder={userInfo.email}                                        
                                startAdornment={
                                    <InputAdornment position="start">
                                    <DraftsIcon />
                                    </InputAdornment>
                                }
                                labelWidth={45}
                            />
                        </FormControl>   
                    </div>
                    <div className="contentpane">
                        <h2>Additional Info</h2>
                        <FormControl fullWidth  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Phone No.</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.phoneNo}
                                placeholder={userInfo.profile && userInfo.profile.phoneNo}
                                onChange={handleChange('phoneNo')}
                                startAdornment={
                                    <InputAdornment position="start">
                                    <PhoneIcon />
                                    </InputAdornment>
                                }
                                labelWidth={75}
                            />
                        </FormControl>   
                            
                        <FormControl fullWidth  variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.address}
                                placeholder={userInfo.profile && userInfo.profile.address}
                                onChange={handleChange('address')}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <BusinessIcon />
                                        </InputAdornment>
                                    }
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
                        
                    <div className="contentpane">
                        <h2>Password</h2>
                            
                        <FormControl  fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>                              
                                                        
                        <FormControl  fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Confirm Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownConfirmPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={135}
                            />
                        </FormControl>                              
                    </div>
                    <div className="submit">
                        <ProfileButton>Submit</ProfileButton>
                    </div>
               
        </>
    )
}

export default Edits
