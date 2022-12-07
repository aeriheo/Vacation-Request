import React from 'react';
import Header from '../../components/header';
import PermissionTable from '../../components/PermissionTable';
import './style.css';

const Permission = () =>{
    return(
        <div className="request_wrapper">
            <Header/>
            <div className='request_list_wrapper'>
                <div className='request_list_title'>휴가 신청 현황</div>
                <PermissionTable/>
            </div>
        </div>
    );
};

export default Permission;