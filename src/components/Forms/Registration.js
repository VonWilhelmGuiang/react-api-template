import * as React from 'react';

import { 
    ThemeProvider,
    Box ,
    TextField,
    Grid,
    Button
} from "@mui/material";

const Registration = (props) => {

    return(
        <React.Fragment>
            <ThemeProvider theme={props.theme}>
                <Box component='form'>
                    <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='email'
                                    label='Email'
                                    type='email'
                                />
                            </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{paddingLeft:1, paddingRight: 1}}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='first_name'
                                label='First Name'
                                type='text'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{paddingLeft:1, paddingRight: 1}}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='last_name'
                                label='Last Name'
                                type='text'
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{paddingLeft:1, paddingRight: 1}}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                            />
                        </Grid>
                        <Grid item xs={6} sx={{paddingLeft:1, paddingRight: 1}}>
                            <TextField
                                margin='normal'
                                required
                                fullWidth
                                name='password_confirm'
                                label='Confirm Password'
                                type='password'
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt:2, mb: 2}}
                    >
                        Register
                    </Button>
                    
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Registration;