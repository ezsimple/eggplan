import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import './Layout.module.css';

const { SubMenu } = Menu;

export default class BreedingMenu extends React.Component {
  state = {
    collapsed: false,
    target: ''
  };

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
        <SubMenu
          key="user0"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>MEMBER</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="user1">
            <Link to="/common/member/0">
              <Trans>ID</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user2">
            <Link to="/common/group/0">
              <Trans>GROUP</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user3">
            <Link to="/common/roll/0">
              <Trans>ROLL</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="std0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/standard/0">
              <Trans>STANDARD</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="work0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/work/0">
              <Trans>WORK SCHEDULE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="mat0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/materials/0">
              <Trans>MATERIALS</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rcv0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/receive/0">
              <Trans>RECEIVE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="grow0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/growing/0">
              <Trans>GROWING LOG</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="egg0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/egg/0">
              <Trans>EGG PRODUCTION LOG</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rel0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/release/0">
              <Trans>RELEASE</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
