import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import InputField from '../../../Components/Inputs/InputField';
import InputPasswordField from '../../../Components/Inputs/InputPasswordField';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


function LoginForm(props) {
    const {onSubmit} = props;

    const schema = yup.object({
        identifier: yup.string().required("Tên tài khoản là bắt buộc").email("Email của bạn không hợp lệ"),
        password :yup.string().required("Password là bắt buộc").min(12,'Pass phải có tối thiểu 12 kí tự'),
      })

    const form = useForm({
        defaultValues : {
            identifier : "",
            password : ""
        },
        resolver: yupResolver(schema)

    })


    const handleSubmit = (value) => {
        if(onSubmit)
        {
            onSubmit(value)
        }
    }

    const {isSubmitting} = form.formState;
    return (
        <div className='loginForm'>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon className='LockIcon'/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="identifier" form={form} label="Your account name"/>
            <InputPasswordField name="password" form={form} label="Your password" />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
                >
                Sign In
                </Button>
          </form>
        </div>
    );
}

export default LoginForm;