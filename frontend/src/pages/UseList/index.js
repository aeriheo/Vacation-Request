import React from 'react';
import Header from '../../components/header';
import UseTable from '../../components/UseTable';
import '../RequestList/style.css';

const UseList = () =>{
    return(
        <div className="request_wrapper">
            <Header/>
            <div className='request_list_wrapper'>
                <div className='request_list_title'>휴가 사용 현황</div>
                <UseTable/>
            </div>
        </div>
    );
};

export default UseList;