import React, { Component } from 'react';

import { Layout, Row, Col, Divider, Icon, Dropdown, Button } from 'antd';
import MyMenu from './menu'

class MainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <Row className="wrap">
          <Col md={6} xs={24}>
            <h1 id="logo">
              CNode
            </h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type="vertical" className="headerDivider" />
            <MyMenu id="nav" mode="horizontal" />
          </Col>
          <Col md={0} xs={24} className="xsNav">
            <Dropdown overlay={
              <MyMenu id="xsNav" mode="vertical" />
            } trigger={["click","touchend"]} placement="bottomRight">
              <Button><Icon type="bars" /></Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
export default MainHeader;