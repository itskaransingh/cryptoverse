import React, { useEffect, useState } from "react";
import { useGetNewsQuery } from "../services/newsapi";
import { Typography, Col, Row, Select, Card, Avatar, } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptocurrenciesapi";


const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const { Title, Text } = Typography;
  const count = simplified ? 6 : 12;
  const { data } = useGetCryptosQuery(100);
  const [newsdata, setNewsdata] = useState();
  const [category, setcategory] = useState("Cryptocurrencies")
  const { data: newslist, isFetching } = useGetNewsQuery({
    count,
    newsCategory: category,
  });
  useEffect(() => {
    setNewsdata(newslist?.value);
  }, [newslist]);
  if (isFetching) return "loading...";
  // console.log(data)
  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && <Col span={24}>
         <Select 
         showSearch
         className="select-news"
         placeholder="Select a Crypto"
         optionFilterProp="children"
         onChange={(value)=>(setcategory(value))}
         filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())}
         >
          <Select.Option value="Cryptocurrencies">
            Cryptocurrencies
          </Select.Option>
          {data?.data?.coins.map((opt)=>(
            <Select.Option value={opt.name}>{opt.name}</Select.Option>
          ))}
                 </Select>
        </Col>}
        {newsdata?.map((n, i) => (
          <Col xs={24} sm={12} md={8} key={i}>
            <Card className="news-card" hoverable>
              <a href={n.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title
                    className="news-title"
                    level={5}
                    style={{ paddingRight: "2px" }}
                  >
                    {n.name}
                  </Title>
                  <img
                    src={n?.image?.thumbnail?.contentUrl || demoImage}
                    className="img"
                    alt="image"
                  />
                </div>
                <p>
                  {/* {n?.description.length > 150 ? `${n?.description.substring(0,150)}...` : n?.description} */}
                  {n?.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        n?.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="provider"
                    />
                    <Text className="provider-name">{n.provider[0].name}</Text>
                  </div>
                  <Text>
                    {moment(n?.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
