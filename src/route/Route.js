import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import PageRoute from './PageRoute';
// import PopupRoute from './PopupRoute';

import EggLayout from 'layout/Layout';

import BreedingRoute from './BreedingRoute';
import BroilerRoute from './BroilerRoute';
import HatcheryRoute from './HatcheryRoute';

import { Login } from 'containers/pages/common/login';
import { Navs } from 'components/';
// import Navs from 'components/commons/navs/Navs';

class EggRoute extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const props = this.props;
    console.log('EggRoute:render()', props);
    return (
      <BrowserRouter>
        <Switch>
          {/* 공통정보 관리
          //  CommonRoute의 경우 종계/부화/육계를 식별할 수 없습니다.
          // <Route
          //  path={'/common/:cate/:id'}
          //  render={props => <CommonRoute {...props} />}
          // />
          */}

          {/* 종계관련 라우팅 */}
          <Route
            path={'/breeding/:cate/:id'}
            render={props => <BreedingRoute {...props} />}
          />

          {/* 부화장 */}
          <Route
            path={'/hatchery/:cate/:id'}
            render={props => <HatcheryRoute {...props} />}
          />

          {/* 육계 */}
          <Route
            path={'/broiler/:cate/:id'}
            render={props => <BroilerRoute {...props} />}
          />

          {/* 부적절한 접근을 한 경우 */}
          <Route render={props => <Navs {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default EggRoute;
