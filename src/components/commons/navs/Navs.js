import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import styles from './Navs.module.scss';

import { DateUtil } from 'utils';

// @inject('TopMenuStore')
// @observer
class Navs extends Component {
  constructor(props) {
    super(props);
    console.log('Navs:props', this.props);
  }
  render() {
    // const { TopMenuStore } = this.props;
    // let toggle0 = TopMenuStore.toggle0;
    // let toggle1 = TopMenuStore.toggle1;
    // let toggle2 = TopMenuStore.toggle2;
    // let toggle3 = TopMenuStore.toggle3;
    // let toggle4 = TopMenuStore.toggle4;

    // let fadeIn0 = TopMenuStore.fadeIn0;
    // let fadeIn1 = TopMenuStore.fadeIn1;
    // let fadeIn2 = TopMenuStore.fadeIn2;
    // let fadeIn3 = TopMenuStore.fadeIn3;
    // let fadeIn4 = TopMenuStore.fadeIn4;

    return (
      <Fragment>
        <br></br>
        <div>
          <Link to="/page/daily/0">
            <Button outline color="primary" className="ml2 fl">
              사육현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/page/daily/1">
            <Button outline color="primary" className="ml2 fl">
              교배현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/page/daily/2">
            <Button outline color="primary" className="ml2 fl">
              임신사고현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/page/daily/3">
            <Button outline color="primary" className="ml2 fl">
              생산현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/page/daily/4">
            <Button outline color="primary" className="ml2 fl">
              전입 및 전출/폐사현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/page/daily/5">
            <Button outline color="primary" className="ml2 fl">
              거래기록
            </Button>
          </Link>
        </div>
        <div style={{ margin: '0', clear: 'both' }} />

        <br></br>
        <div className="item">
          <Link to="/page/iot/0">
            <Button outline color="primary" className="ml2 fl">
              모돈자동급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/1">
            <Button outline color="primary" className="ml2 fl">
              군사급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/2">
            <Button outline color="primary" className="ml2 fl">
              환경센서
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/3">
            <Button outline color="primary" className="ml2 fl">
              음수관리기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/4">
            <Button outline color="primary" className="ml2 fl">
              사료빈관리기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/5">
            <Button outline color="primary" className="ml2 fl">
              돈선별기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/6">
            <Button outline color="primary" className="ml2 fl">
              자돈급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/7">
            <Button outline color="primary" className="ml2 fl">
              냉방기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/iot/8">
            <Button outline color="primary" className="ml2 fl">
              전기화재
            </Button>
          </Link>
        </div>
        <div style={{ clear: 'both' }} />

        <br></br>
        <div className="item">
          <Link to="/page/pig/0">
            <Button outline color="primary" className="ml2 fl">
              도매시세
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/pig/1">
            <Button outline color="primary" className="ml2 fl">
              양돈기사
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/pig/2">
            <Button outline color="primary" className="ml2 fl">
              날씨
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/quick/0">
            <Button outline color="primary" className="ml2 fl">
              퀵메뉴#0
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/quick/1">
            <Button outline color="primary" className="ml2 fl">
              퀵메뉴#1
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/page/quick/2">
            <Button outline color="primary" className="ml2 fl">
              퀵메뉴#2
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/page/quick/3">
            <Button outline color="primary" className="ml2 fl">
              퀵메뉴#3
            </Button>
          </Link>
        </div>
        <div style={{ clear: 'both' }} />

        <br></br>
        <div className="item">
          <Link to="/popup/iot/0">
            <Button outline color="secondary" className="ml2 fl">
              모돈 자동급이기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/1">
            <Button outline color="secondary" className="ml2 fl">
              군사급이기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/2">
            <Button outline color="secondary" className="ml2 fl">
              환경센서 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/3">
            <Button outline color="secondary" className="ml2 fl">
              음수관리기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/4">
            <Button outline color="secondary" className="ml2 fl">
              돈선별기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/5">
            <Button outline color="secondary" className="ml2 fl">
              자돈급이기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/6">
            <Button outline color="secondary" className="ml2 fl">
              냉방기 설정
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/iot/7">
            <Button outline color="secondary" className="ml2 fl">
              전기,화재 설정
            </Button>
          </Link>
        </div>

        <div style={{ clear: 'both' }} />

        <br></br>
        <div className="item">
          <Link to="/page/common/0">
            <Button outline color="info" className="ml2 fl">
              로그인
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/common/1">
            <Button outline color="info" className="ml2 fl">
              초기 로딩 화면
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/page/common/2">
            <Button outline color="info" className="ml2 fl">
              코치 화면
            </Button>
          </Link>
        </div>
        <div style={{ clear: 'both' }} />

        <br></br>
        <div className="item">
          <Link to="/popup/common/4">
            <Button outline color="success" className="ml2 fl">
              퀵메뉴 추가
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/common/1">
            <Button outline color="success" className="ml2 fl">
              QR
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/common/2">
            <Button outline color="success" className="ml2 fl">
              마이페이지
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popup/common/3">
            <Button outline color="success" className="ml2 fl">
              햄버거메뉴
            </Button>
          </Link>
        </div>
        <div style={{ clear: 'both' }} />
        <br></br>

        <div className="item">
          <Link to="/popup/etc/0">
            <Button outline color="success" className="ml2 fl">
              알람 설정
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/1">
            <Button outline color="success" className="ml2 fl">
              예정돈
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/2">
            <Button outline color="success" className="ml2 fl">
              상세교배기록
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/3">
            <Button outline color="success" className="ml2 fl">
              교배기록
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/4">
            <Button outline color="success" className="ml2 fl">
              모돈카드
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/5">
            <Button outline color="success" className="ml2 fl">
              설정
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/6">
            <Button outline color="success" className="ml2 fl">
              필요작업표
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/7">
            <Button outline color="success" className="ml2 fl">
              광고#0
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/8">
            <Button outline color="success" className="ml2 fl">
              광고#1
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/9">
            <Button outline color="success" className="ml2 fl">
              광고#2
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/10">
            <Button outline color="success" className="ml2 fl">
              광고#3
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/11">
            <Button outline color="success" className="ml2 fl">
              광고#4
            </Button>
          </Link>
        </div>
        <div className="item">
          <Link to="/popup/etc/12">
            <Button outline color="success" className="ml2 fl">
              광고#5
            </Button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Navs;
