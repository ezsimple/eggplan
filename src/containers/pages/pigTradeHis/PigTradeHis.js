import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './PigTradeHis.module.scss';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class PigTradeHis extends Component {
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
            <Trans>m.거래기록</Trans>
          </h2>
          <div className="board-list">
            <table>
              <colgroup>
                <col style={{ width: '8%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '12%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col style={{ width: '8%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th rowSpan="2">
                    <Trans>m.구분</Trans>
                  </th>
                  <th colSpan="3">
                    <Trans>m.사료비</Trans>
                  </th>
                  <th rowSpan="2">
                    <Trans>m.방역치료비</Trans>
                  </th>
                  <th colSpan="6">
                    <Trans>m.출하수익</Trans>
                  </th>
                </tr>
                <tr>
                  <th>
                    <Trans>m.물량</Trans>
                  </th>
                  <th>
                    <Trans>m.금액</Trans>
                  </th>
                  <th>
                    <Trans>m.단가</Trans>
                  </th>
                  <th>
                    <Trans>m.두수</Trans>
                  </th>
                  <th>
                    <Trans>m.생체중</Trans>(kg)
                  </th>
                  <th>
                    <Trans>m.지육</Trans>(kg)
                  </th>
                  <th>
                    <Trans>m.금액</Trans>
                  </th>
                  <th>
                    <Trans>m.두당금액</Trans>
                  </th>
                  <th>
                    <Trans>m.지육단가</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Trans>m.일계</Trans>
                  </td>
                  <td>88</td>
                  <td className="txt-right">32,000,458</td>
                  <td className="txt-right">500,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="txt-right">500,000</td>
                  <td className="txt-right">500,000</td>
                  <td className="txt-right">500,000</td>
                </tr>
                <tr>
                  <td>
                    <Trans>m.월계</Trans>
                  </td>
                  <td>215</td>
                  <td className="txt-right">32,000,458</td>
                  <td className="txt-right">500,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="txt-right">500,000</td>
                  <td className="txt-right">500,000</td>
                  <td className="txt-right">500,000</td>
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

export default PigTradeHis;
