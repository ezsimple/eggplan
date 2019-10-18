import React, { Component, Fragment } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './ElecFire.module.scss';
import { Trans } from 'react-i18next';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class ElecFire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
      date1: null,
      focused1: null
    };
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div className="pig-container">
          <div className="pig-search">
            <label htmlFor=""><Trans>m.기준월</Trans></label>
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
          </div>

          <div className="con_search">
            <button className="btn_type3">
              <i className="mdi mdi-magnify"></i><Trans>m.조회하기</Trans>
            </button>
          </div>

          <div className="con_time">
            <i className="mdi mdi-timetable"></i> 2019.07.22 15:20
          </div>

          <div className="board-list-s mT20">
            <table>
              <colgroup>
                <col style={{ width: '50%' }} />
                <col style={{ width: '25%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th><Trans>m.구분</Trans></th>
                  <th><Trans>m.경고</Trans></th>
                  <th><Trans>m.위험</Trans></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><Trans>m.과전류</Trans></th>
                  <td className="orange">9</td>
                  <td className="red">5</td>
                </tr>
                <tr>
                  <th><Trans>m.전체누설전류</Trans></th>
                  <td className="orange">0</td>
                  <td className="red">0</td>
                </tr>
                <tr>
                  <th><Trans>m.저항성누설전류</Trans></th>
                  <td className="orange">9</td>
                  <td className="red">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="top-btn">
            <Link to="/popup/iot/7">
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

export default ElecFire;
