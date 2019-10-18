import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.gif';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class EggLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <SubMenu
              key="sub0"
              title={
                <span>
                  <Icon type="team" />
                  <span>사용자 정보</span>
                </span>
              }
            >
              <Menu.Item key="0">
                <Link to="/page/daily/0">사용자</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/page/daily/1">사용자 그룹</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="table" />
                  <span>기준 정보</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/page/daily/2">농장</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/page/daily/3">부화장</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/page/daily/4">PLAZMA</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/page/iot/0">PROJECT</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/page/iot/1">계사</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/page/iot/2">거래처</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/page/iot/3">자재</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/page/iot/4">표준성적</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/page/iot/5">작업</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="share-alt" />
                  <span>생산 정보</span>
                </span>
              }
            >
              <Menu.Item key="11">
                <Link to="/page/iot/6">계군</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/page/iot/7">계사 입식</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to="/page/iot/8">이동</Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/popup/iot/0">육성</Link>
              </Menu.Item>
              <Menu.Item key="15">
                <Link to="/popup/iot/1">산란</Link>
              </Menu.Item>
              <Menu.Item key="16">
                <Link to="/popup/iot/2">입란</Link>
              </Menu.Item>
              <Menu.Item key="17">
                <Link to="/popup/iot/3">캔들링</Link>
              </Menu.Item>
              <Menu.Item key="18">
                <Link to="/popup/iot/4">부화</Link>
              </Menu.Item>
              <Menu.Item key="19">
                <Link to="/popup/iot/5">육성</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="number" />
                  <span>입/출고 정보</span>
                </span>
              }
            >
              <Menu.Item key="20">
                <Link to="/popup/common/1">입고</Link>
              </Menu.Item>
              <Menu.Item key="21">
                <Link to="/popup/common/2">출고</Link>
              </Menu.Item>
              <Menu.Item key="22">
                <Link to="/popup/common/3">판매/폐기</Link>
              </Menu.Item>
              <Menu.Item key="23">
                <Link to="/popup/common/4">계란 판매/폐기</Link>
              </Menu.Item>
              <Menu.Item key="24">
                <Link to="/page/pig/0">DOC 판매</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>대가리</Header>
          <Content style={{ margin: '16px 16px' }}>
            {/*
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Design ©2019 Created by Ezfarm
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default EggLayout;
