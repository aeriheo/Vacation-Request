import React, {useState} from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';
import './style.css';

const GradeSelect = (props) =>{
    const [grade, setGrade] = useState('');
    const handleGrade =(e) =>{
        setGrade(e.target.value);
        props.value(e.target.value);
    }

    return(
        <div className='select_wrapper'>
            <div className='select_title'>직급</div>
            <FormControl variant='standard' id='select_list_wrapper'>
                <Select value = {grade} onChange = {handleGrade}>
                    <MenuItem value = {'6급'}>6급</MenuItem>
                    <MenuItem value = {'5급'}>5급</MenuItem>
                    <MenuItem value = {'4급'}>4급</MenuItem>
                    <MenuItem value = {'3급'}>3급</MenuItem>
                    <MenuItem value = {'부장'}>부장</MenuItem>
                    <MenuItem value = {'은행장'}>은행장</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default GradeSelect;