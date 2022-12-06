import React from 'react';
import './style.css';

const RequestTable = () =>{
    return(
        <div className="requeset_table_wrapper">
            <table className='request_table'>
                <thead>
                    <tr>
                        <th className='request_table_th'>휴가 일자</th>
                        <th className='request_table_th'>휴가 종류</th>
                        <th className='request_table_th'>휴가 일수</th>
                        <th className='request_table_th'>신청 일자</th>
                        <th className='request_table_th'>상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='request_table_td'>2022.11.25 오전 반차</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>0.5</td>
                        <td className='request_table_td'>2022.11.20</td>
                        <td className='request_table_td' style={{color:'#4B92BA'}}>대기</td>
                    </tr>
                    <tr>
                        <td className='request_table_td'>2022.12.23 ~ 2022.12.27</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>5</td>
                        <td className='request_table_td'>2022.11.20</td>
                        <td className='request_table_td' style={{color:'#75BB5D'}}>승인</td>
                    </tr>
                    <tr>
                        <td className='request_table_td'>2022.11.25 오전 반차</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>0.5</td>
                        <td className='request_table_td'>2022.11.20</td>
                        <td className='request_table_td' style={{color:'#D26C6C'}}>반려</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RequestTable;