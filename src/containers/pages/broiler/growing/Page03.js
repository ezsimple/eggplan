import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SessionUtil } from 'utils';
import { Trans } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/ko.js';
import 'moment/locale/en.js';
import 'moment/locale/vi.js';

import i18n from 'i18next';

import '../Broiler.module.css';

/*
 ** [React 유의 사항 입니다]
 ** 1. <a href="#">...</a>은 <Link to="#"></Link>로 표현 부탁 드립니다.
 ** 2. <label for="">...</label>는 <label htmlFor="">...</label>으로 표현 부탁 드립니다.
 ** 3. 다국어 표현은 <Trans>글자</Trans>으로 부탁 드립니다.
 */
export class Page03 extends React.Component {
  componentDidMount() {
    // 달력에 로케일 적용
    moment.locale(SessionUtil.getLang());
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>
          <Trans>빈페이지</Trans>
        </div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}
