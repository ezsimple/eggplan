import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './PigPregenentAccient.module.scss';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class PigPregnentAccident extends Component {
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
            <label htmlFor="">
              <Trans>m.기준일</Trans>
            </label>
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
              <i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans>
            </button>
          </div>

          <h2>
            <Trans>m.임신사고현황</Trans>
          </h2>
          <div className="board-list">
            <table>
              <colgroup>
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col style={{ width: '7%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Trans>m.사고복수</Trans>
                  </th>
                  <th>
                    <Trans>m.재발불임</Trans>
                  </th>
                  <th>
                    <Trans>m.유산</Trans>
                  </th>
                  <th>
                    <Trans>m.도태</Trans>
                  </th>
                  <th>
                    <Trans>m.폐사</Trans>
                  </th>
                  <th>
                    <Trans>m.전출</Trans>
                  </th>
                  <th>
                    <Trans>m.임돈</Trans>
                    <Trans>m.판매</Trans>
                  </th>
                  <th>
                    <Trans>m.17일</Trans>
                    <Trans>이하</Trans>
                  </th>
                  <th>
                    <Trans>m.18~25일</Trans>
                  </th>
                  <th>
                    <Trans>m.26~37일</Trans>
                  </th>
                  <th>
                    <Trans>m.38~46일</Trans>
                  </th>
                  <th>
                    <Trans>m.47~80일</Trans>
                  </th>
                  <th>
                    <Trans>m.81일</Trans>
                    <Trans>m.이상</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Trans>m.금일</Trans>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Trans>m.월계</Trans>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="top-btn">
            <button className="btn-excel f-right">
              <Trans>m.엑셀다운</Trans>
            </button>
          </div>
        </div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default PigPregnentAccident;
