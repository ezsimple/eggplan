import React, { Component, Fragment, useState } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import styles from './PopHamburgerMenu.module.scss';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import { useCookies } from 'react-cookie';

const PopHamburgerMenu = () => {
  const { t, i18n } = useTranslation();
  // const [lang, setLang] = useState('trans');
  // const [cookies, setCookie] = useCookies(['lang']);

  // console.log('nowLang', nowLang);
  const handlerLangChange = lang => {
    // console.log('cookies.lang:', cookies.lang);
    lang = lang || 'ko';
    i18n.changeLanguage(lang);
    // setLang(lang);
    // setCookie('lang', lang, { path: '/' });
    localStorage.setItem('lang', lang);
  };

  return (
    <Fragment>
      {/* 디자인 영역 */}
      <div>
        <button
          onClick={() => {
            handlerLangChange('ko');
          }}
        >
          Ko
        </button>
        <button
          onClick={() => {
            handlerLangChange('en');
          }}
        >
          En
        </button>
        <button
          onClick={() => {
            handlerLangChange('vn');
          }}
        >
          Vn
        </button>
      </div>

      <div className="pig-container">
        <h2 className="ico ico1">
          <Trans>m.게시판</Trans>
        </h2>
        <ul className="menu_list">
          <li>
            <Link to="#">
              <Trans>m.공지사항</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.헬프데스크</Trans>
            </Link>
          </li>
        </ul>

        <h2 className="ico ico2">
          <Trans>m.기록</Trans>
        </h2>
        <ul className="menu_list">
          <li>
            <Link to="#">
              <Trans>m.웅돈전입기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.모돈전입기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.교배기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.임신사고기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.분만기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.포유자돈폐사기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.이유기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.치료기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.장소이동기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.도폐사기록</Trans>
            </Link>
          </li>
        </ul>

        <h2 className="ico ico3">
          <Trans>m.모돈보고서</Trans>
        </h2>
        <ul className="menu_list">
          <li>
            <Link to="#">
              <Trans>m.모돈카드</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.작업대장</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.예정돈</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.관리대장돈</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.모돈주차별현황</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.비육돈주령별현황</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.모돈별성적비교</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.필요작업표</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.종합일보</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.경영분석</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.테스트</Trans>
            </Link>
          </li>
        </ul>

        <h2 className="ico ico4">
          <Trans>m.ICT연계보고서</Trans>
        </h2>
        <ul className="menu_list">
          <li>
            <Link to="#">
              <Trans>m.임신돈급이량분석</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.포유돈급이량분석</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.시간별음수량분석</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.실시간환경자료분석</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.음수량보고서</Trans>
            </Link>
          </li>
        </ul>

        <h2 className="ico ico5">
          <Trans>m.자돈관리</Trans>
        </h2>
        <ul className="menu_list">
          <li>
            <Link to="#">
              <Trans>m.그룹시작</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.이동전입</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.폐사기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.전출기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.출하기록</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.그룹종료</Trans>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Trans>m.모돈별성적비교</Trans>
            </Link>
          </li>
          <Link>
            <Link to="#">
              <Trans>m.필요작업표</Trans>
            </Link>
          </Link>
        </ul>
      </div>
      {/* 디자인 영역 */}
    </Fragment>
  );
};

export default PopHamburgerMenu;
