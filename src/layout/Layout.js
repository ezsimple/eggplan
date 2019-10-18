import React, { Component, Children, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import logo from '../images/logo.gif';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class EggLayout extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">gnb 1</Menu.Item>
            <Menu.Item key="2">gnb 2</Menu.Item>
            <Menu.Item key="3">gnb 3</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>snb 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>snb 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>snb 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    );
  }
}

export default EggLayout;
