/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EggRoute from './route/Route';
import './App.css';

const App = props => {
  const [language, setLanguage] = useState('trans');
  const { i18n } = useTranslation();

  // useEffect는 함수형 컴포넌트에서
  // componentDidMount & componentDidUpdate를 합친 기능으로 보시면 됩니다.
  // infinite loop 에 주의하세요,
  useEffect(
    language => {
      const lang = localStorage.getItem('lang') || 'ko';
      if (!language) {
        setLanguage(lang);
        if (lang === 'en' || lang === 'vi') {
          i18n.changeLanguage(lang);
        }
      }
    },
    [i18n, language]
  );

  return <EggRoute {...props}></EggRoute>;
};

export default App;
