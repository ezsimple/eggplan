import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './PigMateHis.module.scss';
import { Trans } from 'react-i18next';

class PigMateHis extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>교배기록</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default PigMateHis;
