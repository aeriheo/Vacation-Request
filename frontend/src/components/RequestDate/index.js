import React, {useState} from 'react';
import {TextField, Checkbox} from '@mui/material';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import './style.css';

const RequestDate = (props) =>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dayCheck, setDayCheck] = useState(false);
    const [nightCheck, setNightCheck] = useState(false);

    const handleStart = (date) =>{
        setStartDate(date);
        props.startDate(date);
    }

    const handleEnd = (date)=>{
        setEndDate(date);
        props.endDate(date);
    }

    const handleDayCheck = (e) =>{
        setDayCheck(e.target.checked);
        props.dayCheck(e.target.checked);
    }

    const handleNightCheck = (e) =>{
        setNightCheck(e.target.checked);
        props.nightCheck(e.target.checked);
    }

    return(
        <div className='request_date_wrapper'>
            <div className='request_date_title'>휴가 기간</div>
            <LocalizationProvider dateAdapter = {AdapterMoment} >
                <DatePicker inputFormat={"yyyy/MM/DD"} value={startDate} onChange={handleStart} renderInput={(value)=><TextField {...value}/>} />
            </LocalizationProvider>
            <div className='request_date_text'>~</div>
            <LocalizationProvider dateAdapter = {AdapterMoment}>
                <DatePicker inputFormat={"yyyy/MM/DD"} value={endDate} onChange={handleEnd} renderInput={(value)=><TextField {...value}/>}/>
            </LocalizationProvider>
            <Checkbox checked={dayCheck} onChange={handleDayCheck}/>
            <div>오전 반차</div>
            <Checkbox checked={nightCheck} onChange={handleNightCheck}/>
            <div>오후 반차</div>
        </div>
    );
};

export default RequestDate;