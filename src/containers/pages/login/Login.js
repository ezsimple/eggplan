import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Login.module.scss';
import { Trans } from 'react-i18next';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 입니다 */}
        <div>로그인</div>
        {/* 디자인 영역 입니다 */}
      </Fragment>
    );
  }
}

export default Login;
