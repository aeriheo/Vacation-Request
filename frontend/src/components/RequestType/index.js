import React, {useState} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import './style.css';

const RequestType = (props) =>{
    const [vType, setVType] = useState('');

    const handleType = (e) =>{
        setVType(e.target.value);
        props.vType(e.target.value);
    }
    return(
        <div className='request_type_wrapper'>
            <div className='request_type_title'>휴가 유형</div>
            <FormControl style={{width:'200px'}}>
                <InputLabel>휴가 유형</InputLabel>
                <Select value = {vType} label = "vType" onChange = {handleType}>
                    <MenuItem value = {'연차'}>연차</MenuItem>
                    <MenuItem value = {'출산'}>출산</MenuItem>
                    <MenuItem value = {'배우자 출산'}>배우자 출산</MenuItem>
                    <MenuItem value = {'생리'}>생리</MenuItem>
                    <MenuItem value = {'가족 돌봄'}>가족 돌봄</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default RequestType;