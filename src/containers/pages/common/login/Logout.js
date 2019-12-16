import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { Const, Server } from 'components/Properties';
import { inject, observer } from 'mobx-react';
import { hasInterface } from 'utils/IotUtil';

const Logout = ({ TopMenuStore }) => {
  // 로그아웃 처리하기
  const { setLogout } = TopMenuStore;

  useEffect(() => {
    const url = Server.getRestAPI();
    axios({
      method: 'post',
      url: url + '/mobileLogout.do'
    })
      .then(function(response) {
        sessionStorage.clear();
        localStorage.clear();
        setLogout();
        if (hasInterface())
          window['EZPigPlanInterface'].doWhenLogout(null, null);
      })
      .catch(function(error) {
        return [];
      });
  }, [setLogout]);

  return <Redirect to={Const.AUTO_LOGOUT_PAGE} />;
};

export default inject('TopMenuStore')(observer(Logout));
