import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './QuickMenu.module.scss';
import { Trans } from 'react-i18next';

class QuickMenu3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>퀵메뉴#3</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default QuickMenu3;
