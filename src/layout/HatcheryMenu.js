import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import UserMenu from './UserMenu';
import './Layout.module.css';

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
          <Menu.Item key="user01">
            <Link to="/common/member/0">
              <Trans>ID</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user02">
            <Link to="/common/group/0">
              <Trans>GROUP</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user03">
            <Link to="/common/roll/0">
              <Trans>ROLL</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="rcv0"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>RECEIVE</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="rcv1">
            <Link to="/hatchery/rcvmng/0">
              <Trans>입고관리</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="rcv2">
            <Link to="/hatchery/rcvlist/0">
              <Trans>입고목록/입란</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="candle00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/candling/0">
              <Trans>CANDLING</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="hat00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/hatcher/0">
              <Trans>HATCHER</Trans>
            </Link>
          </span>
        </Menu.Item>

        <SubMenu
          key="trans0"
          title={
            <span>
              <Icon type="team" />
              <span>
                <Trans>TRANSFER</Trans>
              </span>
            </span>
          }
        >
          <Menu.Item key="trans1">
            <Link to="/hatchery/transegg/0">
              <Trans>계란</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="trans2">
            <Link to="/hatchery/transchick/0">
              <Trans>병아리</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="cut0">
          <Icon type="pie-chart" />
          <span>
            <Link to="/hatchery/cutting/0">
              <Trans>CUTTING</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
