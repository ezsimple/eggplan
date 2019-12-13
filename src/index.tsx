// 서버에서 메모리 부족으로 실행이 안되는 현상 발생합니다
// import 'react-app-polyfill/ie9'; // For IE9 - IE11 Support
// import 'react-app-polyfill/ie11'; // For IE11 Support
// import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';

import Root from './Root';

import 'i18n';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
