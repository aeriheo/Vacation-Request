import React from 'react';
import ReactApexChart from "react-apexcharts";

const RadialBar = () =>{
    const remainVacation = 10;
    const totalVacation = 15;
    const chartData = {
        series:[(remainVacation/totalVacation)*100],
        options:{
            chart:{type:'radialBar'},
            plotOptions:{
                radialBar:{
                    dataLabels:{
                        total:{
                            show:true,
                            label: '사용 가능 / 전체',
                            formatter: function () { return `${remainVacation} / ${totalVacation}`}
                        }
                    },
                    hollow:{size:'50%'}
                }
            },
            labels:[`사용 가능 / 전체`],
            colors:['#88C4E5'],
        },
    };
    return(
        <div>
            <ReactApexChart options = {chartData.options} series = {chartData.series} type = "radialBar" width={500} />
        </div>
    );
};

export default RadialBar;