import { 
    ThemeProvider, createTheme, 
    Container,
    Box,
    Avatar,
    Typography
} from '@mui/material';
import Registration from '../../components/Forms/Registration';

const Register = () => {
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

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box 
                sx={{
                    width:'100%', 
                    height: '100vh', 
                    bgcolor: 'primary.bgColor',
                    paddingTop: 20
                }}
            >
                <Container component='main' maxWidth="xs">
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
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
export default Register;