import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './MomPigCard.module.scss';
import { Trans } from 'react-i18next';

class MomPigCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>모돈카드</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default MomPigCard;