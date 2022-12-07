import React, {useState} from 'react';
import {Checkbox, Button} from '@mui/material';

const PermissionTable = () =>{
    const [allselect, setAllSelect] = useState(false);
    const [selected, setSelected] = useState(false);

    return(
        <div className="requeset_table_wrapper">
            <table className='request_table'>
                <thead>
                    <tr>
                        <th className='request_table_th'>
                            <Checkbox checked={allselect} onChange={(e)=>setAllSelect(e.target.checked)}/>     
                        </th>
                        <th className='request_table_th'>신청자</th>
                        <th className='request_table_th'>휴가 종류</th>
                        <th className='request_table_th'>휴가 일자</th>
                        <th className='request_table_th'>사유</th>
                        <th className='request_table_th'></th>
                        <th className='request_table_th'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='request_table_td'>
                            <Checkbox checked={selected} onChange={(e)=>setSelected(e.target.checked)}/> 
                        </td>
                        <td className='request_table_td'>허애리</td>
                        <td className='request_table_td'>휴가</td>
                        <td className='request_table_td'>2022.11.18 ~ 2022.12.14</td>
                        <td className='request_table_td'>농협 합격 기도 메타</td>
                        <td className='request_table_td'>
                            <Button style={{width:'40px', color:'black', backgroundColor:'#F8F8F8', fontWeight:'bold'}}>승인</Button>
                        </td>
                        <td className='request_table_td'>
                            <Button style={{width:'40px', color:'black', backgroundColor:'#F8F8F8', fontWeight:'bold'}}>반려</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PermissionTable;