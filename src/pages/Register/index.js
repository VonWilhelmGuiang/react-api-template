import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Registration from '../../components/Forms/Registration';

const Register = () => {
    const defaultTheme = createTheme({
        palette:{
            primary: {
                main : '#C1EEFF'
            },
            secondary: {
                main: '#C2FFCF'
            }
        }
    });
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth="xs">
                <Registration />
            </Container>
        </ThemeProvider>
    )
}
export default Register;