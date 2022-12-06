import React from 'react';
import {Button} from '@mui/material';
import './style.css';

const UseVacation = () =>{
    return(
        <div className = 'div_wrapper'>
            <div className = 'vacation_box'>
                <div className = 'vacation_use_title_box'>
                    <div className='vacation_use_title'>사용현황</div>
                    <Button style={{fontWeight: 'bold', color: 'black'}} onClick={()=>window.location.href='/uselist'}>더보기</Button>
                </div>
                <div className='vacation_use_lists'>
                    <div className='vacation_use_list'>2022.11.25 오전</div>
                    <div className='vacation_use_list'>2022.12.23 ~ 2022.12.27</div>
                    <div className='vacation_use_list'>2022.12.23 ~ 2022.12.27</div>
                </div>
            </div>
        </div>
    );
}

export default UseVacation;