import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './PigProductStatus.module.scss';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class PigProductStatus extends Component {
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
            <Trans>m.생산현황</Trans>
          </h2>
          <div className="board-list">
            <table>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col style={{ width: '6%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th rowSpan="2">
                    <Trans>m.구분</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.분만</Trans>
                    <Trans>m.복수</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.총산</Trans>
                  </th>
                  <th colSpan="2">
                    <Trans>m.생시사고</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.실산</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.자돈당체중</Trans>
                  </th>
                  <th colSpan="2">
                    <Trans>m.양자</Trans>
                  </th>
                  <th colSpan="4">
                    <Trans>m.포유중사고</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.이유복수</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.이유두수</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.자돈당체중</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.이유일령</Trans>
                  </th>
                </tr>
                <tr>
                  <th>
                    <Trans>m.미라</Trans>
                  </th>
                  <th>
                    <Trans>m.사산</Trans>
                  </th>
                  <th>
                    <Trans>m.전입</Trans>
                  </th>
                  <th>
                    <Trans>m.전출</Trans>
                  </th>
                  <th>
                    <Trans>m.도태</Trans>
                  </th>
                  <th>
                    <Trans>m.압사</Trans>
                  </th>
                  <th>
                    <Trans>m.설사</Trans>
                  </th>
                  <th>
                    <Trans>m.기타</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Trans>m.일계</Trans>
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

export default PigProductStatus;
