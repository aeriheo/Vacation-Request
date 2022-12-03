import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import './style.css';

const Login = () => {
    const [userid, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleUserId = (e)=>{
        setUserId(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const login = () =>{
        console.log(userid, password);
    }
    return(
        <div className="div_box">
            <div className="title_box">MY VACATION</div>
            <div className="form_container">
                <div className="form_box">
                    <TextField label={'사원번호를 입력하세요'} variant="filled" value = {userid} onChange = {handleUserId} className="input_box"/>
                    <TextField label={'비밀번호를 입력하세요'} variant="filled" type="password" value = {password} onChange = {handlePassword} className="input_box"/>
                    <div>
                        <Button id="find_pw_btn" onClick={()=>window.open('/findpw', '_blank','width=400, height=400')}>비밀번호 찾기</Button>
                    </div>
                </div>
                <Button onClick={()=>login()} variant="contained" id="login_btn">로그인</Button>
            </div>
        </div>
    );
};

export default Login;