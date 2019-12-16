import React, { Component, Fragment, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './Login.module.scss';
import { Trans } from 'react-i18next';
import logo from 'images/login_logo.png';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import axios from 'axios';
import { Const, Server } from 'components/Properties';
// import { createBrowserHistory } from 'history';
import { inject, observer } from 'mobx-react';
import { hasInterface } from 'utils/IotUtil';

const Login = ({ TopMenuStore }) => {
  const { t, i18n } = useTranslation();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [autoLogin, setAutoLogin] = useState(
    localStorage.getItem('autoLogin') || false
  );
  // const [signUp, setSignUp] = useState(false);

  // ----------------------------------------------
  // 로그인 성공직후 기본 정보를 미리 저장해 둔다.
  // ----------------------------------------------
  const fnGetInfo = () => {
    // 1. 농장의 장치 목록을 세션에 가지고 있도록 합시다.
    const url = Server.getRestAPI() + '/getEqIdsWithNames.json';
    axios({
      url: url,
      params: {
        farmNo: sessionStorage.getItem('farmNo')
      }
    })
      .then(function(response) {
        console.log(response.data);
        // JSON Object 배열을 LocalStorage & SessionStorage에 저장하기
        sessionStorage.setItem('eqIds', JSON.stringify(response.data));
      })
      .catch(function(error) {
        return [];
      });
  };

  // 로그인 성공후, 정보 저장하기
  const fnSuccess = (id, pw, autoLogin, props) => {
    const { dateFormat, farmNm, farmNo, email, name } = props;
    console.log(id, pw, autoLogin, dateFormat, farmNo, farmNm, email, props);

    sessionStorage.setItem('dateFormat', dateFormat);
    sessionStorage.setItem('farmNm', farmNm);
    sessionStorage.setItem('farmNo', farmNo);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('name', name);

    const cordovaInterface = window['EZPigPlanInterface'];
    if (cordovaInterface) cordovaInterface.doWhenLogin(null, null, id);

    console.log('farmNo : ', sessionStorage.getItem('farmNo'));

    if (autoLogin) {
      localStorage.setItem('autoLogin', autoLogin);
      localStorage.setItem('id', id);
      localStorage.setItem('pw', pw);
    }
  };

  // 로그인 요청하기
  const fnLogin = useCallback(() => {
    const param = { id: id, pw: pw };
    const url = Server.getRestAPI();

    axios({
      method: 'post',
      url: url + '/mobileLogin.do',
      params: param
    })
      .then(function(response) {
        const { loginMember } = response.data;
        const { setLogin } = TopMenuStore;
        if (loginMember) {
          console.log(loginMember);
          fnSuccess(id, pw, autoLogin, loginMember);
          fnGetInfo();
          setLogin();
        } else {
          // 로그인 실패시에는 자동로그인 삭제
          localStorage.removeItem('autoLogin');
        }
      })
      .catch(function(error) {
        return [];
      });
  });

  useEffect(
    RememberMe => {
      // localStorage.removeItem('autoLogin');
      if (localStorage.getItem('autoLogin')) {
        setId(localStorage.getItem('id'));
        setPw(localStorage.getItem('pw'));
        fnLogin(); // 자동 로그인
      }
      // console.log('signUp : ', signUp);
      // const { isLogin } = TopMenuStore;
      // if (isLogin && sessionStorage.getItem('id')) {
      // Warning: An effect function must not return anything besides a function,
      // which is used for clean-up. You returned: [object Object]
      // return <Redirect to={Const.AUTO_LOGINED_PAGE} />;
      // setSignUp(true);
      // }
    },
    [autoLogin, fnLogin]
  );

  const { isLogined } = TopMenuStore;
  if (isLogined) return <Redirect to={Const.AUTO_LOGINED_PAGE} />;

  return (
    <Fragment>
      {/* 디자인 영역 입니다 */}
      <div className="pig-container">
        <div className={styles.login_top}>
          <img src={logo} />
          <Trans>m.양돈생산 경영관리 프로그램에 오신 것을 환영합니다</Trans>
        </div>

        <ul className={styles.login_in}>
          <li>
            <label htmlFor="">
              <Trans>m.아이디</Trans>
            </label>
            <input
              type="text"
              name="id"
              className="input-type1"
              placeholder={t('m.아이디')}
              defaultValue={id}
              onChange={e => setId(e.target.value)}
            />
            <span>
              <i className="mdi mdi-email"></i>
            </span>
          </li>
          <li>
            <label htmlFor="">
              <Trans>m.비밀번호</Trans>
            </label>
            <Trans>
              <input
                type="password"
                name="pw"
                className="input-type1"
                placeholder={t('m.비밀번호')}
                onChange={e => setPw(e.target.value)}
              />
            </Trans>
            <span>
              <i className="mdi mdi-lock"></i>
            </span>
          </li>
        </ul>

        <div className={styles.login_btn}>
          <button className="btn_type4" onClick={() => fnLogin()}>
            <Trans>m.로그인</Trans>
          </button>
        </div>

        <ul className={styles.login_info}>
          <li>
            <input
              name="autoLogin"
              type="checkbox"
              style={{ display: 'inline' }}
              onClick={e => {
                setAutoLogin(!autoLogin);
              }}
            />{' '}
            <Trans>m.로그인 상태유지</Trans>
          </li>
          <li>
            {/*
                // 2020년 개발 예정 입니다.
                // ID&PW 찾기 UI디자인 없습니다.
              <a href="#">
                <i className="mdi mdi-account-location"></i> ID&PW 찾기
              </a>
            */}
          </li>
        </ul>
        {/*
            // -------------------------------------------
            // 금번 서비스에서는 회원가입을 하지 않습니다.
            // -------------------------------------------
            <div className={styles.login_join}>
                <i className="mdi mdi-alert-circle"></i> 본 프로그램의 사용을 원하시면 먼저 회원가입을 해주세요.
                <button className="btn-type1">회원가입</button>
            </div>

            <ul className={styles.login_btn2}>
                <li><button className="btn_type3">서비스안내</button></li>
                <li><button className="btn_type3">체험하기</button></li>
            </ul>
            */}
      </div>
      {/* 디자인 영역 입니다 */}
    </Fragment>
  );
};

export default inject('TopMenuStore')(observer(Login));
