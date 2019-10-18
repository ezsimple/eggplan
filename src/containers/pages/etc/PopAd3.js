import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Etc.module.scss';
import { Trans } from 'react-i18next';

class PopAd3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>광고타입#3</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default PopAd3;
