import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.gif';
import { Trans } from 'react-i18next';
import i18n from 'i18next';

import { BreedingMenu, BroilerMenu, HatcheryMenu } from 'layout';
import './Layout.module.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class EggLayout extends React.Component {
  state = {
    collapsed: false,
    menu: '' // breeding(종계), broiler(육계), hatchery(부화)
  };

  componentDidMount() {
    const pathname = window.location.pathname;
    const isBreeding = pathname.indexOf('/breeding/') > -1;
    const isBroiler = pathname.indexOf('/broiler/') > -1;
    const isHatchery = pathname.indexOf('/hatchery/') > -1;
    if (isBreeding) {
      this.setState({ menu: 'breeding' });
    }
    if (isBroiler) {
      this.setState({ menu: 'broiler' });
    }
    if (isHatchery) {
      this.setState({ menu: 'hatchery' });
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onCateChange = e => {
    const menu = e.target.value || 'breeding';
    this.setState({ menu: menu });
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
          <div>
            <select
              id="mainCategory"
              name="mainCategory"
              title=""
              className=""
              onChange={e => this.onCateChange(e)}
              value={this.state.menu}
            >
              <option value="breeding">{i18n.t('종계')}</option>
              <option value="hatchery">{i18n.t('부화')}</option>
              <option value="broiler">{i18n.t('육계')}</option>
            </select>
          </div>
          {this.state.menu == 'breeding' && <BreedingMenu {...this.props} />}
          {this.state.menu == 'hatchery' && <HatcheryMenu {...this.props} />};
          {this.state.menu == 'broiler' && <BroilerMenu {...this.props} />}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>헤더</Header>
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
            Designed as a React ©2019 Created by Ezfarm
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default EggLayout;
