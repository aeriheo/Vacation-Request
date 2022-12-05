import React, {useState} from 'react';
import {Button} from '@mui/material';
import './style.css';
import Header from '../../components/header';
import RequestType from '../../components/RequestType';
import RequestDate from '../../components/RequestDate';
import RequestReason from '../../components/RequestReason';

const Request = () =>{
    const [vType, setVType] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dayCheck, setDayCheck] = useState(false);
    const [nightCheck, setNightCheck] = useState(false);
    const [reason, setReason] = useState('');

    const checkRequest = ()=>{
        alert(`휴가 유형 : ${vType}, 휴가 시작일 : ${startDate}, 휴가 종료일 : ${endDate}, 휴가 사유 : ${reason}, 반차 여부? ${dayCheck}, ${nightCheck}`);
    }
    return(
        <div className='request_wrapper'>
            <Header/>
            <div className='request_form_wrapper'>
                <RequestType vType = {(v)=>setVType(v)}/>
                <RequestDate startDate = {(sDate) => setStartDate(sDate)} endDate = {(eDate)=>setEndDate(eDate)} dayCheck = {(dCheck)=>setDayCheck(dCheck)} nightCheck = {(nCheck)=>setNightCheck(nCheck)}/>
                <RequestReason reason = {(r)=>setReason(r)}/>
                <div className='request_form_btn'>
                    <Button onClick={checkRequest} style={{width:'300px', backgroundColor:'#D7EAF0', fontSize:'18px', fontWeight:'bold', color:'black'}}>신청하기</Button>
                </div>
            </div>
        </div>
    );
};

export default Request;