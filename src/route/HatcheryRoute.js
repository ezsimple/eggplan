import React from 'react';
import { Route } from 'react-router-dom';

import { HatcheryRouteList } from './HatcheryRouteTable';
import { EggError } from 'containers/pages/common';

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
  return <Route path={url} component={page ? page : EggError} />;
};

export default HatcheryRoute;
