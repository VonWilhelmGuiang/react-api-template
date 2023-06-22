import { useState } from 'react';
import {Copyright,setCookie} from '../../helpers/helpers';
import Registration from '../../components/Forms/Registration';
import {UserRegistration} from '../../helpers/apiCalls'

import SnackbarAlert from '../../components/Alerts/Snackbar';
import { 
    ThemeProvider, createTheme, 
    Container,
    Box,
    Avatar,
    Typography,
    Link,
    CssBaseline
} from '@mui/material';

const Register = () => {
    const [registerMsg, setRegisterMsg] = useState({message: '', status: '',show:false});

    const defaultTheme = createTheme({
        palette:{
            primary: {
                main : '#6e2c48',
                bgColor: '#EEF2F6'
            },
            secondary: {
                main: '#813354',
                bgColor: '#FFFFFF'
            }
        }
    });
    
    // create handlers
    const submit = (e) =>{
        e.preventDefault();
        
        const user_data = {
            first_name : e.target.first_name.value,
            last_name : e.target.last_name.value,
            email : e.target.email.value,
            password : e.target.password.value,
            password_confirmation : e.target.password_confirm.value,
        }
        UserRegistration(user_data).then(resp => {
            //set cookies
            setCookie('token',resp.data.auth.token)
            console.log(resp.data.auth.token)
            setRegisterMsg({
                status : resp.data.status, 
                message: resp.data.message,
                show: true
            })
        }).catch(error=>{
            setRegisterMsg({
                status : error.response.data.status, 
                message: error.response.data.message,
                show: true
            })
            console.log(registerMsg)
        })
    }
    
    return (
        <ThemeProvider theme={defaultTheme}>
            {/* create pop up error alerts */}
            <SnackbarAlert 
                open = {registerMsg.show}
                position = {{horizontal: 'center', vertical: 'top'}} 
                duration = {6000}
                variant={'filled'}
                severity = {registerMsg.status}
                msg = {registerMsg.message}
            />
            <Box 
                sx={{
                    width:'100%', 
                    height: '100vh', 
                    bgcolor: 'primary.bgColor',
                    paddingTop: 20
                }}
            >
                <Container component='main' maxWidth='sm'>
                <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: 'secondary.bgColor',
                            borderRadius: 5,
                            padding:3
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
                        <Typography component='h1' variant='h5'>
                            Register
                        </Typography>
                        <Box sx={{ mt: 1 }} onSubmit={submit}>
                            <Registration 
                                theme={defaultTheme}
                            />
                        </Box>
                        <Link href='login' variant='body2'>
                            Log In
                        </Link>
                    </Box>
                </Container>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>
        </ThemeProvider>
    )
}
export default Register;