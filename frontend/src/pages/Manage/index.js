import React from 'react';
import {Button} from '@mui/material';
import Header from '../../components/header';
import UserTable from '../../components/UserTable';

const Manage = () =>{
    return(
        <div className="request_wrapper">
            <Header/>
            <div className='request_list_wrapper'>
                <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className='request_list_title'>임직원 관리</div>
                    <Button onClick={()=>window.open('/newmember', '_blank','width=500, height=700')} style={{backgroundColor:'#E4E4E4', color:'black', fontSize:'15px', fontWeight:'bold'}}>신규 사원 등록</Button>
                </div>
                <UserTable/>
            </div>
        </div>
    );
};

export default Manage;