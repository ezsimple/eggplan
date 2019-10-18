import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './MenuNav.module.scss'; // Local Scrollbar CSS

import { Trans } from 'react-i18next';

class MainMenuNav extends Component {
  handlerClick = e => {
    document.getElementById('submenu').scrollLeft = 0;
  };
  render() {
    const { cate, data } = this.props;
    return (
      <ul className="tab">
        {data.map((menu, i) => {
          const cname = 'm' + (parseInt(i, 10) + 1);
          const current_cname = cname + ' current';
          const route = '/page/' + menu.category + '/0';
          return (
            <li
              key={menu.category}
              className={cate === menu.category ? current_cname : cname}
            >
              <Link to={route} onClick={e => this.handlerClick}>
                <Trans>m.{menu.cate_name}</Trans>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

class SubMenuNav extends Component {
  render() {
    const { data, cate, id } = this.props;
    return (
      <div className="tabcontent current">
        <div id="submenu" className="nav_h_type" style={{ overflow: 'scroll' }}>
          <ul>
            {data.map((menu, i) => {
              const route = '/page/' + menu.category + '/' + menu.id;
              const name = menu.name;
              const on = name.length > 8 ? 'large on' : 'on';
              const off = name.length > 8 ? 'large off' : 'off';
              return (
                <li key={menu.id} className={id == menu.id ? on : off}>
                  <NavLink to={route}>
                    <p>
                      <Trans>m.{menu.name}</Trans>
                    </p>
                  </NavLink>
                </li>
              );
            })}
            <li className="last"></li>
          </ul>
        </div>
      </div>
    );
  }
}

export { MainMenuNav, SubMenuNav };
