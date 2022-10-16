import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptocurrenciesapi";
import { Card, Col, Row, Input } from "antd";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptolist, isFetching } = useGetCryptosQuery(count);
  const [cryptodata, setCryptodata] = useState();
  const [searchterm, setsearchterm] = useState("");
  useEffect(() => {
    setCryptodata(cryptolist?.data?.coins);

    const filteredcoins = cryptolist?.data?.coins.filter((c) => {
      return c.name.toLowerCase().includes(searchterm);
    });
    setCryptodata(filteredcoins);
  }, [cryptolist, searchterm]);

  if (isFetching) return "loading...";

  return (
    <>
      {!simplified && (
        <div style={{ paddingBottom: "20px" }}>
          <Input
            placeholder="Search Cryptos..."
            onChange={(e) => {
              setsearchterm(e.target.value);
            }}
            size="large"
          />
        </div>
      )}
      <Row className="crypto-card-container" gutter={[30, 30, 30, 30]}>
        {cryptodata?.map((c) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={c.uuid}>
            <Link to={`/crypto/${c.uuid}`}>
              <Card
                title={`${c.rank}. ${c.name}`}
                extra={
                  <img
                    src={c.iconUrl}
                    className="crypto-image"
                    alt="currency img"
                  />
                }
                hoverable
              >
                <p>price: ${millify(c.price)}</p>
                <p>Marketcap: ${millify(c.marketCap)}</p>
                <p>Change: {`${millify(c.change)}%`}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
