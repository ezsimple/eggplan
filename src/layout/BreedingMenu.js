import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

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
          key="user00"
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
            <Link to="/common/member/00">
              <Trans>ID</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user02">
            <Link to="/common/group/00">
              <Trans>GROUP</Trans>
            </Link>
          </Menu.Item>
          <Menu.Item key="user03">
            <Link to="/common/roll/00">
              <Trans>ROLL</Trans>
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="std00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/standard/00">
              <Trans>STANDARD</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="work00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/work/00">
              <Trans>WORK SCHEDULE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="mat00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/matrials/00">
              <Trans>MATRIALS</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rcv00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/receive/00">
              <Trans>RECEIVE</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="grow00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/growing/00">
              <Trans>GROWING LOG</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="egg00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/egg/00">
              <Trans>EGG PRODUCTION LOG</Trans>
            </Link>
          </span>
        </Menu.Item>

        <Menu.Item key="rel00">
          <Icon type="pie-chart" />
          <span>
            <Link to="/breeding/release/00">
              <Trans>RELEASE</Trans>
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
