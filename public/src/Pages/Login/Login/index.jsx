
import './style.css'
import { useDispatch } from 'react-redux'
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
            enqueueSnackbar("Đăng nhập thành công!!!",{variant:"success"})
            onCloseMenuLogin();
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Đăng nhập thất bại!!!",{variant:"error"})
        }
    }
    return (
        <div className='login-container'>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;