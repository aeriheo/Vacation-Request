import React from 'react';
import '../RequestTable/style.css';

const UseTable = () =>{
    return(
        <div className="requeset_table_wrapper">
            <table className='request_table'>
                <thead>
                    <tr>
                        <th className='request_table_th'>휴가 일자</th>
                        <th className='request_table_th'>휴가 종류</th>
                        <th className='request_table_th'>휴가 일수</th>
                        <th className='request_table_th'>신청 일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='request_table_td'>2022.11.25 오전 반차</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>0.5</td>
                        <td className='request_table_td'>2022.11.20</td>
                    </tr>
                    <tr>
                        <td className='request_table_td'>2022.12.23 ~ 2022.12.27</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>5</td>
                        <td className='request_table_td'>2022.11.20</td>
                    </tr>
                    <tr>
                        <td className='request_table_td'>2022.11.25 오전 반차</td>
                        <td className='request_table_td'>연차</td>
                        <td className='request_table_td'>0.5</td>
                        <td className='request_table_td'>2022.11.20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UseTable;