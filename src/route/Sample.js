/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  Aircon,
  PopAircon0,
  Alarm,
  ElecFire,
  EnvSensor,
  ExpectedPig,
  FeedBin,
  GunsaFeed,
  Login,
  PopHamburgerMenu,
  MomPigAutoFeed,
  MomPigCard,
  MyPage,
  News,
  PigBreedStatus,
  PigMateHis,
  PigMateStatus,
  PigOtherStatus,
  PigPregnentAccident,
  PigProductStatus,
  PigSelector,
  PigTradeHis,
  Qr,
  QuickMenu,
  ScoreGraph,
  WaterFeed,
  Weather,
  WholeSalePrice,
  WorkNote,
  YoungPigFeed,
  PageMapping,
} from '../containers/pages';

import { PigError } from '../containers/commons/errors/PigError';

class PigRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/aircon'} component={Aircon} />
          <Route path={'/popaircon0'} component={PopAircon0} />
          <Route path={'/alarm'} component={Alarm} />
          <Route path={'/elecFire'} component={ElecFire} />
          <Route path={'/envSensor'} component={EnvSensor} />
          <Route path={'/expectedPig'} component={ExpectedPig} />
          <Route path={'/feedBin'} component={FeedBin} />
          <Route path={'/gunsaFeed'} component={GunsaFeed} />
          <Route path={'/login'} component={Login} />
          <Route path={'/popHamburgerMenu'} component={PopHamburgerMenu} />
          <Route path={'/momPigAutoFeed'} component={MomPigAutoFeed} />
          <Route path={'/momPigCard'} component={MomPigCard} />
          <Route path={'/myPage'} component={MyPage} />
          <Route path={'/news'} component={News} />
          <Route path={'/pigBreedStatus'} component={PigBreedStatus} />
          <Route path={'/pigMateHis'} component={PigMateHis} />
          <Route path={'/pigMateStatus'} component={PigMateStatus} />
          <Route path={'/pigOtherStatus'} component={PigOtherStatus} />
          <Route
            path={'/pigPregnentAccident'}
            component={PigPregnentAccident}
          />
          <Route path={'/pigProductStatus'} component={PigProductStatus} />
          <Route path={'/pigSelector'} component={PigSelector} />
          <Route path={'/pigTradeHis'} component={PigTradeHis} />
          <Route path={'/qr'} component={Qr} />
          <Route path={'/quickMenu'} component={QuickMenu} />
          <Route path={'/scoreGraph'} component={ScoreGraph} />
          <Route path={'/waterFeed'} component={WaterFeed} />
          <Route path={'/weather'} component={Weather} />
          <Route path={'/wholeSalePrice'} component={WholeSalePrice} />
          <Route path={'/workNote'} component={WorkNote} />
          <Route path={'/youngPigFeed'} component={YoungPigFeed} />
          <Route component={PageMapping} />
        </Switch>
      </Router>
    );
  }
}

export default PigRoute;
