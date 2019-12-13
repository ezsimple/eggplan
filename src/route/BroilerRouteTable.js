import * as Page from 'containers/pages/broiler';

export const BroilerRouteList = [
  {
    uri: '/broiler/receive/0',
    type: 'broiler',
    cate: 'receive',
    id: '0',
    type_nm: '육계',
    cate_nm: '입고',
    page_nm: '페이지#0',
    page: Page.PopMomPigAutoFeed0,
    is_full: false
  },
  {
    uri: '/broiler/work/0',
    type: 'broiler',
    cate: 'work',
    id: '0',
    type_nm: '육계',
    cate_nm: '육성일지',
    page_nm: '페이지#0',
    page: Page.PopMomPigAutoFeed0,
    is_full: false
  },
  {
    uri: '/broiler/transfer/0',
    type: 'broiler',
    cate: 'transfer',
    id: '0',
    type_nm: '육계',
    cate_nm: '닭 출고',
    page_nm: '페이지#0',
    page: Page.PopMomPigAutoFeed0,
    is_full: false
  }
];
