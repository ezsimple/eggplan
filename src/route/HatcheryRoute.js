import React from 'react';
import { Route } from 'react-router-dom';

import { HatcheryRouteList } from './HatcheryRouteTable';
import { Login } from 'containers/pages/common';
import EggLayout from 'layout/Layout';

const HatcheryRoute = props => {
  const getRouteInfo = (cate, id) => {
    return HatcheryRouteList.find(
      item => item.type === 'hatchery' && item.cate === cate && item.id === id
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

export default HatcheryRoute;
