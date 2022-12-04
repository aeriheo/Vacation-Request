import React from 'react';
import {Button} from '@mui/material';
import './style.css'

const Header = () =>{
    // const [username, setUsername] = useState('');
    const username = '김사원';

    return(
        <div className='header_div'>
            <Button style={{color:'black', fontSize:'15px'}}>휴가 신청</Button>
            <div className='title_div'>MY VACATION</div>
            <div className='user_div'>{username}님 환영합니다</div>
        </div>
    );
};

export default Header;