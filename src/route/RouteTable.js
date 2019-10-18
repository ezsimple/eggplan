import * as Page from 'containers/pages';

// 기본 페이지 목록 (임의 수정 금지)
export const PageRouteList = [
  {
    route: 'page',
    category: 'daily',
    id: '0',
    cate_name: '일보',
    name: '사육현황',
    page: Page.PigBreedStatus,
    uri: '/page/daily/0',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'daily',
    id: '1',
    cate_name: '일보',
    name: '교배현황',
    page: Page.PigMateStatus,
    uri: '/page/daily/1',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'daily',
    id: '2',
    cate_name: '일보',
    name: '임신사고현황',
    page: Page.PigPregnentAccident,
    uri: '/page/daily/2',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'daily',
    id: '3',
    cate_name: '일보',
    name: '생산현황',
    page: Page.PigProductStatus,
    uri: '/page/daily/3',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'daily',
    id: '4',
    cate_name: '일보',
    name: '전입및전출/폐사현황',
    page: Page.PigOtherStatus,
    uri: '/page/daily/4',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'daily',
    id: '5',
    cate_name: '일보',
    name: '거래기록',
    page: Page.PigTradeHis,
    uri: '/page/daily/5',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '0',
    cate_name: 'IoT',
    name: '모돈자동급이기',
    page: Page.MomPigAutoFeed,
    uri: '/page/iot/0',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '1',
    cate_name: 'IoT',
    name: '군사급이기',
    page: Page.GunsaFeed,
    uri: '/page/iot/1',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '2',
    cate_name: 'IoT',
    name: '환경센서',
    page: Page.EnvSensor,
    uri: '/page/iot/2',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '3',
    cate_name: 'IoT',
    name: '음수관리기',
    page: Page.WaterFeed,
    uri: '/page/iot/3',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '4',
    cate_name: 'IoT',
    name: '사료빈관리기',
    page: Page.FeedBin,
    uri: '/page/iot/4',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '5',
    cate_name: 'IoT',
    name: '돈선별기',
    page: Page.PigSelector,
    uri: '/page/iot/5',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '6',
    cate_name: 'IoT',
    name: '자돈급이기',
    page: Page.YoungPigFeed,
    uri: '/page/iot/6',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '7',
    cate_name: 'IoT',
    name: '냉방기',
    page: Page.Aircon,
    uri: '/page/iot/7',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'iot',
    id: '8',
    cate_name: 'IoT',
    name: '전기화재',
    page: Page.ElecFire,
    uri: '/page/iot/8',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'score',
    id: '0',
    cate_name: '성적그래프',
    name: '전체성적표',
    page: Page.ScoreGraph,
    uri: '/page/score/0',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },

  {
    route: 'page',
    category: 'pig',
    id: '0',
    cate_name: '양돈정보',
    name: '도매시세',
    page: Page.WholeSalePrice,
    uri: '/page/pig/0',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'pig',
    id: '1',
    cate_name: '양돈정보',
    name: '양돈기사',
    page: Page.News,
    uri: '/page/pig/1',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'pig',
    id: '2',
    cate_name: '양돈정보',
    name: '날씨',
    page: Page.Weather,
    uri: '/page/pig/2',
    comment: '',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'quick',
    id: '0',
    cate_name: '퀵메뉴',
    name: '퀵메뉴 #0',
    page: Page.QuickMenu0,
    comment: '퀵메뉴 리스트',
    uri: '/page/quick/0',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'quick',
    id: '1',
    cate_name: '퀵메뉴',
    name: '퀵메뉴 #1',
    page: Page.QuickMenu1,
    uri: '/page/quick/1',
    comment: '퀵메뉴 순서변경',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'quick',
    id: '2',
    cate_name: '퀵메뉴',
    name: '퀵메뉴 #2',
    page: Page.QuickMenu2,
    uri: '/page/quick/2',
    comment: '퀵메뉴 순서변경',
    menuNav: true,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'quick',
    id: '3',
    cate_name: '퀵메뉴',
    name: '퀵메뉴 #3',
    page: Page.QuickMenu3,
    uri: '/page/quick/3',
    comment: '퀵메뉴 순서변경',
    menuNav: true,
    visible: true,
    popup: false
  },
  /* (주의) 공통 페이지는 처리가 다릅니다. */
  {
    route: 'page',
    category: 'common',
    id: '0',
    cate_name: '공통',
    name: '로그인',
    page: Page.Login,
    uri: '/page/common/0',
    comment: '',
    menuNav: true,
    visible: false,
    popup: false
  },
  {
    route: 'page',
    category: 'common',
    id: '1',
    cate_name: '공통',
    name: '초기로딩화면',
    page: Page.Loading,
    uri: '/page/common/1',
    comment: '',
    menuNav: false,
    visible: true,
    popup: false
  },
  {
    route: 'page',
    category: 'common',
    id: '2',
    cate_name: '공통',
    name: '코치화면',
    page: Page.Coach,
    uri: '/page/common/2',
    comment: '',
    menuNav: false,
    visible: true,
    popup: false
  }
];

