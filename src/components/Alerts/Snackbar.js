import {
    Snackbar,
    Alert
} from '@mui/material'

/* props parameters 
 open, position, duration ,variant, severity,msg*/
const SnackbarAlert = (props) => 
<Snackbar
    open={props.open}
    anchorOrigin={props.position}
    autoHideDuration={props.duration}
>
    <Alert 
        variant={ !props.variant || props.variant == '' ? 'filled' : props.variant } // to avoid errors, create default value if empty string, null, or undefined
        severity={ !props.severity || props.severity == '' ? 'error' : props.severity } // to avoid errors, create default value if empty string, null, or undefined
    >{props.msg}</Alert>
</Snackbar>


export default SnackbarAlert;