import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './ScoreGraph.module.scss';
import { Trans } from 'react-i18next';

class ScoreGraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        {/* 디자인 영역 */}
        <div>성적그래프</div>
        {/* 디자인 영역 */}
      </Fragment>
    );
  }
}

export default ScoreGraph;
