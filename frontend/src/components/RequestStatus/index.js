import React from 'react';
import {Button} from '@mui/material';
import './style.css';

const RequestStatus = () =>{
    return(
        <div className='status_wrapper'>
            <div className='status_div'>
                <div className='status_title'>신청 현황</div>
                <Button style={{fontWeight:'bold', color:'black'}}>더보기</Button>
            </div>
            <div className='status_lists_div'>
                <div>2022.11.25 오전 반차</div>
                <div className='status_list_waiting'>
                    <div className='status_list_text'>대기</div>
                </div>
            </div>
            <div className='status_lists_div'>
                <div>2022.11.25 오전 반차</div>
                <div className='status_list_approval'>
                    <div className='status_list_text'>승인</div>
                </div>
            </div>
            <div className='status_lists_div'>
                <div>2022.11.25 오전 반차</div>
                <div className='status_list_reject'>
                    <div className='status_list_text'>반려</div>
                </div>
            </div>
        </div>
    );
}

export default RequestStatus;