
import * as React from 'react';
import { useState } from 'react';
import {Copyright,setCookie,getCookie} from '../../helpers/helpers';
import {UserLogin} from '../../helpers/apiCalls';

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Container,
    createTheme, ThemeProvider,
    Typography,
    Snackbar,
    Alert
} from '@mui/material';

const Login = () => {
    const [hasErrors, setHasErrors] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');

     // refresh token and redirect again to dashboard
     if(getCookie('token')){
        window.location.href='/dashboard';
    }

    const defaultTheme = createTheme({
        palette: {
            primary : {
                main : '#28231C',
                bgColor: '#EEF2F6'
            },
            secondary : {
                main : '#1A181B',
                bgColor: '#FFFFFF'
            },
        }
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const formdata = {email: e.target['email'].value ,password: e.target['password'].value}
        
        UserLogin(formdata).then(response => {
            setCookie('token',response.data.auth.token)
        }).catch(error=>{
            setErrorMsg(error.response.data.message)
            setHasErrors(true);
        });
       
    }
    return(
        <React.Fragment>
            <ThemeProvider theme={defaultTheme}>
                <Box  sx={{
                    width: '100%',
                    height:'100vh',
                    paddingTop: 20,
                    bgcolor:'primary.bgColor'
                }}> 
                    <Container component='main' maxWidth='xs' sx={{bgcolor : 'secondary.bgColor', borderRadius : 5}}>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingTop:5,
                                paddingBottom: 10
                            }}
                        >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}/>
                        <Typography component='h1' variant='h5'>
                            Sign in
                        </Typography>
                        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                autoFocus
                            />
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                            />
                            <FormControlLabel
                                control={<Checkbox value='remember' color='primary' />}
                                label='Remember me'
                            />
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href='#' variant='body2'>
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs>
                                    <Link href='#' variant='body2'>
                                        Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        </Box>
                    </Container>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box >

                <Snackbar
                    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                    open={hasErrors}
                    autoHideDuration={6000}
                    key={'test'}
                >
                    <Alert variant='filled' severity='error'>{errorMsg}</Alert>
                </Snackbar>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Login;