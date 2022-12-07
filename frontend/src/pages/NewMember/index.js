import React, {useState} from 'react';
import './style.css';
import {Button} from '@mui/material';
import InputData from '../../components/InputData';
import EmailCheck from '../../components/EmailCheck';
import GradeSelect from '../../components/GradeSelect';

const NewMember = ()=>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');

    const submitUser = () =>{
        alert(`${id}, ${name}, ${birth}, ${phone}, ${email}, ${grade}`);
        window.close();
    };
    
    return(
        <div className = "new_wrapper">
            <div className = 'title_div'>신규사원 등록</div>
            <InputData title='사원 번호' value={(v)=>setId(v)}/>
            <InputData title='이름' value={(v)=>setName(v)}/>
            <InputData title='생년월일' value={(v)=>setBirth(v)}/>
            <InputData title='연락처' value={(v)=>setPhone(v)}/>
            <EmailCheck title='이메일' value={(v)=>setEmail(v)}/>
            <GradeSelect value = {(v)=>setGrade(v)}/>
            <Button id = "sign_btn" onClick={submitUser}>등록하기</Button>
        </div>
    );
};

export default NewMember;