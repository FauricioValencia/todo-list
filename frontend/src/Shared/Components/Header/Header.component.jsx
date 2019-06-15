import React from "react";
import {Link} from "react-router-dom"
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
const { Header } = Layout;
function HeaderComponent() {
  return (
    <Header style={{ zIndex: 1, width: "100%" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item ><Link to="/">Home</Link></Menu.Item>
        <Menu.Item ><Link to="/todo">Todo</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderComponent;
