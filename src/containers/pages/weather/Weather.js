import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Weather.module.scss';
import { Trans } from 'react-i18next';

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div className="pig-container">
          <div className="blank_content">
            <Trans>m.추후지원예정입니다</Trans>
          </div>
        </div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default Weather;
