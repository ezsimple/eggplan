import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
// import { Nav, NavItem, NavLink, Button } from 'reactstrap';

import styles from './Menu.module.scss';

import { observer, inject } from 'mobx-react';

@inject('TopMenuStore')
@observer
class Menu extends Component {

  render() {

    const store = this.props.TopMenuStore;
    console.log(store);

    let onClickMainTab = (id) => {
      return store.onClickMainTab(id)
    }

    let onClickSubTab = (id) => {
      return store.onClickSubTab(id)
    }

    let mainTab = store.mainTabId;
    let subTab = store.subTabId;

    console.log(`call render : main-${mainTab}, sub-${subTab}`);

    // 상위 메뉴 선택
    return (
      <div className={styles.menuarea}>
        <nav>
          <ul className={styles.tab}>
            <li
              className={
                mainTab === 0 ? (styles.m1, styles.current) : styles.m1
              }
              data-tab="tab1">
              <a href="#" onClick={() => onClickMainTab(0)}>
                일보
              </a>
            </li>
            <li
              className={
                mainTab === 1 ? (styles.m2, styles.current) : styles.m2
              }
              data-tab="tab2">
              <a href="#" onClick={() => onClickMainTab(1)}>
                IoT
              </a>
            </li>
            <li
              className={
                mainTab === 2 ? (styles.m3, styles.current) : styles.m3
              }
              data-tab="tab3">
              <a href="#" onClick={() => onClickMainTab(2)}>
                성적그래프
              </a>
            </li>
            <li
              className={
                mainTab === 3 ? (styles.m4, styles.current) : styles.m4
              }
              data-tab="tab4">
              <a href="#" onClick={() => onClickMainTab(3)}>
                양돈정보
              </a>
            </li>
          </ul>

          <div
            id="tab1"
            className={
              mainTab === 0
                ? (styles.tabcontent, styles.current)
                : styles.tabcontent
            }>
            <div className={styles.nav_h_type}>
              <ul>
                <li className={subTab === 0 ? styles.on : styles.off}>
                  <Link to="/pigBreedStatus">
                    <p onClick={() => onClickSubTab(0)}>사육현황</p>
                  </Link>
                </li>
                <li className={subTab === 1 ? styles.on : styles.off}>
                  <Link to="/pigMateStatus">
                    <p onClick={() => onClickSubTab(1)}>교배현황</p>
                  </Link>
                </li>
                <li className={subTab === 2 ? styles.on : styles.off}>
                  <Link to="/pigPregnentAccident">
                    <p onClick={() => onClickSubTab(2)}>임신사고현황</p>
                  </Link>
                </li>
                <li className={subTab === 3 ? styles.on : styles.off}>
                  <Link to="/pigProductStatus">
                    <p onClick={() => onClickSubTab(3)}>생산현황</p>
                  </Link>
                </li>
                <li
                  className={
                    subTab === 4
                      ? (styles.large, styles.on)
                      : (styles.large, styles.off)
                  }>
                  <Link to="/pigOtherStatus">
                    <p onClick={() => onClickSubTab(4)}>
                      전입 및 전출/폐사현황
                    </p>
                  </Link>
                </li>
                <li className={subTab === 5 ? styles.on : styles.off}>
                  <Link to="/pigTradeHis">
                    <p onClick={() => onClickSubTab(5)}>거래기록</p>
                  </Link>
                </li>
                <li className="last"></li>
              </ul>
            </div>
          </div>

          <div
            id="tab2"
            className={
              mainTab === 1
                ? (styles.tabcontent, styles.current)
                : styles.tabcontent
            }>
            <div className={styles.nav_h_type}>
              <ul>
                <li
                  className={
                    subTab === 0
                      ? (styles.large, styles.on)
                      : (styles.large, styles.off)
                  }>
                  <Link to="/momPigAutoFeed">
                    <p onClick={() => onClickSubTab(0)}>모돈자동급이기</p>
                  </Link>
                </li>
                <li className={subTab === 1 ? styles.on : styles.off}>
                  <Link to="/gunsaFeed">
                    <p onClick={() => onClickSubTab(1)}>군사급이기</p>
                  </Link>
                </li>
                <li className={subTab === 2 ? styles.on : styles.off}>
                  <Link to="/envSensor">
                    <p onClick={() => onClickSubTab(2)}>환경센서</p>
                  </Link>
                </li>
                <li className={subTab === 3 ? styles.on : styles.off}>
                  <Link to="/waterFeed">
                    <p onClick={() => onClickSubTab(3)}>음수관리기</p>
                  </Link>
                </li>
                <li className={subTab === 4 ? styles.on : styles.off}>
                  <Link to="/feedBin">
                    <p onClick={() => onClickSubTab(4)}>사료빈관리기</p>
                  </Link>
                </li>
                <li className={subTab === 5 ? styles.on : styles.off}>
                  <Link to="/pigSelector">
                    <p onClick={() => onClickSubTab(5)}>돈선별기</p>
                  </Link>
                </li>
                <li className={subTab === 6 ? styles.on : styles.off}>
                  <Link to="/youngPigFeed">
                    <p onClick={() => onClickSubTab(6)}>자돈급이기</p>
                  </Link>
                </li>
                <li className={subTab === 7 ? styles.on : styles.off}>
                  <Link to="/aircon">
                    <p onClick={() => onClickSubTab(7)}>냉방기</p>
                  </Link>
                </li>
                <li className={subTab === 8 ? styles.on : styles.off}>
                  <Link to="/elecFire">
                    <p onClick={() => onClickSubTab(8)}>전기화재</p>
                  </Link>
                </li>
                <li className="last"></li>
              </ul>
            </div>
          </div>

          <div
            id="tab4"
            className={
              mainTab === 3
                ? (styles.tabcontent, styles.current)
                : styles.tabcontent
            }>
            <div className={styles.nav_h_type}>
              <ul>
                <li className={subTab === 0 ? styles.on : styles.off}>
                  <Link to="/wholeSalePrice">
                    <p onClick={() => onClickSubTab(0)}>도매시세</p>
                  </Link>
                </li>
                <li className={subTab === 1 ? styles.on : styles.off}>
                  <Link to="/news">
                    <p onClick={() => onClickSubTab(1)}>양돈기사</p>
                  </Link>
                </li>
                <li className={subTab === 2 ? styles.on : styles.off}>
                  <Link to="/weather">
                    <p onClick={() => onClickSubTab(2)}>날씨</p>
                  </Link>
                </li>
                <li className="last"></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
