import React, {useState} from 'react';
import './style.css';

const RequestReason = (props) =>{
    const [reason, setReason] = useState('');
    const handleReason = (e) => {
        setReason(e.target.value);
        props.reason(e.target.value);
    }
    return (
        <div className='request_reason_wrapper'>
            <div className='request_reason_title'>휴가 사유</div>
            <div>
                <input onChange={handleReason} value={reason} className='request_reason_form'/>
            </div>
        </div>
    );
};

export default RequestReason;