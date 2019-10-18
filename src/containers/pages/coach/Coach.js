import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Coach.module.scss';
import { Trans } from 'react-i18next';

class Coach extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
	{/* 디자인 영역 입니다 */}
        <div>첫 사용자를 위한 코치 화면</div>
	{/* 디자인 영역 입니다 */}
      </Fragment>
    );
  }
}

export default Coach;
