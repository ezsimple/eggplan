import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { CategoryList, GetMenuNavPages } from 'route/RouteTable';
import { MainMenuNav, SubMenuNav } from './MenuNav';
import { element } from 'prop-types';

// import { Nav, NavItem, NavLink, Button } from 'reactstrap';
// import styles from './Menu.module.scss';
// import classNames from 'classnames/bind';
// const cn = classNames.bind(styles);

class Menu extends Component {
  render() {
    const { cate, id } = this.props;
    const route_table = GetMenuNavPages(cate);

    return (
      <div className="menuarea">
        <nav>
          {/* 메인 메뉴 네비게이션 */}
          <MainMenuNav cate={cate} data={CategoryList} />

          {/* 서브 메뉴 네비게이션 */}
          <SubMenuNav cate={cate} id={id} data={route_table} />
        </nav>
      </div>
    );
  }
}

export default Menu;
