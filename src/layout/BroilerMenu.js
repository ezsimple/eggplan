import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import './Layout.module.css';

const { SubMenu } = Menu;

export default class BroilerMenu extends React.Component {
  state = {
    collapsed: false,
    target: ''
  };

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
        <Menu.Item key="rcv0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/receive/0">
              <Trans>RECEIVE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="grow0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/growing/0">
              <Trans>GROWING</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rel0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/transfer/0">
              <Trans>TRANSFER</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
