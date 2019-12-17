import React from 'react';
import { Route } from 'react-router-dom';
import EggLayout from 'layout/Layout';

import { HatcheryRouteList } from 'route';
import { EggError } from 'containers/pages/common';
import { Navs } from 'components/';

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
      <Route path={url} component={page ? page : Navs} />
    </EggLayout>
  );
};

export default HatcheryRoute;
