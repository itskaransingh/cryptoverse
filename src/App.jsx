import { Routes, Route, Link } from "react-router-dom";
// import {useState} from 'react';
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  Exchanges,
  News,
  Cryptodetails,
} from "./components";
import "./App.css";
// import {useGetCryptosQuery} from './services/cryptocurrenciesapi'

function App() {
// const [count, setcount] = useState(10)
// const{data,isFetching}=useGetCryptosQuery(count)
// const [currencies, setcurrencies] = useState(data?.data)
// if(isFetching)return"loading..."

  return (
    <div className="app">
      {/* <Layout> */}

      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route exact path="/news" element={<News />}></Route>
              <Route
                exact
                path="/crypto/:cryptoid"
                element={<Cryptodetails />}
              ></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022
            <Link to="/"> Cryptoverse Inc.</Link> <br />
            All Rights Reserved. <br />
            <br />
            Made By Karan Singh
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
