import React from 'react';
import { Menu, Icon } from 'antd';
import { Trans } from 'react-i18next';
import qs from 'qs';
import MenuUtil from './MenuUtil';
import './Layout.module.css';

const { SubMenu } = Menu;

export default class BreedingMenu extends React.Component {
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
        <SubMenu
          key="_user"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>MEMBER</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="/breeding/member/0">
            <Trans>ID</Trans>
          </Menu.Item>
          <Menu.Item key="/breeding/group/0">
            <Trans>GROUP</Trans>
          </Menu.Item>
          <Menu.Item key="/breeding/roll/0">
            <Trans>ROLL</Trans>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/breeding/standard/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>STANDARD</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/work/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>WORK SCHEDULE</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/materials/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>MATERIALS</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/receive/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>RECEIVE</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/growing/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>GROWING LOG</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/egg/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>EGG PRODUCTION LOG</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/breeding/release/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>RELEASE</Trans>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
