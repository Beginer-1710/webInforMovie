import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import RegisterForm from '../RegisterForm'
import { useDispatch } from 'react-redux';
import {register} from '../userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
Register.propTypes = {
    
};

function Register(props) {
    const {onCloseMenuLogin} = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (value) => {
        try {
            value.username = value.email;
            console.log("newValue" , value);
            const action = register(value);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log(user, "hahahah");
            enqueueSnackbar("Đăng ký thành công!!!",{variant:"success"})
            onCloseMenuLogin();
        } catch (error) {
            console.log("false to register");
            enqueueSnackbar("Đăng ký thất bại!!!",{variant:"error"})
        }
    }
    return (
        <RegisterForm onSubmit={handleSubmit}/>
    );
}

export default Register;