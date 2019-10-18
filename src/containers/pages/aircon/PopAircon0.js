import React, { Component, Fragment, Div } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

import styles from './Aircon.module.scss';

import { Trans } from 'react-i18next';

class PopAircon0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
    };
  }

  // 페이지 로딩시 Top으로 스크롤
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 입니다. */}
        <div className="pig-container">
          <div className="pig-search">
            <label htmlFor=""><Trans>m.기준일</Trans></label>
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
            <label htmlFor=""><Trans>m.장소</Trans></label>
            <select id="" name="" title="" className="sel-type1">
              <option value="">비육1방</option>
              <option value="">-</option>
              <option value="">-</option>
            </select>
          </div>
          <div className="con_search">
            <button className="btn_type3"><i className="mdi mdi-magnify"></i><Trans>m.조회하기</Trans></button>
          </div>

          <div className="board-box mT40">
            <div className="board-list2">
              <table>
                <colgroup>
                  <col style={{ width: '60%' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th><Trans>m.설정온도</Trans></th>
                    <td>℃</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mT20 mB20">
            <button className="btn-type1"><Trans>m.설정</Trans></button>
          </div>

          <div className="board-list-s mT20">
            <table>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '30%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th><Trans>m.설정온도</Trans></th>
                  <th><Trans>m.현재온도</Trans></th>
                  <th>℃</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 디자인 영역 입니다. */}
      </Fragment>
    );
  }
}

export default PopAircon0;
