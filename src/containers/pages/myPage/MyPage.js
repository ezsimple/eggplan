import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './MyPage.module.scss';
import { Trans } from 'react-i18next';

class MyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>마이페이지</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default MyPage;
