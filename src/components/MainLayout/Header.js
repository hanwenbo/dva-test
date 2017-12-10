import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >

      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />主页</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />用户</Link>
      </Menu.Item>
      <Menu.Item key="/article">
        <Link to="/article"><Icon type="bars" />文章</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
