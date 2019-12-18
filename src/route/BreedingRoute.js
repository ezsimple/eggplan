import React from 'react';
import { Route } from 'react-router-dom';
import EggLayout from 'layout/Layout';

import { BreedingRouteList } from 'route';
import { EggError } from 'containers/pages/common';
import { Navs } from 'components/';

const BreedingRoute = props => {
  const getRouteInfo = (cate, id) => {
    const pathname = window.location.pathname;
    return BreedingRouteList.find(page => page.uri === pathname);
  };

  const url = props.match.url;
  const cate = props.match.params.cate;
  const id = props.match.params.id;
  const { page } = getRouteInfo(cate, id);
  return (
    <EggLayout {...props}>
      <Route path={url} component={page ? page : Navs} />
    </EggLayout>
  );
};

export default BreedingRoute;
