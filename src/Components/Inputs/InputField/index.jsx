import React from 'react';
import { Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
InputField.propTypes = {
    
};

function InputField(props) {
    const {name , form , label} = props;
    const {formState : {errors}} = form;
    const isError = errors[name];
    return (
        <Controller 
            control={form.control}
            name = {name}
            render={({ field }) => (
                <TextField 
                {...field}
                fullWidth
                margin={"none"}
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                label = {label}
                error = {!!isError}
                margin="normal"
                helperText = {errors[name]?.message}
                />
            )}

        />
    );
}

export default InputField;