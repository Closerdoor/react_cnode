import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

export default class MyMenu extends Component {
  render() {
    let { mode, id } = this.props;
    return (
      <Menu id={id} mode={mode} theme="light">
        <Menu.Item>
          <Link to="/index"><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/book"><Icon type="book" />教程</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about"><Icon type="info-circle" />关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}