import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const { SubMenu } = Menu;

export default class HatcheryMenu extends React.Component {
  state = {
    collapsed: false,
    target: ''
  };

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
        <SubMenu
          key="rcv00"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>RECEIVE</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="rcv01">
            <Link to="/hatchery/receive/00">
              <Trans>입고관리</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="rcv02">
            <Link to="/hatchery/receive/10">
              <Trans>입고목록/입란</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="candle00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/candling/00">
              <Trans>CANDLING</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="hat00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/hatcher/00">
              <Trans>HATCHER</Trans>
            </Link>
          </span>
        </Menu.Item>

        <SubMenu
          key="trans00"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>TRANSFER</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="trans01">
            <Link to="/hatchery/transfer/00">
              <Trans>계란</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="trans02">
            <Link to="/hatchery/transfer/10">
              <Trans>병아리</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="cut00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/cutting/00">
              <Trans>CUTTING</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
