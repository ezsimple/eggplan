import React, { useState, Component } from 'react';
import App from './App';

import { Provider, PropTypes } from 'mobx-react'; // mobx에서 사용하는 Provider로써
import * as stores from './stores'; // ./store 폴더내의 모든 인스턴스를 import 해서 Provider에 props 로 넘겨준다

// import { useTranslation, withTranslation, Trans } from 'react-i18next';
// import { useCookies } from 'react-cookie';

const Root = () => {
  // ---------------------------------------------
  // const { t, i18n } = useTranslation();
  // const [cookies, setCookie] = useCookies(['lang']);
  // ---------------------------------------------
  // 앱 최초 로딩시 초기화를 어떻게 시킬건가요?
  // ---------------------------------------------
  // const lang = cookies.lang;
  // infinite loop ㄷㄷㄷ
  // if (lang !== 'ko') i18n.changeLanguage(lang);
  // ---------------------------------------------

  return (
    <Provider {...stores}>
      <App />
    </Provider>
  );
};

export default Root;
