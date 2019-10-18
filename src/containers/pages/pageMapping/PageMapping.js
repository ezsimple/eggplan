/*
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import styles from './PageMapping.module.scss';

@inject('TopMenuStore')
@observer
class PageMapping extends Component {
  constructor(props) {
    super(props)
    console.log('props:',this.props)
  }
  render() {
    const { TopMenuStore } = this.props;
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
        <div>
        <div>
          <Link to="/pigBreedStatus">
            <Button outline color="primary" className="ml2 fl">
              사육현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/pigMateStatus">
            <Button outline color="primary" className="ml2 fl">
              교배현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/pigPregnentAccident">
            <Button outline color="primary" className="ml2 fl">
              임신사고현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/pigProductStatus">
            <Button outline color="primary" className="ml2 fl">
              생산현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/pigOtherStatus">
            <Button outline color="primary" className="ml2 fl">
              전입 및 전출/폐사현황
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/pigTradeHis">
            <Button outline color="primary" className="ml2 fl">
              거래기록
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/momPigAutoFeed">
            <Button outline color="primary" className="ml2 fl">
              모돈자동급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/gunsaFeed">
            <Button outline color="primary" className="ml2 fl">
              군사급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/envSensor">
            <Button outline color="primary" className="ml2 fl">
              환경센서
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/waterFeed">
            <Button outline color="primary" className="ml2 fl">
              음수관리기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/feedBin">
            <Button outline color="primary" className="ml2 fl">
              사료빈관리기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/pigSelector">
            <Button outline color="primary" className="ml2 fl">
              돈선별기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/youngPigFeed">
            <Button outline color="primary" className="ml2 fl">
              자돈급이기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/aircon">
            <Button outline color="primary" className="ml2 fl">
              냉방기
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/popaircon0">
            <Button outline color="primary" className="ml2 fl">
              냉방기 알람 팝업
            </Button>
          </Link>
        </div>

        <div className="item">
          <Link to="/elecFire">
            <Button outline color="primary" className="ml2 fl">
              전기화재
            </Button>
          </Link>
        </div>
            <div className="item">
              <Link to="/wholeSalePrice">
                <Button outline color="primary" className="ml2 fl">
                  도매시세
                </Button>
              </Link>
            </div>

            <div className="item">
              <Link to="/news">
                <Button outline color="primary" className="ml2 fl">
                  양돈기사
                </Button>
              </Link>
            </div>

            <div className="item">
              <Link to="/weather">
                <Button outline color="primary" className="ml2 fl">
                  날씨
                </Button>
              </Link>
            </div>
        </div>
        <div style={{ clear: 'both' }} />

      </Fragment>
    );
  }
}

export default PageMapping;
*/
