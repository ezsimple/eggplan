import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PopupRouteList } from './RouteTable';
import { Navs, Doc, Header, PopHeader, Footer } from 'components';
import { Login } from 'containers/pages';
import EggLayout from 'layout/Layout';

const PopupRoute = props => {
  const getRouteInfo = (cate, id) => {
    return PopupRouteList.find(
      item => item.route === 'popup' && item.category === cate && item.id === id
    );
  };

  const url = props.match.url;
  const cate = props.match.params.cate;
  const id = props.match.params.id;
  const { page, name, menuNav, visible, popup } = getRouteInfo(cate, id);
  {
    /* 존재하지 않는 cate/id 로 접근시에 대한 보강 코드 필요 */
  }
  // console.log(route, name, page, menuNav, visible);
  console.log('PopupRoute:props', props);
  return (
    <Fragment>
      {/*
      {visible && <Doc />}
      {popup && visible && <PopHeader name={name} />}
      {popup && visible && <Route path={url} component={page ? page : Login} />}
      {popup && visible && visible && <Footer />}
     */}
      <EggLayout>
        {popup && visible && (
          <Route path={url} component={page ? page : Login} />
        )}
      </EggLayout>
    </Fragment>
  );
};

export default PopupRoute;