// =========================================
// 팝업 페이지 라우팅 목록
// =========================================
export const PopupRouteList = [
  {
    route: 'popup',
    category: 'iot',
    id: '0',
    cate_name: 'IoT',
    name: '모돈 자동급이기 설정',
    page: Page.PopMomPigAutoFeed0,
    uri: '/popup/iot/0',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '1',
    cate_name: 'IoT',
    name: '군사급이기 설정',
    page: Page.PopGunsaFeed0,
    uri: '/popup/iot/1',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '2',
    cate_name: 'IoT',
    name: '환경센서 설정',
    page: Page.PopEnvSensor0,
    uri: '/popup/iot/2',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '3',
    cate_name: 'IoT',
    name: '음수관리기 설정',
    page: Page.PopWaterFeed0,
    uri: '/popup/iot/3',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '4',
    cate_name: 'IoT',
    name: '돈선별기 설정',
    page: Page.PopPigSelector0,
    uri: '/popup/iot/4',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '5',
    cate_name: 'IoT',
    name: '자돈급이기 설정',
    page: Page.PopYoungPigFeed0,
    uri: '/popup/iot/5',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '6',
    cate_name: 'IoT',
    name: '냉방기 설정',
    page: Page.PopAircon0,
    uri: '/popup/iot/6',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'iot',
    id: '7',
    cate_name: 'IoT',
    name: '전기,화재 설정',
    page: Page.PopElecFire0,
    uri: '/popup/iot/7',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'common',
    id: '1',
    cate_name: '공통',
    name: 'QR',
    page: Page.Qr,
    uri: '/popup/common/1',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'common',
    id: '2',
    cate_name: '공통',
    name: '마이페이지',
    page: Page.MyPage,
    uri: '/popup/common/2',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'common',
    id: '3',
    cate_name: '공통',
    name: '메뉴',
    page: Page.PopHamburgerMenu,
    uri: '/popup/common/3',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'common',
    id: '4',
    cate_name: '공통',
    name: '퀵메뉴 추가',
    page: Page.PopQuickMenu0,
    uri: '/popup/common/4',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '0',
    cate_name: '기타',
    name: '알람 설정',
    page: Page.PopAlarmSetup,
    uri: '/popup/etc/0',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '1',
    cate_name: '기타',
    name: '예정돈',
    page: Page.PopExpectedPig,
    uri: '/popup/etc/1',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '2',
    cate_name: '기타',
    name: '상세교배기록',
    page: Page.PopMateDetailHis,
    uri: '/popup/etc/2',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '3',
    cate_name: '기타',
    name: '교배기록',
    page: Page.PopMateHis,
    uri: '/popup/etc/3',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '4',
    cate_name: '기타',
    name: '모돈카드',
    page: Page.PopModonCard,
    uri: '/popup/etc/4',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '5',
    cate_name: '기타',
    name: '설정',
    page: Page.PopSetup,
    uri: '/popup/etc/5',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '6',
    cate_name: '기타',
    name: '필요작업표',
    page: Page.PopWorkNote,
    uri: '/popup/etc/6',
    comment: '',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '7',
    cate_name: '기타',
    name: '광고0',
    page: Page.PopAd0,
    uri: '/popup/etc/7',
    comment: '광고#0',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '8',
    cate_name: '기타',
    name: '광고1',
    page: Page.PopAd1,
    uri: '/popup/etc/8',
    comment: '광고#1',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '9',
    cate_name: '기타',
    name: '광고2',
    page: Page.PopAd2,
    uri: '/popup/etc/9',
    comment: '광고#2',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '10',
    cate_name: '기타',
    name: '광고3',
    page: Page.PopAd3,
    uri: '/popup/etc/10',
    comment: '광고#3',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '11',
    cate_name: '기타',
    name: '광고4',
    page: Page.PopAd4,
    uri: '/popup/etc/11',
    comment: '광고#4',
    menuNav: false,
    visible: true,
    popup: true
  },
  {
    route: 'popup',
    category: 'etc',
    id: '12',
    cate_name: '기타',
    name: '광고5',
    page: Page.PopAd5,
    uri: '/popup/etc/12',
    comment: '광고#5',
    menuNav: false,
    visible: true,
    popup: true
  }
];

// 카테고리명 목록
let tmp = [];
export const GetCategory = cate => {
  return PageRouteList.find(
    item =>
      item.route === 'page' && item.menuNav === true && item.category === cate
  );
};
PageRouteList.map(item => {
  // ------------------------------------------------------------
  // common 카테고리는 별도 처리
  // ------------------------------------------------------------
  // 2019.10.15 상단 퀵메뉴 추가하실건가요? 메인시안 제작시
  // 퀵메뉴는 일부러 하단에 노출하여 상단에서는 제외시켰습니다.
  // ------------------------------------------------------------
  if (item.category !== 'common' && item.category !== 'quick')
    tmp.push(GetCategory(item.category));
});
export const CategoryList = [...new Set(tmp)];

// 해당 카테고리에 해당하는 라우팅 정보 가져오기
export const GetMenuNavPages = cate => {
  return PageRouteList.filter(
    item =>
      item.route === 'page' && item.menuNav === true && item.category === cate
  );
};

// export const PopupRouteList = JSON.parse(JSON.stringify(PageRouteList)); // Clone Array
// PopupRouteList.map((item, i) => {
//   item.route = 'popup';
// });
