import React, { Component, Fragment } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

import styles from './EnvSensor.module.scss';

class EnvSensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
    };
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div className="pig-container">
          <div className="pig-search">
            <label htmlFor=""><Trans>m.측정일</Trans></label>

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
            <button className="btn_type3"><i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans></button>
          </div>

          <div className="con_time">
            <i className="mdi mdi-timetable"></i> 2019.07.22 15:20
          </div>

          <div className="board-list-s mT20">
            <table>
              <colgroup>
                <col style={{ width: '40%' }} />
                <col style={{ width: '30%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th rowSpan="2"><Trans>m.온도</Trans></th>
                  <th><Trans>m.최고</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th><Trans>m.최저</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th rowSpan="2">
                    <Trans>m.습도</Trans>
                    <br />
                    (%)
                  </th>
                  <th><Trans>m.최고</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th><Trans>m.최저</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th rowSpan="2">
                    <Trans>m.이산화탄소</Trans>
                    <br />
                    (ppm)
                  </th>
                  <th><Trans>m.최고</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th><Trans>m.최저</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th rowSpan="2" className="lastline">
                    <Trans>m.암모니아</Trans>
                    <br />
                    (ppm)
                  </th>
                  <th><Trans>m.최고</Trans></th>
                  <td>0.0</td>
                </tr>
                <tr>
                  <th><Trans>m.최저</Trans></th>
                  <td>0.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="top-btn">
            <Link to="/popup/iot/2">
              <button className="btn-equi"><Trans>m.기기제어</Trans></button>
            </Link>
            <button className="btn-excel f-right"><Trans>m.엑셀다운</Trans></button>
          </div>

        </div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default EnvSensor;
