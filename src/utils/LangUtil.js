import SessionUtil from 'utils/SessionUtil';
import moment from 'moment';
import 'moment/locale/ko.js';
import 'moment/locale/vi.js';

function fnDetectLang() {
  const lang = SessionUtil.getLang();
  if (lang === 'ko') moment.locale('ko');
  if (lang === 'en') moment.locale('en');
  if (lang === 'vi') moment.locale('vi');
}

export { fnDetectLang };
