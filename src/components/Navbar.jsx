import React from "react";
import { Avatar, Typography, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import logo from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>

      <Menu theme="dark">
        <Menu.Item
          icon={<HomeOutlined style={{ transform: "translateY(-1px)" }} />}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          icon={
            <MoneyCollectOutlined style={{ transform: "translateY(0px)" }} />
          }
        >
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item
          icon={<BulbOutlined style={{ transform: "translateY(-1px)" }} />}
        >
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item
          icon={<FundOutlined style={{ transform: "translateY(-1px)" }} />}
        >
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
