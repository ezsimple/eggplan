import React from 'react';
import { Route } from 'react-router-dom';

import { CommonRouteList } from './CommonRouteTable';
import { Login } from 'containers/pages/common';
import EggLayout from 'layout/Layout';

const CommonRoute = props => {
  const getRouteInfo = (cate, id) => {
    return CommonRouteList.find(
      item => item.type === 'common' && item.cate === cate && item.id === id
    );
  };

  const url = props.match.url;
  const cate = props.match.params.cate;
  const id = props.match.params.id;
  const { page } = getRouteInfo(cate, id);
  return (
    <EggLayout>
      <Route path={url} component={page ? page : Login} />
    </EggLayout>
  );
};

export default CommonRoute;
