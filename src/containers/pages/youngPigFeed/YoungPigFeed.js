import React, { Component, Fragment } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';
import styles from './YoungPigFeed.module.scss';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class YoungPigFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
      date1: null,
      focused1: null,
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
            <label htmlFor="" className="both">
              <Trans>m.장소</Trans>
            </label>
            <select id="" name="" title="" className="sel-type1">
              <option value="">전체</option>
              <option value="">-</option>
            </select>
            <label htmlFor="" className="both">
              <Trans>m.측정일</Trans>
            </label>
            {/* datepicker 사용법 */}
            <SingleDatePicker
              placeholder="일자"
              date={DateUtil.now(this.state.date1)} // momentPropTypes.momentObj or null
              displayFormat="YYYY-MM-DD" // 날짜 형식 변경을 위해서 필요.
              onDateChange={date => this.setState({ date1: date })} // PropTypes.func.isRequired
              focused={this.state.focused1} // PropTypes.bool
              onFocusChange={({ focused }) => {
                this.setState({ focused1: focused });
              }} // PropTypes.func.isRequired
              numberOfMonths={1}
              withPortal //모달
              showDefaultInputIcon
              showClearDate
              readOnly
              id={'datepicker2'} // PropTypes.string.isRequired,
            />
            <span className="datelabel"> ~ </span>
            <label htmlFor=""><Trans>m.측정일</Trans></label>
            {/* datepicker 사용법 */}
            <SingleDatePicker
              placeholder="일자"
              date={DateUtil.now(this.state.date1)} // momentPropTypes.momentObj or null
              displayFormat="YYYY-MM-DD" // 날짜 형식 변경을 위해서 필요.
              onDateChange={date => this.setState({ date1: date })} // PropTypes.func.isRequired
              focused={this.state.focused1} // PropTypes.bool
              onFocusChange={({ focused }) => {
                this.setState({ focused1: focused });
              }} // PropTypes.func.isRequired
              numberOfMonths={1}
              withPortal //모달
              showDefaultInputIcon
              showClearDate
              readOnly
              id={'datepicker3'} // PropTypes.string.isRequired,
            />               
          </div>
          <div className="con_search">
             <button className="btn_type3"><i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans></button>
          </div>

          <div className="con_time">
            <i className="mdi mdi-timetable"></i> 2019.07.22 15:20
          </div>

          <div className="board-list mT20">
            <table>
              <colgroup>
                <col style={{ width: '20%' }} />
                <col style={{ width: '20%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th><Trans>m.장비ID</Trans></th>
                  <th><Trans>m.장소명</Trans></th>
                  <th><Trans>m.사료공급량</Trans>(kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>001</th>
                  <th>분만사</th>
                  <td>
                    <div className="sbar-result">
                      220(ml) <span>85%</span>
                    </div>
                    <div className="sbar">
                      <div
                        className="present wow fadeInLeft"
                        style={{ width: '85%' }}></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>022</th>
                  <th>신비육사</th>
                  <td>
                    <div className="sbar-result">
                      220(ml) <span>50%</span>
                    </div>
                    <div className="sbar">
                      <div
                        className="present wow fadeInLeft"
                        style={{ width: '50%' }}></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>023</th>
                  <th>비육출하방</th>
                  <td>
                    <div className="sbar-result">
                      220(ml) <span>20%</span>
                    </div>
                    <div className="sbar">
                      <div
                        className="present wow fadeInLeft"
                        style={{ width: '20%' }}></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2"><Trans>m.농장합계/평균</Trans></th>
                  <td>
                    <div className="sbar-result">
                      220(ml) <span>100%</span>
                    </div>
                    <div className="sbar">
                      <div
                        className="present wow fadeInLeft"
                        style={{ width: '100%' }}></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="txt-right txt12 mT10"><Trans>m.지난달대비비율</Trans></p>

          <div className="top-btn">
            <Link to="/popup/iot/5">
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

export default YoungPigFeed;
