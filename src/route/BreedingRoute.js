import React from 'react';
import { Route } from 'react-router-dom';

import { BreedingRouteList } from './BreedingRouteTable';
import { Login } from 'containers/pages';
import EggLayout from 'layout/Layout';

export const BreedingRoute = props => {
  const getRouteInfo = (cate, id) => {
    return BreedingRouteList.find(
      item => item.type === 'breeding' && item.cate === cate && item.id === id
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
