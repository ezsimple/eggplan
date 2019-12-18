import * as Hatchery from 'containers/pages/hatchery';
import * as Common from 'containers/pages/common';
import i18n from 'i18next';

const HatcheryRouteList = [
  {
    uri: '/hatchery/member/0',
    page: Common.Member.Page0
  },
  {
    uri: '/hatchery/member/1',
    page: Common.Member.Page1
  },
  {
    uri: '/hatchery/member/2',
    page: Common.Member.Page2
  },
  {
    uri: '/hatchery/member/3',
    page: Common.Member.Page3
  },
  {
    uri: '/hatchery/member/4',
    page: Common.Member.Page4
  },
  {
    uri: '/hatchery/member/5',
    page: Common.Member.Page5
  },
  {
    uri: '/hatchery/member/6',
    page: Common.Member.Page6
  },
  {
    uri: '/hatchery/member/7',
    page: Common.Member.Page7
  },
  {
    uri: '/hatchery/member/8',
    page: Common.Member.Page8
  },
  {
    uri: '/hatchery/member/9',
    page: Common.Member.Page9
  },
  {
    uri: '/hatchery/member/10',
    page: Common.Member.Page10
  },
  {
    uri: '/hatchery/member/11',
    page: Common.Member.Page11
  },
  {
    uri: '/hatchery/member/12',
    page: Common.Member.Page12
  },
  {
    uri: '/hatchery/member/13',
    page: Common.Member.Page13
  },
  {
    uri: '/hatchery/member/14',
    page: Common.Member.Page14
  },
  {
    uri: '/hatchery/member/15',
    page: Common.Member.Page15
  },
  {
    uri: '/hatchery/member/16',
    page: Common.Member.Page16
  },
  {
    uri: '/hatchery/member/17',
    page: Common.Member.Page17
  },
  {
    uri: '/hatchery/member/18',
    page: Common.Member.Page18
  },
  {
    uri: '/hatchery/member/19',
    page: Common.Member.Page19
  },
  {
    uri: '/hatchery/member/20',
    page: Common.Member.Page20
  },
  {
    uri: '/hatchery/member/21',
    page: Common.Member.Page21
  },
  {
    uri: '/hatchery/member/22',
    page: Common.Member.Page22
  },
  {
    uri: '/hatchery/member/23',
    page: Common.Member.Page23
  },
  {
    uri: '/hatchery/member/24',
    page: Common.Member.Page24
  },
  {
    uri: '/hatchery/member/25',
    page: Common.Member.Page25
  },
  {
    uri: '/hatchery/member/26',
    page: Common.Member.Page26
  },
  {
    uri: '/hatchery/member/27',
    page: Common.Member.Page27
  },
  {
    uri: '/hatchery/member/28',
    page: Common.Member.Page28
  },
  {
    uri: '/hatchery/member/29',
    page: Common.Member.Page29
  },
  {
    uri: '/hatchery/member/30',
    page: Common.Member.Page30
  },
  {
    uri: '/hatchery/group/0',
    page: Common.Group.Page0
  },
  {
    uri: '/hatchery/group/1',
    page: Common.Group.Page1
  },
  {
    uri: '/hatchery/group/2',
    page: Common.Group.Page2
  },
  {
    uri: '/hatchery/group/3',
    page: Common.Group.Page3
  },
  {
    uri: '/hatchery/group/4',
    page: Common.Group.Page4
  },
  {
    uri: '/hatchery/group/5',
    page: Common.Group.Page5
  },
  {
    uri: '/hatchery/group/6',
    page: Common.Group.Page6
  },
  {
    uri: '/hatchery/group/7',
    page: Common.Group.Page7
  },
  {
    uri: '/hatchery/group/8',
    page: Common.Group.Page8
  },
  {
    uri: '/hatchery/group/9',
    page: Common.Group.Page9
  },
  {
    uri: '/hatchery/group/10',
    page: Common.Group.Page10
  },
  {
    uri: '/hatchery/group/11',
    page: Common.Group.Page11
  },
  {
    uri: '/hatchery/group/12',
    page: Common.Group.Page12
  },
  {
    uri: '/hatchery/group/13',
    page: Common.Group.Page13
  },
  {
    uri: '/hatchery/group/14',
    page: Common.Group.Page14
  },
  {
    uri: '/hatchery/group/15',
    page: Common.Group.Page15
  },
  {
    uri: '/hatchery/group/16',
    page: Common.Group.Page16
  },
  {
    uri: '/hatchery/group/17',
    page: Common.Group.Page17
  },
  {
    uri: '/hatchery/group/18',
    page: Common.Group.Page18
  },
  {
    uri: '/hatchery/group/19',
    page: Common.Group.Page19
  },
  {
    uri: '/hatchery/group/20',
    page: Common.Group.Page20
  },
  {
    uri: '/hatchery/group/21',
    page: Common.Group.Page21
  },
  {
    uri: '/hatchery/group/22',
    page: Common.Group.Page22
  },
  {
    uri: '/hatchery/group/23',
    page: Common.Group.Page23
  },
  {
    uri: '/hatchery/group/24',
    page: Common.Group.Page24
  },
  {
    uri: '/hatchery/group/25',
    page: Common.Group.Page25
  },
  {
    uri: '/hatchery/group/26',
    page: Common.Group.Page26
  },
  {
    uri: '/hatchery/group/27',
    page: Common.Group.Page27
  },
  {
    uri: '/hatchery/group/28',
    page: Common.Group.Page28
  },
  {
    uri: '/hatchery/group/29',
    page: Common.Group.Page29
  },
  {
    uri: '/hatchery/group/30',
    page: Common.Group.Page30
  },
  {
    uri: '/hatchery/roll/0',
    page: Common.Roll.Page0
  },
  {
    uri: '/hatchery/roll/1',
    page: Common.Roll.Page1
  },
  {
    uri: '/hatchery/roll/2',
    page: Common.Roll.Page2
  },
  {
    uri: '/hatchery/roll/3',
    page: Common.Roll.Page3
  },
  {
    uri: '/hatchery/roll/4',
    page: Common.Roll.Page4
  },
  {
    uri: '/hatchery/roll/5',
    page: Common.Roll.Page5
  },
  {
    uri: '/hatchery/roll/6',
    page: Common.Roll.Page6
  },
  {
    uri: '/hatchery/roll/7',
    page: Common.Roll.Page7
  },
  {
    uri: '/hatchery/roll/8',
    page: Common.Roll.Page8
  },
  {
    uri: '/hatchery/roll/9',
    page: Common.Roll.Page9
  },
  {
    uri: '/hatchery/roll/10',
    page: Common.Roll.Page10
  },
  {
    uri: '/hatchery/roll/11',
    page: Common.Roll.Page11
  },
  {
    uri: '/hatchery/roll/12',
    page: Common.Roll.Page12
  },
  {
    uri: '/hatchery/roll/13',
    page: Common.Roll.Page13
  },
  {
    uri: '/hatchery/roll/14',
    page: Common.Roll.Page14
  },
  {
    uri: '/hatchery/roll/15',
    page: Common.Roll.Page15
  },
  {
    uri: '/hatchery/roll/16',
    page: Common.Roll.Page16
  },
  {
    uri: '/hatchery/roll/17',
    page: Common.Roll.Page17
  },
  {
    uri: '/hatchery/roll/18',
    page: Common.Roll.Page18
  },
  {
    uri: '/hatchery/roll/19',
    page: Common.Roll.Page19
  },
  {
    uri: '/hatchery/roll/20',
    page: Common.Roll.Page20
  },
  {
    uri: '/hatchery/roll/21',
    page: Common.Roll.Page21
  },
  {
    uri: '/hatchery/roll/22',
    page: Common.Roll.Page22
  },
  {
    uri: '/hatchery/roll/23',
    page: Common.Roll.Page23
  },
  {
    uri: '/hatchery/roll/24',
    page: Common.Roll.Page24
  },
  {
    uri: '/hatchery/roll/25',
    page: Common.Roll.Page25
  },
  {
    uri: '/hatchery/roll/26',
    page: Common.Roll.Page26
  },
  {
    uri: '/hatchery/roll/27',
    page: Common.Roll.Page27
  },
  {
    uri: '/hatchery/roll/28',
    page: Common.Roll.Page28
  },
  {
    uri: '/hatchery/roll/29',
    page: Common.Roll.Page29
  },
  {
    uri: '/hatchery/roll/30',
    page: Common.Roll.Page30
  },
  {
    uri: '/hatchery/rcvmng/0',
    page: Hatchery.Rcvmng.Page0
  },
  {
    uri: '/hatchery/rcvmng/1',
    page: Hatchery.Rcvmng.Page1
  },
  {
    uri: '/hatchery/rcvmng/2',
    page: Hatchery.Rcvmng.Page2
  },
  {
    uri: '/hatchery/rcvmng/3',
    page: Hatchery.Rcvmng.Page3
  },
  {
    uri: '/hatchery/rcvmng/4',
    page: Hatchery.Rcvmng.Page4
  },
  {
    uri: '/hatchery/rcvmng/5',
    page: Hatchery.Rcvmng.Page5
  },
  {
    uri: '/hatchery/rcvmng/6',
    page: Hatchery.Rcvmng.Page6
  },
  {
    uri: '/hatchery/rcvmng/7',
    page: Hatchery.Rcvmng.Page7
  },
  {
    uri: '/hatchery/rcvmng/8',
    page: Hatchery.Rcvmng.Page8
  },
  {
    uri: '/hatchery/rcvmng/9',
    page: Hatchery.Rcvmng.Page9
  },
  {
    uri: '/hatchery/rcvmng/10',
    page: Hatchery.Rcvmng.Page10
  },
  {
    uri: '/hatchery/rcvmng/11',
    page: Hatchery.Rcvmng.Page11
  },
  {
    uri: '/hatchery/rcvmng/12',
    page: Hatchery.Rcvmng.Page12
  },
  {
    uri: '/hatchery/rcvmng/13',
    page: Hatchery.Rcvmng.Page13
  },
  {
    uri: '/hatchery/rcvmng/14',
    page: Hatchery.Rcvmng.Page14
  },
  {
    uri: '/hatchery/rcvmng/15',
    page: Hatchery.Rcvmng.Page15
  },
  {
    uri: '/hatchery/rcvmng/16',
    page: Hatchery.Rcvmng.Page16
  },
  {
    uri: '/hatchery/rcvmng/17',
    page: Hatchery.Rcvmng.Page17
  },
  {
    uri: '/hatchery/rcvmng/18',
    page: Hatchery.Rcvmng.Page18
  },
  {
    uri: '/hatchery/rcvmng/19',
    page: Hatchery.Rcvmng.Page19
  },
  {
    uri: '/hatchery/rcvmng/20',
    page: Hatchery.Rcvmng.Page20
  },
  {
    uri: '/hatchery/rcvmng/21',
    page: Hatchery.Rcvmng.Page21
  },
  {
    uri: '/hatchery/rcvmng/22',
    page: Hatchery.Rcvmng.Page22
  },
  {
    uri: '/hatchery/rcvmng/23',
    page: Hatchery.Rcvmng.Page23
  },
  {
    uri: '/hatchery/rcvmng/24',
    page: Hatchery.Rcvmng.Page24
  },
  {
    uri: '/hatchery/rcvmng/25',
    page: Hatchery.Rcvmng.Page25
  },
  {
    uri: '/hatchery/rcvmng/26',
    page: Hatchery.Rcvmng.Page26
  },
  {
    uri: '/hatchery/rcvmng/27',
    page: Hatchery.Rcvmng.Page27
  },
  {
    uri: '/hatchery/rcvmng/28',
    page: Hatchery.Rcvmng.Page28
  },
  {
    uri: '/hatchery/rcvmng/29',
    page: Hatchery.Rcvmng.Page29
  },
  {
    uri: '/hatchery/rcvmng/30',
    page: Hatchery.Rcvmng.Page30
  },

  {
    uri: '/hatchery/rcvlist/0',
    page: Hatchery.Rcvlist.Page0
  },
  {
    uri: '/hatchery/rcvlist/1',
    page: Hatchery.Rcvlist.Page1
  },
  {
    uri: '/hatchery/rcvlist/2',
    page: Hatchery.Rcvlist.Page2
  },
  {
    uri: '/hatchery/rcvlist/3',
    page: Hatchery.Rcvlist.Page3
  },
  {
    uri: '/hatchery/rcvlist/4',
    page: Hatchery.Rcvlist.Page4
  },
  {
    uri: '/hatchery/rcvlist/5',
    page: Hatchery.Rcvlist.Page5
  },
  {
    uri: '/hatchery/rcvlist/6',
    page: Hatchery.Rcvlist.Page6
  },
  {
    uri: '/hatchery/rcvlist/7',
    page: Hatchery.Rcvlist.Page7
  },
  {
    uri: '/hatchery/rcvlist/8',
    page: Hatchery.Rcvlist.Page8
  },
  {
    uri: '/hatchery/rcvlist/9',
    page: Hatchery.Rcvlist.Page9
  },
  {
    uri: '/hatchery/rcvlist/10',
    page: Hatchery.Rcvlist.Page10
  },
  {
    uri: '/hatchery/rcvlist/11',
    page: Hatchery.Rcvlist.Page11
  },
  {
    uri: '/hatchery/rcvlist/12',
    page: Hatchery.Rcvlist.Page12
  },
  {
    uri: '/hatchery/rcvlist/13',
    page: Hatchery.Rcvlist.Page13
  },
  {
    uri: '/hatchery/rcvlist/14',
    page: Hatchery.Rcvlist.Page14
  },
  {
    uri: '/hatchery/rcvlist/15',
    page: Hatchery.Rcvlist.Page15
  },
  {
    uri: '/hatchery/rcvlist/16',
    page: Hatchery.Rcvlist.Page16
  },
  {
    uri: '/hatchery/rcvlist/17',
    page: Hatchery.Rcvlist.Page17
  },
  {
    uri: '/hatchery/rcvlist/18',
    page: Hatchery.Rcvlist.Page18
  },
  {
    uri: '/hatchery/rcvlist/19',
    page: Hatchery.Rcvlist.Page19
  },
  {
    uri: '/hatchery/rcvlist/20',
    page: Hatchery.Rcvlist.Page20
  },
  {
    uri: '/hatchery/rcvlist/21',
    page: Hatchery.Rcvlist.Page21
  },
  {
    uri: '/hatchery/rcvlist/22',
    page: Hatchery.Rcvlist.Page22
  },
  {
    uri: '/hatchery/rcvlist/23',
    page: Hatchery.Rcvlist.Page23
  },
  {
    uri: '/hatchery/rcvlist/24',
    page: Hatchery.Rcvlist.Page24
  },
  {
    uri: '/hatchery/rcvlist/25',
    page: Hatchery.Rcvlist.Page25
  },
  {
    uri: '/hatchery/rcvlist/26',
    page: Hatchery.Rcvlist.Page26
  },
  {
    uri: '/hatchery/rcvlist/27',
    page: Hatchery.Rcvlist.Page27
  },
  {
    uri: '/hatchery/rcvlist/28',
    page: Hatchery.Rcvlist.Page28
  },
  {
    uri: '/hatchery/rcvlist/29',
    page: Hatchery.Rcvlist.Page29
  },
  {
    uri: '/hatchery/rcvlist/30',
    page: Hatchery.Rcvlist.Page30
  },

  {
    uri: '/hatchery/candling/0',
    page: Hatchery.Candling.Page0
  },
  {
    uri: '/hatchery/candling/1',
    page: Hatchery.Candling.Page1
  },
  {
    uri: '/hatchery/candling/2',
    page: Hatchery.Candling.Page2
  },
  {
    uri: '/hatchery/candling/3',
    page: Hatchery.Candling.Page3
  },
  {
    uri: '/hatchery/candling/4',
    page: Hatchery.Candling.Page4
  },
  {
    uri: '/hatchery/candling/5',
    page: Hatchery.Candling.Page5
  },
  {
    uri: '/hatchery/candling/6',
    page: Hatchery.Candling.Page6
  },
  {
    uri: '/hatchery/candling/7',
    page: Hatchery.Candling.Page7
  },
  {
    uri: '/hatchery/candling/8',
    page: Hatchery.Candling.Page8
  },
  {
    uri: '/hatchery/candling/9',
    page: Hatchery.Candling.Page9
  },
  {
    uri: '/hatchery/candling/10',
    page: Hatchery.Candling.Page10
  },
  {
    uri: '/hatchery/candling/11',
    page: Hatchery.Candling.Page11
  },
  {
    uri: '/hatchery/candling/12',
    page: Hatchery.Candling.Page12
  },
  {
    uri: '/hatchery/candling/13',
    page: Hatchery.Candling.Page13
  },
  {
    uri: '/hatchery/candling/14',
    page: Hatchery.Candling.Page14
  },
  {
    uri: '/hatchery/candling/15',
    page: Hatchery.Candling.Page15
  },
  {
    uri: '/hatchery/candling/16',
    page: Hatchery.Candling.Page16
  },
  {
    uri: '/hatchery/candling/17',
    page: Hatchery.Candling.Page17
  },
  {
    uri: '/hatchery/candling/18',
    page: Hatchery.Candling.Page18
  },
  {
    uri: '/hatchery/candling/19',
    page: Hatchery.Candling.Page19
  },
  {
    uri: '/hatchery/candling/20',
    page: Hatchery.Candling.Page20
  },
  {
    uri: '/hatchery/candling/21',
    page: Hatchery.Candling.Page21
  },
  {
    uri: '/hatchery/candling/22',
    page: Hatchery.Candling.Page22
  },
  {
    uri: '/hatchery/candling/23',
    page: Hatchery.Candling.Page23
  },
  {
    uri: '/hatchery/candling/24',
    page: Hatchery.Candling.Page24
  },
  {
    uri: '/hatchery/candling/25',
    page: Hatchery.Candling.Page25
  },
  {
    uri: '/hatchery/candling/26',
    page: Hatchery.Candling.Page26
  },
  {
    uri: '/hatchery/candling/27',
    page: Hatchery.Candling.Page27
  },
  {
    uri: '/hatchery/candling/28',
    page: Hatchery.Candling.Page28
  },
  {
    uri: '/hatchery/candling/29',
    page: Hatchery.Candling.Page29
  },
  {
    uri: '/hatchery/candling/30',
    page: Hatchery.Candling.Page30
  },

  {
    uri: '/hatchery/hatcher/0',
    page: Hatchery.Hatcher.Page0
  },
  {
    uri: '/hatchery/candling/1',
    page: Hatchery.Candling.Page1
  },
  {
    uri: '/hatchery/candling/2',
    page: Hatchery.Candling.Page2
  },
  {
    uri: '/hatchery/candling/3',
    page: Hatchery.Candling.Page3
  },
  {
    uri: '/hatchery/candling/4',
    page: Hatchery.Candling.Page4
  },
  {
    uri: '/hatchery/candling/5',
    page: Hatchery.Candling.Page5
  },
  {
    uri: '/hatchery/candling/6',
    page: Hatchery.Candling.Page6
  },
  {
    uri: '/hatchery/candling/7',
    page: Hatchery.Candling.Page7
  },
  {
    uri: '/hatchery/candling/8',
    page: Hatchery.Candling.Page8
  },
  {
    uri: '/hatchery/candling/9',
    page: Hatchery.Candling.Page9
  },
  {
    uri: '/hatchery/candling/10',
    page: Hatchery.Candling.Page10
  },
  {
    uri: '/hatchery/candling/11',
    page: Hatchery.Candling.Page11
  },
  {
    uri: '/hatchery/candling/12',
    page: Hatchery.Candling.Page12
  },
  {
    uri: '/hatchery/candling/13',
    page: Hatchery.Candling.Page13
  },
  {
    uri: '/hatchery/candling/14',
    page: Hatchery.Candling.Page14
  },
  {
    uri: '/hatchery/candling/15',
    page: Hatchery.Candling.Page15
  },
  {
    uri: '/hatchery/candling/16',
    page: Hatchery.Candling.Page16
  },
  {
    uri: '/hatchery/candling/17',
    page: Hatchery.Candling.Page17
  },
  {
    uri: '/hatchery/candling/18',
    page: Hatchery.Candling.Page18
  },
  {
    uri: '/hatchery/candling/19',
    page: Hatchery.Candling.Page19
  },
  {
    uri: '/hatchery/candling/20',
    page: Hatchery.Candling.Page20
  },
  {
    uri: '/hatchery/candling/21',
    page: Hatchery.Candling.Page21
  },
  {
    uri: '/hatchery/candling/22',
    page: Hatchery.Candling.Page22
  },
  {
    uri: '/hatchery/candling/23',
    page: Hatchery.Candling.Page23
  },
  {
    uri: '/hatchery/candling/24',
    page: Hatchery.Candling.Page24
  },
  {
    uri: '/hatchery/candling/25',
    page: Hatchery.Candling.Page25
  },
  {
    uri: '/hatchery/candling/26',
    page: Hatchery.Candling.Page26
  },
  {
    uri: '/hatchery/candling/27',
    page: Hatchery.Candling.Page27
  },
  {
    uri: '/hatchery/candling/28',
    page: Hatchery.Candling.Page28
  },
  {
    uri: '/hatchery/candling/29',
    page: Hatchery.Candling.Page29
  },
  {
    uri: '/hatchery/candling/30',
    page: Hatchery.Candling.Page30
  },
  {
    uri: '/hatchery/hatcher/1',
    page: Hatchery.Hatcher.Page1
  },
  {
    uri: '/hatchery/hatcher/2',
    page: Hatchery.Hatcher.Page2
  },
  {
    uri: '/hatchery/hatcher/3',
    page: Hatchery.Hatcher.Page3
  },
  {
    uri: '/hatchery/hatcher/4',
    page: Hatchery.Hatcher.Page4
  },
  {
    uri: '/hatchery/hatcher/5',
    page: Hatchery.Hatcher.Page5
  },
  {
    uri: '/hatchery/hatcher/6',
    page: Hatchery.Hatcher.Page6
  },
  {
    uri: '/hatchery/hatcher/7',
    page: Hatchery.Hatcher.Page7
  },
  {
    uri: '/hatchery/hatcher/8',
    page: Hatchery.Hatcher.Page8
  },
  {
    uri: '/hatchery/hatcher/9',
    page: Hatchery.Hatcher.Page9
  },
  {
    uri: '/hatchery/hatcher/10',
    page: Hatchery.Hatcher.Page10
  },
  {
    uri: '/hatchery/hatcher/11',
    page: Hatchery.Hatcher.Page11
  },
  {
    uri: '/hatchery/hatcher/12',
    page: Hatchery.Hatcher.Page12
  },
  {
    uri: '/hatchery/hatcher/13',
    page: Hatchery.Hatcher.Page13
  },
  {
    uri: '/hatchery/hatcher/14',
    page: Hatchery.Hatcher.Page14
  },
  {
    uri: '/hatchery/hatcher/15',
    page: Hatchery.Hatcher.Page15
  },
  {
    uri: '/hatchery/hatcher/16',
    page: Hatchery.Hatcher.Page16
  },
  {
    uri: '/hatchery/hatcher/17',
    page: Hatchery.Hatcher.Page17
  },
  {
    uri: '/hatchery/hatcher/18',
    page: Hatchery.Hatcher.Page18
  },
  {
    uri: '/hatchery/hatcher/19',
    page: Hatchery.Hatcher.Page19
  },
  {
    uri: '/hatchery/hatcher/20',
    page: Hatchery.Hatcher.Page20
  },
  {
    uri: '/hatchery/hatcher/21',
    page: Hatchery.Hatcher.Page21
  },
  {
    uri: '/hatchery/hatcher/22',
    page: Hatchery.Hatcher.Page22
  },
  {
    uri: '/hatchery/hatcher/23',
    page: Hatchery.Hatcher.Page23
  },
  {
    uri: '/hatchery/hatcher/24',
    page: Hatchery.Hatcher.Page24
  },
  {
    uri: '/hatchery/hatcher/25',
    page: Hatchery.Hatcher.Page25
  },
  {
    uri: '/hatchery/hatcher/26',
    page: Hatchery.Hatcher.Page26
  },
  {
    uri: '/hatchery/hatcher/27',
    page: Hatchery.Hatcher.Page27
  },
  {
    uri: '/hatchery/hatcher/28',
    page: Hatchery.Hatcher.Page28
  },
  {
    uri: '/hatchery/hatcher/29',
    page: Hatchery.Hatcher.Page29
  },
  {
    uri: '/hatchery/hatcher/30',
    page: Hatchery.Hatcher.Page30
  },

  {
    uri: '/hatchery/transegg/0',
    page: Hatchery.Transegg.Page0
  },
  {
    uri: '/hatchery/transegg/1',
    page: Hatchery.Transegg.Page1
  },
  {
    uri: '/hatchery/transegg/2',
    page: Hatchery.Transegg.Page2
  },
  {
    uri: '/hatchery/transegg/3',
    page: Hatchery.Transegg.Page3
  },
  {
    uri: '/hatchery/transegg/4',
    page: Hatchery.Transegg.Page4
  },
  {
    uri: '/hatchery/transegg/5',
    page: Hatchery.Transegg.Page5
  },
  {
    uri: '/hatchery/transegg/6',
    page: Hatchery.Transegg.Page6
  },
  {
    uri: '/hatchery/transegg/7',
    page: Hatchery.Transegg.Page7
  },
  {
    uri: '/hatchery/transegg/8',
    page: Hatchery.Transegg.Page8
  },
  {
    uri: '/hatchery/transegg/9',
    page: Hatchery.Transegg.Page9
  },
  {
    uri: '/hatchery/transegg/10',
    page: Hatchery.Transegg.Page10
  },
  {
    uri: '/hatchery/transegg/11',
    page: Hatchery.Transegg.Page11
  },
  {
    uri: '/hatchery/transegg/12',
    page: Hatchery.Transegg.Page12
  },
  {
    uri: '/hatchery/transegg/13',
    page: Hatchery.Transegg.Page13
  },
  {
    uri: '/hatchery/transegg/14',
    page: Hatchery.Transegg.Page14
  },
  {
    uri: '/hatchery/transegg/15',
    page: Hatchery.Transegg.Page15
  },
  {
    uri: '/hatchery/transegg/16',
    page: Hatchery.Transegg.Page16
  },
  {
    uri: '/hatchery/transegg/17',
    page: Hatchery.Transegg.Page17
  },
  {
    uri: '/hatchery/transegg/18',
    page: Hatchery.Transegg.Page18
  },
  {
    uri: '/hatchery/transegg/19',
    page: Hatchery.Transegg.Page19
  },
  {
    uri: '/hatchery/transegg/20',
    page: Hatchery.Transegg.Page20
  },
  {
    uri: '/hatchery/transegg/21',
    page: Hatchery.Transegg.Page21
  },
  {
    uri: '/hatchery/transegg/22',
    page: Hatchery.Transegg.Page22
  },
  {
    uri: '/hatchery/transegg/23',
    page: Hatchery.Transegg.Page23
  },
  {
    uri: '/hatchery/transegg/24',
    page: Hatchery.Transegg.Page24
  },
  {
    uri: '/hatchery/transegg/25',
    page: Hatchery.Transegg.Page25
  },
  {
    uri: '/hatchery/transegg/26',
    page: Hatchery.Transegg.Page26
  },
  {
    uri: '/hatchery/transegg/27',
    page: Hatchery.Transegg.Page27
  },
  {
    uri: '/hatchery/transegg/28',
    page: Hatchery.Transegg.Page28
  },
  {
    uri: '/hatchery/transegg/29',
    page: Hatchery.Transegg.Page29
  },
  {
    uri: '/hatchery/transegg/30',
    page: Hatchery.Transegg.Page30
  },

  {
    uri: '/hatchery/transchick/0',
    page: Hatchery.Transchick.Page0
  },
  {
    uri: '/hatchery/transchick/1',
    page: Hatchery.Transchick.Page1
  },
  {
    uri: '/hatchery/transchick/2',
    page: Hatchery.Transchick.Page2
  },
  {
    uri: '/hatchery/transchick/3',
    page: Hatchery.Transchick.Page3
  },
  {
    uri: '/hatchery/transchick/4',
    page: Hatchery.Transchick.Page4
  },
  {
    uri: '/hatchery/transchick/5',
    page: Hatchery.Transchick.Page5
  },
  {
    uri: '/hatchery/transchick/6',
    page: Hatchery.Transchick.Page6
  },
  {
    uri: '/hatchery/transchick/7',
    page: Hatchery.Transchick.Page7
  },
  {
    uri: '/hatchery/transchick/8',
    page: Hatchery.Transchick.Page8
  },
  {
    uri: '/hatchery/transchick/9',
    page: Hatchery.Transchick.Page9
  },
  {
    uri: '/hatchery/transchick/10',
    page: Hatchery.Transchick.Page10
  },
  {
    uri: '/hatchery/transchick/11',
    page: Hatchery.Transchick.Page11
  },
  {
    uri: '/hatchery/transchick/12',
    page: Hatchery.Transchick.Page12
  },
  {
    uri: '/hatchery/transchick/13',
    page: Hatchery.Transchick.Page13
  },
  {
    uri: '/hatchery/transchick/14',
    page: Hatchery.Transchick.Page14
  },
  {
    uri: '/hatchery/transchick/15',
    page: Hatchery.Transchick.Page15
  },
  {
    uri: '/hatchery/transchick/16',
    page: Hatchery.Transchick.Page16
  },
  {
    uri: '/hatchery/transchick/17',
    page: Hatchery.Transchick.Page17
  },
  {
    uri: '/hatchery/transchick/18',
    page: Hatchery.Transchick.Page18
  },
  {
    uri: '/hatchery/transchick/19',
    page: Hatchery.Transchick.Page19
  },
  {
    uri: '/hatchery/transchick/20',
    page: Hatchery.Transchick.Page20
  },
  {
    uri: '/hatchery/transchick/21',
    page: Hatchery.Transchick.Page21
  },
  {
    uri: '/hatchery/transchick/22',
    page: Hatchery.Transchick.Page22
  },
  {
    uri: '/hatchery/transchick/23',
    page: Hatchery.Transchick.Page23
  },
  {
    uri: '/hatchery/transchick/24',
    page: Hatchery.Transchick.Page24
  },
  {
    uri: '/hatchery/transchick/25',
    page: Hatchery.Transchick.Page25
  },
  {
    uri: '/hatchery/transchick/26',
    page: Hatchery.Transchick.Page26
  },
  {
    uri: '/hatchery/transchick/27',
    page: Hatchery.Transchick.Page27
  },
  {
    uri: '/hatchery/transchick/28',
    page: Hatchery.Transchick.Page28
  },
  {
    uri: '/hatchery/transchick/29',
    page: Hatchery.Transchick.Page29
  },
  {
    uri: '/hatchery/transchick/30',
    page: Hatchery.Transchick.Page30
  },

  {
    uri: '/hatchery/cutting/0',
    page: Hatchery.Cutting.Page0
  },
  {
    uri: '/hatchery/cutting/1',
    page: Hatchery.Cutting.Page1
  },
  {
    uri: '/hatchery/cutting/2',
    page: Hatchery.Cutting.Page2
  },
  {
    uri: '/hatchery/cutting/3',
    page: Hatchery.Cutting.Page3
  },
  {
    uri: '/hatchery/cutting/4',
    page: Hatchery.Cutting.Page4
  },
  {
    uri: '/hatchery/cutting/5',
    page: Hatchery.Cutting.Page5
  },
  {
    uri: '/hatchery/cutting/6',
    page: Hatchery.Cutting.Page6
  },
  {
    uri: '/hatchery/cutting/7',
    page: Hatchery.Cutting.Page7
  },
  {
    uri: '/hatchery/cutting/8',
    page: Hatchery.Cutting.Page8
  },
  {
    uri: '/hatchery/cutting/9',
    page: Hatchery.Cutting.Page9
  },
  {
    uri: '/hatchery/cutting/10',
    page: Hatchery.Cutting.Page10
  },
  {
    uri: '/hatchery/cutting/11',
    page: Hatchery.Cutting.Page11
  },
  {
    uri: '/hatchery/cutting/12',
    page: Hatchery.Cutting.Page12
  },
  {
    uri: '/hatchery/cutting/13',
    page: Hatchery.Cutting.Page13
  },
  {
    uri: '/hatchery/cutting/14',
    page: Hatchery.Cutting.Page14
  },
  {
    uri: '/hatchery/cutting/15',
    page: Hatchery.Cutting.Page15
  },
  {
    uri: '/hatchery/cutting/16',
    page: Hatchery.Cutting.Page16
  },
  {
    uri: '/hatchery/cutting/17',
    page: Hatchery.Cutting.Page17
  },
  {
    uri: '/hatchery/cutting/18',
    page: Hatchery.Cutting.Page18
  },
  {
    uri: '/hatchery/cutting/19',
    page: Hatchery.Cutting.Page19
  },
  {
    uri: '/hatchery/cutting/20',
    page: Hatchery.Cutting.Page20
  },
  {
    uri: '/hatchery/cutting/21',
    page: Hatchery.Cutting.Page21
  },
  {
    uri: '/hatchery/cutting/22',
    page: Hatchery.Cutting.Page22
  },
  {
    uri: '/hatchery/cutting/23',
    page: Hatchery.Cutting.Page23
  },
  {
    uri: '/hatchery/cutting/24',
    page: Hatchery.Cutting.Page24
  },
  {
    uri: '/hatchery/cutting/25',
    page: Hatchery.Cutting.Page25
  },
  {
    uri: '/hatchery/cutting/26',
    page: Hatchery.Cutting.Page26
  },
  {
    uri: '/hatchery/cutting/27',
    page: Hatchery.Cutting.Page27
  },
  {
    uri: '/hatchery/cutting/28',
    page: Hatchery.Cutting.Page28
  },
  {
    uri: '/hatchery/cutting/29',
    page: Hatchery.Cutting.Page29
  },
  {
    uri: '/hatchery/cutting/30',
    page: Hatchery.Cutting.Page30
  }
];

export default HatcheryRouteList;
