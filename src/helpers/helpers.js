import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



export function Copyright(props) {
    return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
        CRUD EXAMPLE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}

export function setCookie(key = false ,value = false){
    if( key && value ){
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + 300 * 36000;
        now.setTime(expireTime);

        document.cookie = `${key}=${value};expires=${now}`;
    }else{
        return null;
    }
}

export  function getCookie (key) {
    const cookieVal  = document.cookie .split('; ').find(row => row.startsWith(key))?.split('=')[1] ?? null;
    return cookieVal;
}
