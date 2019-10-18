import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Qr.module.scss';
import { Trans } from 'react-i18next';

class Qr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>QR</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default Qr;
