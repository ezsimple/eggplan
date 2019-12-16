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
    );
  }
}
