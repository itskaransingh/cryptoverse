import React, { useState, useEffect } from "react";
import { Avatar, Typography, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
} from "@ant-design/icons";
import logo from "../images/cryptocurrency.png";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [activemenu, setactivemenu] = useState(true);
  const [screen, setscreen] = useState();
  useEffect(() => {
    const handleresize = () => setscreen(window.innerWidth);
    window.addEventListener("resize", handleresize);
    handleresize();
    window.removeEventListener("resize", handleresize);
    
  }, []);

  useEffect(() => {
    screen < 768 ? setactivemenu(false) : setactivemenu(true);
  }, [screen]);

const menuItems = [
  {
    label:(
      <Link to="/">Home</Link>
    ),
    icon: <HomeOutlined  style={{ transform: "translateY(-1px)" }} />
  },
  {
    label:(
      <Link to="/cryptocurrencies" >Cryptocurrencies</Link>
    ),
    icon:<MoneyCollectOutlined style={{ transform: "translateY(0px)" }} />

  },
  {
    label:(
      <Link to="/news">News</Link>
    ),
    icon: <FundOutlined style={{ transform: "translateY(-1px)" }} />
  },
]
  
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div>
          {" "}
          <Avatar src={logo} size="large" />{" "}
        </div>
        <Typography.Title
          level={2}
          className="logo"
          style={{ paddingTop: "10px" }}
        >
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setactivemenu(!activemenu)}
        >
          <BiMenu style={{ fontSize: "25px", color: "white" }} />
        </Button>
      </div>

      {activemenu ? (
        <Menu theme="dark" items={menuItems}>
          {/* <Menu.Item
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
            icon={<FundOutlined style={{ transform: "translateY(-1px)" }} />}
          >
            <Link to="/news">News</Link>
          </Menu.Item> */}
        </Menu>
      ):null}
    </div>
  );
};

export default Navbar;
