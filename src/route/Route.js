import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PageRoute from './PageRoute';
import PopupRoute from './PopupRoute';
import Login from 'containers/pages/login/Login';
import PigError from 'containers/commons/errors/PigError';
import Navs from 'components/commons/navs/Navs';

class PigRoute2 extends Component {
  constructor(props) {
    super(props);
    console.log('PigRoute2:props', props);
  }

  render() {
    const props = this.props;
    console.log('PigRoute2:render', props);
    return (
      <BrowserRouter>
        <Switch>
          {/* Header, Footer 를 가지는 페이지 라우팅 : id => pageId */}
          <Route
            path={'/page/:cate/:id'}
            render={props => <PageRoute {...props} />}
          />

          {/* 팝업 페이지 라우팅 : id => pageId */}
          <Route
            path={'/popup/:cate/:id'}
            render={props => <PopupRoute {...props} />}
          />

          {/* mid, sid가 없는 경우는 로그인 페이지로 */}
          <Route exact path={'/page'} render={props => <Login {...props} />} />
          <Route
            exact
            path={'/page/:cate'}
            render={props => <Login {...props} />}
          />

          <Route exact path={'/popup'} render={props => <Login {...props} />} />
          <Route
            exact
            path={'/popup/:cate'}
            render={props => <Login {...props} />}
          />

          {/* 부적절한 접근을 한 경우 */}
          <Route render={props => <Navs {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PigRoute2;
