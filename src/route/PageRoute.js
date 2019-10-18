import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PageRouteList } from '../route/RouteTable';
import { Login } from '../containers/pages';
import { Navs, Doc, Header, PopHeader, Footer } from 'components';

class PageRoute extends Component {
  constructor(props) {
    super(props);
    console.log('PageRoute:props', props);
  }

  getRouteInfo = (cate, id) => {
    return PageRouteList.find(
      item => item.route === 'page' && item.category === cate && item.id === id
    );
  };

  render() {
    const url = this.props.match.url;
    const cate = this.props.match.params.cate;
    const id = this.props.match.params.id;
    const { page, menuNav, visible, popup, name } = this.getRouteInfo(cate, id);
    {
      /* 존재하지 않는 cate/id 로 접근시에 대한 보강 코드 필요 */
    }
    // console.log(route, name, page, menuNav, visible);
    return (
      <Fragment>
        {visible && <Doc />}
        {menuNav && visible && !popup && <Header cate={cate} id={id} />}
        {!menuNav && visible && popup && <PopHeader name={name} />}
        {visible && <Route path={url} component={page ? page : Login} />}
        {(menuNav || popup) && visible && <Footer />}
      </Fragment>
    );
  }
}

export default PageRoute;
