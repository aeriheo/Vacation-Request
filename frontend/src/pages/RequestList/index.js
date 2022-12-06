import React from 'react';
import Header from '../../components/header';
import RequestTable from '../../components/RequestTable';
import './style.css';

const RequestList = () =>{
    return(
        <div className="request_wrapper">
            <Header/>
            <div className='request_list_wrapper'>
                <div className='request_list_title'>신청 현황</div>
                <RequestTable/>
            </div>
        </div>
    );
};

export default RequestList;