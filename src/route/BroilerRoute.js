import React from 'react';
import { Route } from 'react-router-dom';
import EggLayout from 'layout/Layout';

import { BroilerRouteList } from 'route';
import { EggError } from 'containers/pages/common';
import { Navs } from 'components/';

const BroilerRoute = props => {
  const getRouteInfo = (cate, id) => {
    const pathname = window.location.pathname;
    return BroilerRouteList.find(paget => paget.uri === pathname);
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

export default BroilerRoute;
