import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Loading.module.scss';
import { Trans } from 'react-i18next';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
	{/* 디자인 영역 입니다 */}
        <div>앱 시동시 로딩 화면</div>
	{/* 디자인 영역 입니다 */}
      </Fragment>
    );
  }
}

export default Loading;
