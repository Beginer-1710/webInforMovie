import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import { useSelector, useDispatch } from 'react-redux'
import {login} from '../userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import LoginForm from '../LoginForm';
import { useSnackbar } from 'notistack';

function Login(props) {
    const dispatch = useDispatch();
    const {onCloseMenuLogin} = props;
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (value) => {
        try {
            const action = login(value);
            const resultAction =  await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log(user, "hahahah");
            enqueueSnackbar("Đăng nhập thành công!!!",{variant:"success"})
            onCloseMenuLogin();
        } catch (error) {
            console.log("false to login");
            enqueueSnackbar("Đăng ký thất bại!!!",{variant:"error"})
        }
    }
    return (
        <div className='login-container'>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;