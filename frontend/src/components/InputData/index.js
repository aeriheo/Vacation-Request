import React, {useState} from 'react';
import {TextField} from '@mui/material';
import './style.css';

const InputData = (props) =>{
    const [data, setData] = useState('');
    const handleData=(e)=>{
        setData(e.target.value);
        props.value(e.target.value);
    }

    return(
        <div className='input_wrapper'>
            <div className='input_title'>{props.title}</div>
            <TextField value = {data} variant = 'standard' onChange={handleData} id='input_text'/>
        </div>
    );
};

export default InputData;