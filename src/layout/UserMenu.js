import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const { SubMenu } = Menu;

export default class UserMenu extends React.Component {
  state = {
    collapsed: false,
    target: ''
  };

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
