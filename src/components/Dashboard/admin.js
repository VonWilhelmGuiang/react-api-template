import { useState } from 'react';
import {AllUsers} from '../../helpers/apiCalls'
import { Fragment } from 'react';
import { useEffect } from "react";
import { Alert } from '@mui/material';
import {
    DataGrid 
} from '@mui/x-data-grid';



const columns = [
    {field : 'id', headerName: 'ID', width: 90, editable: false },
    {field: 'first_name', headerName:'First Name', width: 150, editable: true},
    {field: 'last_name', headerName:'Last Name', width: 150, editable: true},
    {field: 'user_type', headerName:'User Type', width: 90, editable: true},
    {field: 'date_created', headerName:'User Type', width: 150, editable: true}
];

// map data to data grid
const AdminDashoard = () =>{
    const [rows,setDataRow] = useState([])
    const [hasErrors, setHasErrors] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');

    
    useEffect(() => { 
        AllUsers().then((response)=> {
            setDataRow(response.data.users)
        }).catch((error)=>{
            setErrorMsg(error.response.data.message)
            setHasErrors(true);
        })
    },[]);

    
    return(
        <Fragment>
            {hasErrors ? 
                <Alert variant="filled" severity="error">
                    {errorMsg}
                </Alert>
                :
                <DataGrid 
                    rows={rows}
                    columns = {columns}
                    initialState={{
                        pagination:{
                            paginationModel:{
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            }
        </Fragment>
    )
}

export default AdminDashoard