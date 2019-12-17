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
        <Menu.Item key="rcv00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/receive/00">
              <Trans>RECEIVE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="grow00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/growing/00">
              <Trans>GROWING</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rel00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/broiler/transfer/00">
              <Trans>TRANSFER</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
