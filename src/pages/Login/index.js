
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useState } from 'react';

import {Copyright,setCookie,getCookie} from '../../helpers/helpers';
import {UserLogin} from '../../helpers/apiCalls';

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
                main : '#28231C'
            },
            secondary : {
                main : '#1A181B'
            }
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
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            <Snackbar
                 anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                open={hasErrors}
                autoHideDuration={6000}
                key={'test'}
            >
                <Alert severity="error">{errorMsg}</Alert>
            </Snackbar>
        </ThemeProvider>
    )
}

export default Login;