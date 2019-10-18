### Pigplan Xenon Mobile Project

React-mPig 구조 설계

## Pre Installed Packages

Created with create-react-app (V2)

Simple Example using MobX

Support List
- reactstrap (bootstrap 4)
- tachyons (css library)
- react-router 4
- styled-components
- typescript (possible)
- node-sass (scss)
- mobx (using store)


## React-mPig 구조 설계
```
|
|-- README.md
|-- package.json
|   
|-- public
|   |-- favicon.ico // 파비콘
|   |-- index.html
|   `-- manifest.json
|   
|-- src
|   |-- App.css // 공통 글로벌 CSS
|   |-- App.js  // main JS
|   |
|   |-- components // 재사용 가능한 모듈
|   |   |-- commons
|   |   |   |-- advertises // 광고
|   |   |   |   |-- PAGE62.PNG
|   |   |   |   |-- PAGE63.PNG
|   |   |   |   |-- PAGE64.PNG
|   |   |   |   |-- PAGE65.PNG
|   |   |   |   |-- PAGE66.PNG
|   |   |   |   |-- PAGE67.PNG
|   |   |   |   |-- README
|   |   |   |   `-- index.js
|   |   |   |-- buttons // 버튼
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG10.png
|   |   |   |   |-- IMG11.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- IMG4.png
|   |   |   |   |-- IMG5.png
|   |   |   |   |-- IMG6.png
|   |   |   |   |-- IMG7.png
|   |   |   |   |-- IMG8.png
|   |   |   |   |-- IMG9.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- calendars // 달력
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- README
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- datepickers // 날짜선택
|   |   |   |   |-- IMG.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- dropdowns // 드롭다운
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- IMG4.png
|   |   |   |   |-- IMG5.png
|   |   |   |   |-- IMG6.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- excels // 엑셀
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- icons // 아이콘
|   |   |   |   |-- IMG.png 
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- leds // 상태LED 표시
|   |   |   |   |-- IMG.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- lists // 목록 
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- loadings // 페이지 로딩
|   |   |   |   |-- README
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- modals // 모달 팝업
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- README
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- navs // 메뉴 네비게이션
|   |   |   |   |-- IMG.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- progresses // 진행상태바
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- searchBar // 검색바
|   |   |   |   |-- IMG.png
|   |   |   |   |-- README
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   |-- selectors // 항목선택
|   |   |   |   |-- IMG.png
|   |   |   |   |-- IMG2.png
|   |   |   |   |-- IMG3.png
|   |   |   |   |-- IMG4.png
|   |   |   |   |-- IMG5.png
|   |   |   |   |-- IMG6.png
|   |   |   |   |-- index.js
|   |   |   |   `-- index.scss
|   |   |   `-- spinners // 스피너
|   |   |       |-- IMG.png
|   |   |       |-- index.js
|   |   |       `-- index.scss
|   |   |-- footer // 푸터
|   |   |   |-- IMG.png
|   |   |   |-- index.js
|   |   |   `-- index.scss
|   |   `-- header // 해더 
|   |       |-- IMG.png
|   |       |-- README
|   |       |-- index.js
|   |       `-- index.scss
|   |
|   |-- containers // 컴포넌트를 조합한 페이지
|   |   |-- commons
|   |   |   `-- pages
|   |   |       `-- errors // 일반적인 오류
|   |   |           |-- 403.js
|   |   |           |-- 404.js
|   |   |           |-- 500.js
|   |   |           `-- index.scss // 오류페이지 공통 css
|   |   `-- pages
|   |       |-- aircon // 냉방기
|   |       |   |-- PAGE29.PNG
|   |       |   |-- PAGE30.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- alarm // 알람
|   |       |   |-- PAGE47.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- elecFire // 전기화재
|   |       |   |-- PAGE31.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- expectedPig // 예측돈
|   |       |   |-- PAGE58.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- feedBin // 사료빈
|   |       |   |-- PAGE24.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- gunsaFeed // 군사급이기
|   |       |   |-- PAGE18.PNG
|   |       |   |-- PAGE19.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- login // 로그인
|   |       |   |-- PAGE6.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- menu // 메뉴
|   |       |   |-- PAGE41.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- momPigAutoFeed // 모돈자동급이기
|   |       |   |-- PAGE16.PNG
|   |       |   |-- PAGE17.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- momPigCard // 모돈카드
|   |       |   |-- PAGE55.PNG
|   |       |   |-- PAGE56.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- myPage // 마이페이지
|   |       |   |-- PAGE45.PNG
|   |       |   |-- PAGE46.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- news // 기사, 뉴스
|   |       |   |-- PAGE35.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigBreedStatus // 사육현황
|   |       |   |-- PAGE10.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigMateHis // 교배기록
|   |       |   |-- PAGE49.PNG
|   |       |   |-- PAGE50.PNG
|   |       |   |-- PAGE51.PNG
|   |       |   |-- PAGE52.PNG
|   |       |   |-- PAGE53.PNG
|   |       |   |-- README
|   |       |   |-- detail.js
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigMateStatus // 교배현황
|   |       |   |-- PAGE11.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigOtherStatus // 전입 및 전출/폐사 현황
|   |       |   |-- PAGE14.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigPregnentAccient // 임신사고
|   |       |   |-- PAGE12.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigProductStatus // 생산현황
|   |       |   |-- PAGE13.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigSelector // 돈선별기
|   |       |   |-- PAGE25.PNG
|   |       |   |-- PAGE26.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- pigTradeHis // 거래기록
|   |       |   |-- PAGE15.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- qr // QR코드
|   |       |   |-- PAGE43.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- quickMenu // 퀵메뉴
|   |       |   |-- PAGE34.PNG
|   |       |   |-- PAGE37.PNG
|   |       |   |-- PAGE38.PNG
|   |       |   |-- PAGE39.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- scoreGraph // 성적그래프
|   |       |   |-- PAGE32.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- sensor // 환경센서
|   |       |   |-- PAGE20.PNG
|   |       |   |-- PAGE21.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- waterFeed // 음수급이기
|   |       |   |-- PAGE22.PNG
|   |       |   |-- PAGE23.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- weather // 날씨
|   |       |   |-- PAGE36.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- wholesalePrice // 도매가격
|   |       |   |-- PAGE33.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       |-- workNote // 필요작업표
|   |       |   |-- PAGE59.PNG
|   |       |   |-- PAGE60.PNG
|   |       |   |-- README
|   |       |   |-- index.js
|   |       |   `-- index.scss
|   |       `-- youngPigFeed // 자돈급이기
|   |           |-- PAGE27.PNG
|   |           |-- PAGE28.PNG
|   |           |-- README
|   |           |-- index.js
|   |           `-- index.scss
|   |-- fonts // 글꼴폴더
|   |-- i18n.js 
|   |-- images // 이미지폴더
|   |-- lib // 공통 연동 API
|   |   `-- README
|   |-- route // 페이지 라우터
|   |-- stores // mobx 용 스토어
|   |   |-- index.js
|   |   `-- stores.js
|   |-- styles // 공통 스타일 
|   |   |-- README
|   |   |-- color.scss
|   |   `-- text.scss
|   |-- translations // 다국어 번역파일
|   |   |-- README
|   |   |-- en.json
|   |   |-- ko.json
|   |   `-- vn.json
|   `-- util // 공통유틸리티
|       `-- README
`-- tsconfig.json
```


[개발환경(PC)]
```
# nvm & node.js (LTS버전) 설치하기

# nvm 설치
https://github.com/coreybutler/nvm-windows/releases


# open cmd windows
nvm install v10.16.0
nvm use 10.16.0
npm install —global yarn


# GIT 설치하기
https://git-scm.com/download/win


git clone http://gitlab.pigplanxe.co.kr/pigplan/pigmobile.git
cd pigmobile
cat .env # PORT 확인

# 패키지 설치
yarn 

# 서버 실행
yarn start

```
