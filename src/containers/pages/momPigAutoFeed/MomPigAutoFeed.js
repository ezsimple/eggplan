import React, { Component, Fragment } from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './MomPigAutoFeed.module.scss';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class MomPigAutoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
    };
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div className="pig-container">
          <div className="pig-search">
            <label htmlFor=""><Trans>m.이유일</Trans></label>
            {/* datepicker 사용법 */}
            <SingleDatePicker
              placeholder="일자"
              date={DateUtil.now(this.state.date)} // momentPropTypes.momentObj or null
              displayFormat="YYYY-MM-DD" // 날짜 형식 변경을 위해서 필요.
              onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => {
                this.setState({ focused });
              }} // PropTypes.func.isRequired
              numberOfMonths={1}
              withPortal //모달
              showDefaultInputIcon
              showClearDate
              readOnly
              id={'datepicker1'} // PropTypes.string.isRequired,
            />
            <label htmlFor="" className="both">
              <Trans>m.장소</Trans>
            </label>
            <select id="" name="" title="" className="sel-type1">
              <option value="">전체</option>
              <option value="">-</option>
            </select>
          </div>
          <div className="con_search">
            <button className="btn_type3">
              <i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans>
            </button>
          </div>

          <h2><Trans>m.이유모돈</Trans> : 10<Trans>m.마리</Trans></h2>
          <div className="board-box">
            <div className="board-list2">
              <table>
                <colgroup>
                  <col style={{ width: '50%' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th><Trans>m.총사료섭취량</Trans></th>
                    <td>32,200(kg)</td>
                  </tr>
                  <tr>
                    <th><Trans>m.평균사료섭취량</Trans></th>
                    <td>322,200(kg)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="board-list-s mT20">
            <table>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '32%' }} />
                <col style={{ width: '32%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th><Trans>m.상태</Trans></th>
                  <th><Trans>m.이유모돈</Trans></th>
                  <th colSpan="2"><Trans>m.사료섭취량</Trans>(kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="red">●</td>
                  <td>SF-210</td>
                  <td>2,520</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="orange">●</td>
                  <td>SF-210</td>
                  <td>520</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="green">●</td>
                  <td>SF-210</td>
                  <td>2,520</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="red">●</td>
                  <td>SF-210</td>
                  <td>20</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="orange">●</td>
                  <td>SF-210</td>
                  <td>2,520</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="green">●</td>
                  <td>SF-210</td>
                  <td>2,520</td>
                  <td>
                    <a href="#">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="top-btn">
            <Link to="/popup/iot/0">
              <button className="btn-equi"><Trans>m.기기제어</Trans></button>
            </Link>
            <Link to="/download/0">
              <button className="btn-excel f-right"><Trans>m.엑셀다운</Trans></button>
            </Link>
          </div>
        </div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default MomPigAutoFeed;
