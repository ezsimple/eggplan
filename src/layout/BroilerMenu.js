import React from 'react';
import { Menu, Icon } from 'antd';
import { Trans } from 'react-i18next';
import qs from 'qs';
import MenuUtil from './MenuUtil';
import './Layout.module.css';

const { SubMenu } = Menu;

export default class BroilerMenu extends React.Component {
  state = {
    collapsed: false,
    target: '',
    openKeys: [],
    selectedKeys: []
  };

  UNSAFE_componentWillMount() {
    const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    console.log('query : ', query);
    const selectedKey = MenuUtil.fnMenuSelectedKey();
    const openKey = MenuUtil.fnMenuOpenKey();
    this.setState({
      selectedKeys: [selectedKey],
      openKeys: [openKey]
    });
  }

  render() {
    return (
      <Menu
        onClick={e => MenuUtil.fnMenuClick(e, this.state, this.props)}
        theme="dark"
        // style={{ width: 256 }}
        defaultSelectedKeys={this.state.selectedKeys}
        defaultOpenKeys={this.state.openKeys}
        mode="inline"
      >
        <Menu.Item key="/broiler/receive/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>RECEIVE</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/broiler/growing/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>GROWING</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/broiler/transfer/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>TRANSFER</Trans>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
