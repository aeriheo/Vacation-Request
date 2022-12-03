import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import './style.css';

const SetPw = ()=>{
    const [password, setPassword] = useState('');
    const [checkpw, setCheckpw] = useState('');

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleCheckpw = (e) => {
        setCheckpw(e.target.value);
    }
    
    const reset = ()=>{
        if (password === checkpw){
            alert('비밀번호가 변경되었습니다. 로그인해주세요');
            window.close();
        }else alert('비밀번호가 일치하지 않습니다.');
    }
    return(
        <div className = "set_box">
            <div className = 'title_div'>비밀번호 변경</div>
            <TextField label = {"비밀번호를 입력하세요"} type="password" value = {password} onChange={handlePassword} style={{margin:'10px', width:'300px'}}/>
            <TextField label = {"한 번 더 비밀번호를 입력하세요"} type="password" value = {checkpw} onChange={handleCheckpw} style={{margin:'10px', width:'300px'}}/>
            <Button onClick={()=>reset()} id = "set_btn">변경하기</Button>
        </div>
    );
};

export default SetPw;