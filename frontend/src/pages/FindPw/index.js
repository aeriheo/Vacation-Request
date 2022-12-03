import React, {useState} from 'react';
import {TextField, Button} from '@mui/material'
import './style.css';

const FindPw = ()=>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleId = (e) => {
        setId(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    
    const auth = ()=>{
        console.log(id, name, phone);
        window.location.href='/setpw';
    }
    return(
        <div className = 'find_box'>
            <div className = 'title_div'>본인 인증</div>
            <TextField label = {"사원 번호를 입력하세요"} value = {id}  onChange={handleId} style={{width:'300px', margin:'5px'}}/>
            <TextField label = {"이름을 입력하세요"} value = {name}  onChange={handleName} style={{width:'300px', margin:'5px'}}/>
            <TextField label = {"휴대전화 번호를 입력하세요"} value = {phone} onChange={handlePhone} style={{width:'300px', margin:'5px'}}/>
            <Button onClick={()=>auth()} id = "auth_btn">인증하기</Button>
        </div>
    );
};

export default FindPw;