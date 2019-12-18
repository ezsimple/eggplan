import React from 'react';
import { Menu, Icon } from 'antd';
import { Trans } from 'react-i18next';
import qs from 'qs';
import MenuUtil from './MenuUtil';
import './Layout.module.css';

const { SubMenu } = Menu;

export default class HatcheryMenu extends React.Component {
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
          <Menu.Item key="/hatchery/member/0">
            <Trans>ID</Trans>
          </Menu.Item>
          <Menu.Item key="/hatchery/group/0">
            <Trans>GROUP</Trans>
          </Menu.Item>
          <Menu.Item key="/hatchery/roll/0">
            <Trans>ROLL</Trans>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="_rcv"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>RECEIVE</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="/hatchery/rcvmng/0">
            <Trans>입고관리</Trans>
          </Menu.Item>
          <Menu.Item key="/hatchery/rcvlist/0">
            <Trans>입고목록/입란</Trans>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/hatchery/candling/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>CANDLING</Trans>
          </span>
        </Menu.Item>

        <Menu.Item key="/hatchery/hatcher/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>HATCHER</Trans>
          </span>
        </Menu.Item>

        <SubMenu
          key="_trans"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>TRANSFER</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="/hatchery/transegg/0">
            <Trans>계란</Trans>
          </Menu.Item>
          <Menu.Item key="/hatchery/transchick/0">
            <Trans>병아리</Trans>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="/hatchery/cutting/0">
          <Icon type="pie-chart" />
          <span>
            <Trans>CUTTING</Trans>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
