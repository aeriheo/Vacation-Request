import React from 'react';

const UserTable = () =>{
    return(
        <div className="requeset_table_wrapper">
            <table className='request_table'>
                <thead>
                    <tr>
                        <th className='request_table_th'>사원 번호</th>
                        <th className='request_table_th'>이름</th>
                        <th className='request_table_th'>생년월일</th>
                        <th className='request_table_th'>연락처</th>
                        <th className='request_table_th'>이메일</th>
                        <th className='request_table_th'>직급</th>
                        <th className='request_table_th'>입사 일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='request_table_td'>2022121941</td>
                        <td className='request_table_td'>허애리</td>
                        <td className='request_table_td'>1997.05.01</td>
                        <td className='request_table_td'>010-9410-3051</td>
                        <td className='request_table_td'>hureari@nhbank.com</td>
                        <td className='request_table_td'>5급</td>
                        <td className='request_table_td'>2022.12.19</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;