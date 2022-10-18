import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Chart from "chart.js/auto";
import millify from 'millify';

const{Title,Text}=Typography
const Linegraph = ({data,timeperiod,coindetails}) => {
    

    
    const coinprice=[]
    const timestamp=[]
    
    data?.data?.history?.slice(0).reverse().map((h)=>{
      coinprice.push(h.price)
      if (timeperiod=="3h") {
        timestamp.push( new Date(
          h.timestamp * 1000
        ).toLocaleTimeString())
      }
     else if(timeperiod=="24h"){
      timestamp.push( new Date(
        h.timestamp * 1000
      ).toLocaleTimeString())
     }
      else {
        timestamp.push( new Date(
          h.timestamp * 1000
        ).toLocaleDateString()   )  
      }
    })

    const datas = {
    labels: timestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinprice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
        yAxes: [
        {
          ticks:{
            beginAtZero: true
          },
        },
      ],
    },
  };
  return (
    <div>
   <Row className="chart-header">
        <Title level={2} className="chart-title">{coindetails?.name} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coindetails?.change}%</Title>
          <Title level={5} className="current-price">Current {coindetails?.name} Price: $ {millify(coindetails?.price)}</Title>
        </Col>
      </Row>
        <Line  data={datas} options={options}/>
    </div>
  )
}

export default Linegraph