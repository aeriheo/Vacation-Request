import React, {useState} from 'react';
import Header from '../../components/header';
import {TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button} from '@mui/material';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';

const Request = () =>{
    const [vType, setVType] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dayCheck, setDayCheck] = useState(false);
    const [nightCheck, setNightCheck] = useState(false);
    const [reason, setReason] = useState('');

    const handleType = (e) =>{
        setVType(e.target.value);
    }

    return(
        <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <Header/>
            <div style={{flexDirection:'column', width:'79%', marginTop:'40px'}}>
                <div style={{display:'flex', alignItems: 'center', marginTop:'20px', marginBottom:'50px'}}>
                    <div style = {{marginRight:'30px', fontSize:'20px', fontWeight:'bold'}}>휴가 유형</div>
                    <FormControl style={{width:'200px'}}>
                        <InputLabel>휴가 유형</InputLabel>
                        <Select value = {vType} label = "Type" onChange = {handleType}>
                            <MenuItem value = {'연차'}>연차</MenuItem>
                            <MenuItem value = {'출산'}>출산</MenuItem>
                            <MenuItem value = {'배우자 출산'}>배우자 출산</MenuItem>
                            <MenuItem value = {'생리'}>생리</MenuItem>
                            <MenuItem value = {'가족 돌봄'}>가족 돌봄</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{display:'flex', alignItems: 'center', marginTop:'20px', marginBottom:'50px'}}>
                    <div style = {{marginRight:'30px', fontSize:'20px', fontWeight:'bold'}}>휴가 기간</div>
                    <LocalizationProvider dateAdapter = {AdapterMoment} >
                        <DatePicker inputFormat={"yyyy/MM/DD"} value={startDate} onChange={(date)=>setStartDate(date)} renderInput={(value)=><TextField {...value}/>} />
                    </LocalizationProvider>
                    <div style={{marginLeft:'20px', marginRight:'20px', fontSize:'20px', fontWeight:'bold'}}>~</div>
                    <LocalizationProvider dateAdapter = {AdapterMoment}>
                        <DatePicker inputFormat={"yyyy/MM/DD"} value={endDate} onChange={(date)=>setEndDate(date)} renderInput={(value)=><TextField {...value}/>}/>
                    </LocalizationProvider>
                    <Checkbox checked={dayCheck} onChange={(e)=>setDayCheck(e.target.checked)}/>
                    <div>오전 반차</div>
                    <Checkbox checked={nightCheck} onChange={(e)=>setNightCheck(e.target.checked)}/>
                    <div>오후 반차</div>
                </div>
                <div style={{display:'flex', marginTop:'20px', marginBottom:'50px'}}>
                    <div style = {{marginRight:'30px', fontSize:'20px', fontWeight:'bold'}}>휴가 사유</div>
                    <div>
                        <input onChange={(e)=>setReason(e.target.value)} value={reason} style={{width:'1800px', height:'500px', borderRadius:'10px', border:'1px solid #878787'}}/>
                    </div>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
                    <Button style={{width:'300px', backgroundColor:'#D7EAF0', fontSize:'18px', fontWeight:'bold', color:'black'}}>신청하기</Button>
                </div>
            </div>
        </div>
    );
};

export default Request;