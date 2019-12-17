import DateUtil from './DateUtil';

// ==========================================
// 양위원님 세션의 정보가 필요한 부분을
// 일단 메소드로 정의해서 사용했으면 합니다.
// ==========================================
class SessionUtil {
  static getFarmNo = () => {
    const farmNo = sessionStorage.getItem('farmNo');
    return farmNo;
  };
  static getFarmNm = () => {
    const farmNm = sessionStorage.getItem('farmNm');
    return farmNm;
  };
  static getLang = () => {
    let lang = localStorage.getItem('lang') || 'ko';
    if (!(lang === 'ko' || lang === 'en' || lang === 'vi')) lang = 'ko';
    return lang;
  };
  static getDateFormat = () => {
    const dateFormat = DateUtil.getOracleDateFormat();
    // console.log('dateFormat : ', dateFormat);
    return dateFormat;
  };
  static getMemberId = () => {
    const id = sessionStorage.getItem('id');
    // console.log('memberId : ', id);
    return id;
  };
  static getMemberNm = () => {
    const name = sessionStorage.getItem('name');
    return name;
  };
  // 농장에 설치된 장치 목록 입니다.
  static getEqIds = () => {
    // JSON Object 배열을 LocalStorage & SessionStorage에서 가져하기
    const eqIds = JSON.parse(sessionStorage.getItem('eqIds'));
    // console.log('SessionUtil.eqIds : ', eqIds);
    return eqIds;
  };
}

export default SessionUtil;
