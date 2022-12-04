import React from 'react';
import Header from '../../components/header';
import RadialBar from '../../components/RadialBar';
import UseVacation from '../../components/UseVacation';
import RequestStatus from '../../components/RequestStatus';

const Main = () =>{
    
    return(
        <div>
            <Header/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <RadialBar/>
                <UseVacation/>
            </div>
            <RequestStatus/>
        </div>
    );
};

export default Main;