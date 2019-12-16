import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react'; // mobx에서 사용하는 Provider로써
import * as stores from './stores'; // ./store 폴더내의 모든 인스턴스를 import 해서 Provider에 props 로 넘겨준다
import axios from 'axios';
import loading from 'images/pig_loading.gif';

import SessionUtil from 'utils/SessionUtil';

// Antd Locale 설정
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/es/locale-provider/ko_KR';
import en_US from 'antd/es/locale-provider/en_US';
import vi_VN from 'antd/es/locale-provider/vi_VN';

import './Root.css';
import { message, Button } from 'antd';

import i18n from 'i18next';

const Root = () => {
  message.config({
    top: 100,
    duration: 2,
    maxCount: 3
  });
  // Antd의 경우 Locale 설정이 별도 필요합니다.
  const fnAntdLocale = () => {
    const lang = SessionUtil.getLang();
    let loc = ko_KR;
    if (lang == 'en') loc = en_US;
    if (lang == 'vi') loc = vi_VN;
    return loc;
  };

  // ----------------------------------------------
  // 500/404/502 오류는 개발시 발생하는 오류입니다.
  // ----------------------------------------------
  const fnDevError = error => {
    return (
      error.indexOf('500') > -1 ||
      error.indexOf('404') > -1 ||
      error.indexOf('502') > -1
    );
  };

  const fnNotify = error => {
    console.log('Axios : ' + error);
    // axios 통신 도중, 페이지 이동(메뉴이동)시에도 오류가 발생하므로,
    // 노티 팝업을 할 수 없습니다. 오류를 판단하기 힘든 상황입니다.
    if (fnDevError(error)) {
      message.error(i18n.t('m.오류가 발생하였습니다') + ' : ' + error);
    }
  };

  // ---------------------------------------------
  // axios를 통한 Fetch시에만, Loading 을 표시한다
  // ---------------------------------------------
  useEffect(() => {
    const spinner = 'loading-indicator';
    axios.interceptors.request.use(
      function(config) {
        document.body.classList.add(spinner);
        // BM서비스 로직이 동작을 하지 않습니다.
        // document.body.appendChild(pigLoading);
        return config;
      },
      function(error) {
        document.body.classList.remove(spinner);
        fnNotify(error);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function(response) {
        document.body.classList.remove(spinner);
        // BM서비스 로직이 동작을 하지 않습니다.
        // document.body.removeChild(pigLoading);
        return response;
      },
      function(error) {
        document.body.classList.remove(spinner);
        fnNotify(error);
        return Promise.reject(error);
      }
    );
  });

  return (
    // Antd Locale을 최상단에 설정
    <ConfigProvider locale={fnAntdLocale()}>
      <Provider {...stores}>
        <App />
      </Provider>
    </ConfigProvider>
  );
};

export default Root;
