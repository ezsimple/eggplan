import React, { Component, Fragment, Div } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import styles from './Alarm.module.scss';
import { Trans } from 'react-i18next';

class Alarm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 : start */}
        <div>알람</div>
        {/* 디자인 영역 : end */}
      </Fragment>
    );
  }
}

export default Alarm;
