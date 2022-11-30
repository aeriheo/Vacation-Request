import React from 'react';
import {TextField, Button} from '@mui/material';
import './style.css';

const Login = () => {
    return(
        <div className="div_box">
            <div className="title_box">MY VACATION</div>
            <div className="form_container">
                <div className="form_box">
                    <TextField label={'사원번호를 입력하세요'} variant="filled" id="userid" className="input_box"/>
                    <TextField label={'비밀번호를 입력하세요'} variant="filled" id="password" type="password" className="input_box"/>
                    <div >
                        <Button className="find_pw_btn">비밀번호 찾기</Button>
                    </div>
                </div>
                <Button variant="contained" className="login_btn">로그인</Button>
            </div>
        </div>
    );
};

export default Login;