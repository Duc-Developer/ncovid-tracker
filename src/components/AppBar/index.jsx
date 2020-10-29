import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function AppBar() {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      {/* <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
      <Menu.Item key="github">
        <a
          href="https://github.com/Duc-Developer/ncovid-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default AppBar;
