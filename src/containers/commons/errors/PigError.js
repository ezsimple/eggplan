import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import styles from './PigError.module.scss';

class Error extends Component {
  render() {
    return (
      <Fragment>
        <div>오류발생</div>
      </Fragment>
    );
  }
}

export default Error;
