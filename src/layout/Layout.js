import React from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.gif';
import { Trans } from 'react-i18next';
import i18n from 'i18next';

import { BreedingRouteList, HatcheryRouteList, BroilerRouteList } from 'route';
import { BreedingMenu, BroilerMenu, HatcheryMenu } from 'layout';
import './Layout.module.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class EggLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      menu: '' // breeding(종계), broiler(육계), hatchery(부화)
    };
    this.pathname = window.location.pathname;
    this.isBreeding = this.pathname.indexOf('/breeding/') > -1;
    this.isBroiler = this.pathname.indexOf('/broiler/') > -1;
    this.isHatchery = this.pathname.indexOf('/hatchery/') > -1;
  }

  componentDidMount() {
    if (this.isBreeding) {
      this.setState({ menu: 'breeding', typeName: i18n.t('종계') });
    }
    if (this.isHatchery) {
      this.setState({ menu: 'hatchery', typeName: i18n.t('부화') });
    }
    if (this.isBroiler) {
      this.setState({ menu: 'broiler', typeName: i18n.t('육계') });
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // 대메뉴 항목 변경 메소드
  onTypeChange = e => {
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
              onChange={e => this.onTypeChange(e)}
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
              <Breadcrumb.Item>{this.state.typeName}</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Designed by React ©2019 Ezfarm
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default EggLayout;
