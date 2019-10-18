import React, { Component, Fragment, Div } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class PopWaterFeed0 extends Component {
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
              <option value="">비육 1사</option>
              <option value="">-</option>
              <option value="">-</option>
            </select>
          </div>
          <div className="con_search">
            <button className="btn_type3"><i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans></button>
          </div>

          <div className="mT20 mB10 f-right">
            <label htmlFor="" className="mR10">
              {' '}
              <Trans>m.업데이트주기</Trans> :{' '}
            </label>
            <input
              type="text"
              name=""
              id=""
              className="input-type1"
              style={{ width: '100px' }}
            />{' '}
            <Trans>m.분</Trans>
          </div>

          <div className="mT20 mB20">
            <button className="btn-type1"><Trans>m.설정</Trans></button>
          </div>

          <div className="board-list">
            <table>
              <colgroup>
                <col style={{ width: '15%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '30%' }} />
                <col style={{ width: '20%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th><Trans>m.돈사명</Trans></th>
                  <th><Trans>m.돈방명</Trans></th>
                  <th><Trans>m.측정일시</Trans></th>
                  <th><Trans>m.누적급수량</Trans></th>
                  <th><Trans>m.급수량</Trans></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>비육사</td>
                  <td>비육2방</td>
                  <td>2019-8-01 17:50:46</td>
                  <td>1.1186</td>
                  <td>33.4</td>
                </tr>
                <tr>
                  <td>비육사</td>
                  <td>비육2방</td>
                  <td>2019-8-01 17:50:46</td>
                  <td>1.1186</td>
                  <td>33.4</td>
                </tr>
                <tr>
                  <td>비육사</td>
                  <td>비육2방</td>
                  <td>2019-8-01 17:50:46</td>
                  <td>1.1186</td>
                  <td>33.4</td>
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

export default PopWaterFeed0;