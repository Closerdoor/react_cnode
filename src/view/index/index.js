import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

let arr = [];
for(let i = 0; i < 100; i++) {
  arr.push(<li>这是第i个 li</li>)
}
class Index extends Component {
  render() {
    return (
      <Row className="wrap">
        <Col md={6}>
          <Menu id="indexMenu">
            <Menu.Item>
              <Link to="/index/all">全部</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/good">精华</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/ask">问题</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/share">分享</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/job">招聘</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/dev">测试</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className="indexList" md={18}>
          {arr}
        </Col>
      </Row>
    )
  }
}
export default Index;