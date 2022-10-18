import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptodetailsQuery,useGetCryptochartQuery } from "../services/cryptocurrenciesapi";
import {Row,Col,Typography,Select} from 'antd'
import millify from 'millify';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {Linegraph} from './index';
import HTMLReactParser from 'html-react-parser';
const {Title,Text}=Typography;

const Cryptodetails = () => {
  const {cryptoid}=useParams()
  const [timeperiod, settimeperiod] = useState("7d")
  const{data,isFetching}=useGetCryptodetailsQuery(cryptoid)
  const{data:histdata}=useGetCryptochartQuery({cryptoid,timeperiod})
  const cryptoDetails=data?.data?.coin;


  if(isFetching) return "loading..."

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails.Volume || millify(cryptoDetails?.["24hVolume"])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.supply.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.supply.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.supply.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  return (
    <>
      <Col className='coin-detail-container'>
        <Col className='coin-heading-container'>
          <Title className='coin-name' level={2}>{cryptoDetails?.name} ({cryptoDetails?.symbol}) Price</Title>
          <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>         
        </Col>
      </Col>
<Select defaultValue="7d"  className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value)=>(settimeperiod(value))}>
{time.map((t)=>(
  <Select.Option key={t}>{t}</Select.Option>
))}
</Select>
<Linegraph data={histdata} timeperiod={timeperiod} coindetails={cryptoDetails}/>
<Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">{cryptoDetails.name} Value Statistics</Title>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
          </Col>
           <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Other Stats Info</Title>
            <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        </Col>
            {/* Cryptodetails [{cryptoid}] */}
            <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
          {HTMLReactParser(cryptoDetails.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
          {cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    
    </>
  )
}

export default Cryptodetails