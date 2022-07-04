import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from "react-hook-form";

import './style.css'
InputPasswordField.propTypes = {
    
};

function InputPasswordField(props) {
    const {name , form , label} = props;
    const {formState : {errors}} = form;
    const isError = errors[name];
    const [showPassword, setShowPassword] = useState(false);
    
     
      const handleClickShowPassword = () => {
        setShowPassword(x => !x);
      };
    
    return (
        <div className='passField'>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" error={!!isError} margin={"none"}>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({ field }) => (
                    <OutlinedInput
                    {...field}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label={label}
                />
            )} 
            />
             <FormHelperText id="my-helper-text">{errors[name]?.message}.</FormHelperText>
            </FormControl>
        </div>
    );
}

export default InputPasswordField;