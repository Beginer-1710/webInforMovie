import './style.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import InputField from '../../../Components/Inputs/InputField';
import InputPasswordField from '../../../Components/Inputs/InputPasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { handleCheckOnlyString, handleCheckPasswordHardEnough } from '../../../Common/globalFunction/schemeFunc';
RegisterForm.propTypes = {
    
};

function RegisterForm(props) {
    const {onSubmit} = props;

    const schema = yup.object({
        fullName: yup.string().required("Họ tên là bắt buộc").test("error syntax nameField","Tên chỉ có thể chứa kí tự !",handleCheckOnlyString),
        email: yup.string().required("Email là bắt buộc").email("Email của bạn không hợp lệ"),
        password :yup.string().required("Password là bắt buộc").min(12,'Pass phải có tối thiểu 12 kí tự').test("error syntax password field !","Mật khẩu cần có đủ kí tự thường, số và kí tự đặc biệt",handleCheckPasswordHardEnough),
        retypePassword : yup.string().required("Vui lòng nhập lại Password của bạn").oneOf([yup.ref('password')],"Password không trùng khớp"),
      })

    const form = useForm({
        defaultValues : {
            fullName : "",
            email : "",
            password : "",
            retypePassword: ""
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
        <div className='registerForm'>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" form={form} label="Your full name"/>
            <InputField name="email" form={form} label="Your email"/>
            <InputPasswordField name="password" form={form} label="Your password" />
            <InputPasswordField name="retypePassword" form={form} label="Retype your password" />

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

export default RegisterForm;