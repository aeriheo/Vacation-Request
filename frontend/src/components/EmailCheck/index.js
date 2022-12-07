import React, {useState} from 'react';
import {TextField} from '@mui/material';
import './style.css';

const EmailCheck = (props) =>{
    const [value, setValue] = useState('');
    const handleValue =(e) =>{
        setValue(e.target.value);
        props.value(e.target.value);
    }

    return(
        <div className="input_wrapper">
            <div className='input_title'>{props.title}</div>
            <TextField value = {value} variant = 'standard' onChange={handleValue} id='input_email'/>
            <div id='dup_check_btn'>중복확인</div>
        </div>
    );
};

export default EmailCheck; 