import React, { Component, Fragment, Div } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DateUtil } from 'utils';

// AirBnB datepicker 사용
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { Trans } from 'react-i18next';

class PopEnvSensor0 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
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
            <label htmlFor="">
              <Trans>m.장소</Trans>
            </label>
            <select id="" name="" title="" className="sel-type1">
              <option value="">전체</option>
              <option value="">-</option>
              <option value="">-</option>
            </select>
          </div>
          <div className="con_search">
            <button className="btn_type3">
              <i className="mdi mdi-magnify"></i> <Trans>m.조회하기</Trans>
            </button>
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
                    <th>
                      <input type="radio" name="1" id="1" />
                      <label htmlFor="1">
                        <Trans>m.온도</Trans>(<Trans>m.실내</Trans>)
                      </label>{' '}
                      온도
                    </th>
                    <td>℃</td>
                  </tr>
                  <tr>
                    <th>
                      <input type="radio" name="1" id="2" />
                      <label htmlFor="2">
                        <Trans>m.온도</Trans>(<Trans>m.실내</Trans>)
                      </label>{' '}
                      환기량
                    </th>
                    <td>%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mT20 mB20">
            <button className="btn-type1">
              <Trans>m.설정</Trans>
            </button>
          </div>

          <div className="board-list mT20">
            <table>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '20%' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <Trans>m.시간</Trans>
                  </th>
                  <th>
                    <Trans>m.온도</Trans>
                  </th>
                  <th>
                    <Trans>m.습도</Trans>
                  </th>
                  <th>Co²</th>
                  <th>
                    <Trans>m.암모니아</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23시 55분</td>
                  <td>27.3</td>
                  <td>60</td>
                  <td>1.1186</td>
                  <td>3.4</td>
                </tr>
                <tr>
                  <td>23시 55분</td>
                  <td>27.3</td>
                  <td>60</td>
                  <td>1.1186</td>
                  <td>3.4</td>
                </tr>
                <tr>
                  <td>23시 55분</td>
                  <td>27.3</td>
                  <td>60</td>
                  <td>1.1186</td>
                  <td>3.4</td>
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

export default PopEnvSensor0;
