import * as React from 'react';
import { getCookie } from '../../helpers/helpers';
import AdminDashoard from '../../components/Dashboard/admin';


const Dashboard = () => {
    return (
    <div>
      { getCookie('user_type') === 'admin' ?
        <AdminDashoard />
        :
        ''
      }
    </div> 
    
    )
}
export default Dashboard
