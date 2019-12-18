import * as Breeding from 'containers/pages/breeding';
import * as Common from 'containers/pages/common';
import i18n from 'i18next';

const BreedingRouteList = [
  {
    uri: '/breeding/member/0',
    page: Common.Member.Page0
  },
  {
    uri: '/breeding/member/1',
    page: Common.Member.Page1
  },
  {
    uri: '/breeding/member/2',
    page: Common.Member.Page2
  },
  {
    uri: '/breeding/member/3',
    page: Common.Member.Page3
  },
  {
    uri: '/breeding/member/4',
    page: Common.Member.Page4
  },
  {
    uri: '/breeding/member/5',
    page: Common.Member.Page5
  },
  {
    uri: '/breeding/member/6',
    page: Common.Member.Page6
  },
  {
    uri: '/breeding/member/7',
    page: Common.Member.Page7
  },
  {
    uri: '/breeding/member/8',
    page: Common.Member.Page8
  },
  {
    uri: '/breeding/member/9',
    page: Common.Member.Page9
  },
  {
    uri: '/breeding/member/10',
    page: Common.Member.Page10
  },
  {
    uri: '/breeding/member/11',
    page: Common.Member.Page11
  },
  {
    uri: '/breeding/member/12',
    page: Common.Member.Page12
  },
  {
    uri: '/breeding/member/13',
    page: Common.Member.Page13
  },
  {
    uri: '/breeding/member/14',
    page: Common.Member.Page14
  },
  {
    uri: '/breeding/member/15',
    page: Common.Member.Page15
  },
  {
    uri: '/breeding/member/16',
    page: Common.Member.Page16
  },
  {
    uri: '/breeding/member/17',
    page: Common.Member.Page17
  },
  {
    uri: '/breeding/member/18',
    page: Common.Member.Page18
  },
  {
    uri: '/breeding/member/19',
    page: Common.Member.Page19
  },
  {
    uri: '/breeding/member/20',
    page: Common.Member.Page20
  },
  {
    uri: '/breeding/member/21',
    page: Common.Member.Page21
  },
  {
    uri: '/breeding/member/22',
    page: Common.Member.Page22
  },
  {
    uri: '/breeding/member/23',
    page: Common.Member.Page23
  },
  {
    uri: '/breeding/member/24',
    page: Common.Member.Page24
  },
  {
    uri: '/breeding/member/25',
    page: Common.Member.Page25
  },
  {
    uri: '/breeding/member/26',
    page: Common.Member.Page26
  },
  {
    uri: '/breeding/member/27',
    page: Common.Member.Page27
  },
  {
    uri: '/breeding/member/28',
    page: Common.Member.Page28
  },
  {
    uri: '/breeding/member/29',
    page: Common.Member.Page29
  },
  {
    uri: '/breeding/member/30',
    page: Common.Member.Page30
  },
  {
    uri: '/breeding/group/0',
    page: Common.Group.Page0
  },
  {
    uri: '/breeding/group/1',
    page: Common.Group.Page1
  },
  {
    uri: '/breeding/group/2',
    page: Common.Group.Page2
  },
  {
    uri: '/breeding/group/3',
    page: Common.Group.Page3
  },
  {
    uri: '/breeding/group/4',
    page: Common.Group.Page4
  },
  {
    uri: '/breeding/group/5',
    page: Common.Group.Page5
  },
  {
    uri: '/breeding/group/6',
    page: Common.Group.Page6
  },
  {
    uri: '/breeding/group/7',
    page: Common.Group.Page7
  },
  {
    uri: '/breeding/group/8',
    page: Common.Group.Page8
  },
  {
    uri: '/breeding/group/9',
    page: Common.Group.Page9
  },
  {
    uri: '/breeding/group/10',
    page: Common.Group.Page10
  },
  {
    uri: '/breeding/group/11',
    page: Common.Group.Page11
  },
  {
    uri: '/breeding/group/12',
    page: Common.Group.Page12
  },
  {
    uri: '/breeding/group/13',
    page: Common.Group.Page13
  },
  {
    uri: '/breeding/group/14',
    page: Common.Group.Page14
  },
  {
    uri: '/breeding/group/15',
    page: Common.Group.Page15
  },
  {
    uri: '/breeding/group/16',
    page: Common.Group.Page16
  },
  {
    uri: '/breeding/group/17',
    page: Common.Group.Page17
  },
  {
    uri: '/breeding/group/18',
    page: Common.Group.Page18
  },
  {
    uri: '/breeding/group/19',
    page: Common.Group.Page19
  },
  {
    uri: '/breeding/group/20',
    page: Common.Group.Page20
  },
  {
    uri: '/breeding/group/21',
    page: Common.Group.Page21
  },
  {
    uri: '/breeding/group/22',
    page: Common.Group.Page22
  },
  {
    uri: '/breeding/group/23',
    page: Common.Group.Page23
  },
  {
    uri: '/breeding/group/24',
    page: Common.Group.Page24
  },
  {
    uri: '/breeding/group/25',
    page: Common.Group.Page25
  },
  {
    uri: '/breeding/group/26',
    page: Common.Group.Page26
  },
  {
    uri: '/breeding/group/27',
    page: Common.Group.Page27
  },
  {
    uri: '/breeding/group/28',
    page: Common.Group.Page28
  },
  {
    uri: '/breeding/group/29',
    page: Common.Group.Page29
  },
  {
    uri: '/breeding/group/30',
    page: Common.Group.Page30
  },
  {
    uri: '/breeding/roll/0',
    page: Common.Roll.Page0
  },
  {
    uri: '/breeding/roll/1',
    page: Common.Roll.Page1
  },
  {
    uri: '/breeding/roll/2',
    page: Common.Roll.Page2
  },
  {
    uri: '/breeding/roll/3',
    page: Common.Roll.Page3
  },
  {
    uri: '/breeding/roll/4',
    page: Common.Roll.Page4
  },
  {
    uri: '/breeding/roll/5',
    page: Common.Roll.Page5
  },
  {
    uri: '/breeding/roll/6',
    page: Common.Roll.Page6
  },
  {
    uri: '/breeding/roll/7',
    page: Common.Roll.Page7
  },
  {
    uri: '/breeding/roll/8',
    page: Common.Roll.Page8
  },
  {
    uri: '/breeding/roll/9',
    page: Common.Roll.Page9
  },
  {
    uri: '/breeding/roll/10',
    page: Common.Roll.Page10
  },
  {
    uri: '/breeding/roll/11',
    page: Common.Roll.Page11
  },
  {
    uri: '/breeding/roll/12',
    page: Common.Roll.Page12
  },
  {
    uri: '/breeding/roll/13',
    page: Common.Roll.Page13
  },
  {
    uri: '/breeding/roll/14',
    page: Common.Roll.Page14
  },
  {
    uri: '/breeding/roll/15',
    page: Common.Roll.Page15
  },
  {
    uri: '/breeding/roll/16',
    page: Common.Roll.Page16
  },
  {
    uri: '/breeding/roll/17',
    page: Common.Roll.Page17
  },
  {
    uri: '/breeding/roll/18',
    page: Common.Roll.Page18
  },
  {
    uri: '/breeding/roll/19',
    page: Common.Roll.Page19
  },
  {
    uri: '/breeding/roll/20',
    page: Common.Roll.Page20
  },
  {
    uri: '/breeding/roll/21',
    page: Common.Roll.Page21
  },
  {
    uri: '/breeding/roll/22',
    page: Common.Roll.Page22
  },
  {
    uri: '/breeding/roll/23',
    page: Common.Roll.Page23
  },
  {
    uri: '/breeding/roll/24',
    page: Common.Roll.Page24
  },
  {
    uri: '/breeding/roll/25',
    page: Common.Roll.Page25
  },
  {
    uri: '/breeding/roll/26',
    page: Common.Roll.Page26
  },
  {
    uri: '/breeding/roll/27',
    page: Common.Roll.Page27
  },
  {
    uri: '/breeding/roll/28',
    page: Common.Roll.Page28
  },
  {
    uri: '/breeding/roll/29',
    page: Common.Roll.Page29
  },
  {
    uri: '/breeding/roll/30',
    page: Common.Roll.Page30
  },
  {
    uri: '/breeding/standard/0',
    page: Breeding.Standard.Page0
  },
  {
    uri: '/breeding/standard/1',
    page: Breeding.Standard.Page1
  },
  {
    uri: '/breeding/standard/2',
    page: Breeding.Standard.Page2
  },
  {
    uri: '/breeding/standard/3',
    page: Breeding.Standard.Page3
  },
  {
    uri: '/breeding/standard/4',
    page: Breeding.Standard.Page4
  },
  {
    uri: '/breeding/standard/5',
    page: Breeding.Standard.Page5
  },
  {
    uri: '/breeding/standard/6',
    page: Breeding.Standard.Page6
  },
  {
    uri: '/breeding/standard/7',
    page: Breeding.Standard.Page7
  },
  {
    uri: '/breeding/standard/8',
    page: Breeding.Standard.Page8
  },
  {
    uri: '/breeding/standard/9',
    page: Breeding.Standard.Page9
  },
  {
    uri: '/breeding/standard/10',
    page: Breeding.Standard.Page10
  },
  {
    uri: '/breeding/standard/11',
    page: Breeding.Standard.Page11
  },
  {
    uri: '/breeding/standard/12',
    page: Breeding.Standard.Page12
  },
  {
    uri: '/breeding/standard/13',
    page: Breeding.Standard.Page13
  },
  {
    uri: '/breeding/standard/14',
    page: Breeding.Standard.Page14
  },
  {
    uri: '/breeding/standard/15',
    page: Breeding.Standard.Page15
  },
  {
    uri: '/breeding/standard/16',
    page: Breeding.Standard.Page16
  },
  {
    uri: '/breeding/standard/17',
    page: Breeding.Standard.Page17
  },
  {
    uri: '/breeding/standard/18',
    page: Breeding.Standard.Page18
  },
  {
    uri: '/breeding/standard/19',
    page: Breeding.Standard.Page19
  },
  {
    uri: '/breeding/standard/20',
    page: Breeding.Standard.Page20
  },
  {
    uri: '/breeding/standard/21',
    page: Breeding.Standard.Page21
  },
  {
    uri: '/breeding/standard/22',
    page: Breeding.Standard.Page22
  },
  {
    uri: '/breeding/standard/23',
    page: Breeding.Standard.Page23
  },
  {
    uri: '/breeding/standard/24',
    page: Breeding.Standard.Page24
  },
  {
    uri: '/breeding/standard/25',
    page: Breeding.Standard.Page25
  },
  {
    uri: '/breeding/standard/26',
    page: Breeding.Standard.Page26
  },
  {
    uri: '/breeding/standard/27',
    page: Breeding.Standard.Page27
  },
  {
    uri: '/breeding/standard/28',
    page: Breeding.Standard.Page28
  },
  {
    uri: '/breeding/standard/29',
    page: Breeding.Standard.Page29
  },
  {
    uri: '/breeding/standard/30',
    page: Breeding.Standard.Page30
  },

  {
    uri: '/breeding/work/0',
    page: Breeding.Work.Page0
  },
  {
    uri: '/breeding/work/1',
    page: Breeding.Work.Page1
  },
  {
    uri: '/breeding/work/2',
    page: Breeding.Work.Page2
  },
  {
    uri: '/breeding/work/3',
    page: Breeding.Work.Page3
  },
  {
    uri: '/breeding/work/4',
    page: Breeding.Work.Page4
  },
  {
    uri: '/breeding/work/5',
    page: Breeding.Work.Page5
  },
  {
    uri: '/breeding/work/6',
    page: Breeding.Work.Page6
  },
  {
    uri: '/breeding/work/7',
    page: Breeding.Work.Page7
  },
  {
    uri: '/breeding/work/8',
    page: Breeding.Work.Page8
  },
  {
    uri: '/breeding/work/9',
    page: Breeding.Work.Page9
  },
  {
    uri: '/breeding/work/10',
    page: Breeding.Work.Page10
  },
  {
    uri: '/breeding/work/11',
    page: Breeding.Work.Page11
  },
  {
    uri: '/breeding/work/12',
    page: Breeding.Work.Page12
  },
  {
    uri: '/breeding/work/13',
    page: Breeding.Work.Page13
  },
  {
    uri: '/breeding/work/14',
    page: Breeding.Work.Page14
  },
  {
    uri: '/breeding/work/15',
    page: Breeding.Work.Page15
  },
  {
    uri: '/breeding/work/16',
    page: Breeding.Work.Page16
  },
  {
    uri: '/breeding/work/17',
    page: Breeding.Work.Page17
  },
  {
    uri: '/breeding/work/18',
    page: Breeding.Work.Page18
  },
  {
    uri: '/breeding/work/19',
    page: Breeding.Work.Page19
  },
  {
    uri: '/breeding/work/20',
    page: Breeding.Work.Page20
  },
  {
    uri: '/breeding/work/21',
    page: Breeding.Work.Page21
  },
  {
    uri: '/breeding/work/22',
    page: Breeding.Work.Page22
  },
  {
    uri: '/breeding/work/23',
    page: Breeding.Work.Page23
  },
  {
    uri: '/breeding/work/24',
    page: Breeding.Work.Page24
  },
  {
    uri: '/breeding/work/25',
    page: Breeding.Work.Page25
  },
  {
    uri: '/breeding/work/26',
    page: Breeding.Work.Page26
  },
  {
    uri: '/breeding/work/27',
    page: Breeding.Work.Page27
  },
  {
    uri: '/breeding/work/28',
    page: Breeding.Work.Page28
  },
  {
    uri: '/breeding/work/29',
    page: Breeding.Work.Page29
  },
  {
    uri: '/breeding/work/30',
    page: Breeding.Work.Page30
  },

  {
    uri: '/breeding/materials/0',
    page: Breeding.Materials.Page0
  },
  {
    uri: '/breeding/materials/1',
    page: Breeding.Materials.Page1
  },
  {
    uri: '/breeding/materials/2',
    page: Breeding.Materials.Page2
  },
  {
    uri: '/breeding/materials/3',
    page: Breeding.Materials.Page3
  },
  {
    uri: '/breeding/materials/4',
    page: Breeding.Materials.Page4
  },
  {
    uri: '/breeding/materials/5',
    page: Breeding.Materials.Page5
  },
  {
    uri: '/breeding/materials/6',
    page: Breeding.Materials.Page6
  },
  {
    uri: '/breeding/materials/7',
    page: Breeding.Materials.Page7
  },
  {
    uri: '/breeding/materials/8',
    page: Breeding.Materials.Page8
  },
  {
    uri: '/breeding/materials/9',
    page: Breeding.Materials.Page9
  },
  {
    uri: '/breeding/materials/10',
    page: Breeding.Materials.Page10
  },
  {
    uri: '/breeding/materials/11',
    page: Breeding.Materials.Page11
  },
  {
    uri: '/breeding/materials/12',
    page: Breeding.Materials.Page12
  },
  {
    uri: '/breeding/materials/13',
    page: Breeding.Materials.Page13
  },
  {
    uri: '/breeding/materials/14',
    page: Breeding.Materials.Page14
  },
  {
    uri: '/breeding/materials/15',
    page: Breeding.Materials.Page15
  },
  {
    uri: '/breeding/materials/16',
    page: Breeding.Materials.Page16
  },
  {
    uri: '/breeding/materials/17',
    page: Breeding.Materials.Page17
  },
  {
    uri: '/breeding/materials/18',
    page: Breeding.Materials.Page18
  },
  {
    uri: '/breeding/materials/19',
    page: Breeding.Materials.Page19
  },
  {
    uri: '/breeding/materials/20',
    page: Breeding.Materials.Page20
  },
  {
    uri: '/breeding/materials/21',
    page: Breeding.Materials.Page21
  },
  {
    uri: '/breeding/materials/22',
    page: Breeding.Materials.Page22
  },
  {
    uri: '/breeding/materials/23',
    page: Breeding.Materials.Page23
  },
  {
    uri: '/breeding/materials/24',
    page: Breeding.Materials.Page24
  },
  {
    uri: '/breeding/materials/25',
    page: Breeding.Materials.Page25
  },
  {
    uri: '/breeding/materials/26',
    page: Breeding.Materials.Page26
  },
  {
    uri: '/breeding/materials/27',
    page: Breeding.Materials.Page27
  },
  {
    uri: '/breeding/materials/28',
    page: Breeding.Materials.Page28
  },
  {
    uri: '/breeding/materials/29',
    page: Breeding.Materials.Page29
  },
  {
    uri: '/breeding/materials/30',
    page: Breeding.Materials.Page30
  },

  {
    uri: '/breeding/receive/0',
    page: Breeding.Receive.Page0
  },
  {
    uri: '/breeding/receive/1',
    page: Breeding.Receive.Page1
  },
  {
    uri: '/breeding/receive/2',
    page: Breeding.Receive.Page2
  },
  {
    uri: '/breeding/receive/3',
    page: Breeding.Receive.Page3
  },
  {
    uri: '/breeding/receive/4',
    page: Breeding.Receive.Page4
  },
  {
    uri: '/breeding/receive/5',
    page: Breeding.Receive.Page5
  },
  {
    uri: '/breeding/receive/6',
    page: Breeding.Receive.Page6
  },
  {
    uri: '/breeding/receive/7',
    page: Breeding.Receive.Page7
  },
  {
    uri: '/breeding/receive/8',
    page: Breeding.Receive.Page8
  },
  {
    uri: '/breeding/receive/9',
    page: Breeding.Receive.Page9
  },
  {
    uri: '/breeding/receive/10',
    page: Breeding.Receive.Page10
  },
  {
    uri: '/breeding/receive/11',
    page: Breeding.Receive.Page11
  },
  {
    uri: '/breeding/receive/12',
    page: Breeding.Receive.Page12
  },
  {
    uri: '/breeding/receive/13',
    page: Breeding.Receive.Page13
  },
  {
    uri: '/breeding/receive/14',
    page: Breeding.Receive.Page14
  },
  {
    uri: '/breeding/receive/15',
    page: Breeding.Receive.Page15
  },
  {
    uri: '/breeding/receive/16',
    page: Breeding.Receive.Page16
  },
  {
    uri: '/breeding/receive/17',
    page: Breeding.Receive.Page17
  },
  {
    uri: '/breeding/receive/18',
    page: Breeding.Receive.Page18
  },
  {
    uri: '/breeding/receive/19',
    page: Breeding.Receive.Page19
  },
  {
    uri: '/breeding/receive/20',
    page: Breeding.Receive.Page20
  },
  {
    uri: '/breeding/receive/21',
    page: Breeding.Receive.Page21
  },
  {
    uri: '/breeding/receive/22',
    page: Breeding.Receive.Page22
  },
  {
    uri: '/breeding/receive/23',
    page: Breeding.Receive.Page23
  },
  {
    uri: '/breeding/receive/24',
    page: Breeding.Receive.Page24
  },
  {
    uri: '/breeding/receive/25',
    page: Breeding.Receive.Page25
  },
  {
    uri: '/breeding/receive/26',
    page: Breeding.Receive.Page26
  },
  {
    uri: '/breeding/receive/27',
    page: Breeding.Receive.Page27
  },
  {
    uri: '/breeding/receive/28',
    page: Breeding.Receive.Page28
  },
  {
    uri: '/breeding/receive/29',
    page: Breeding.Receive.Page29
  },
  {
    uri: '/breeding/receive/30',
    page: Breeding.Receive.Page30
  },

  {
    uri: '/breeding/growing/0',
    page: Breeding.Growing.Page0
  },
  {
    uri: '/breeding/growing/1',
    page: Breeding.Growing.Page1
  },
  {
    uri: '/breeding/growing/2',
    page: Breeding.Growing.Page2
  },
  {
    uri: '/breeding/growing/3',
    page: Breeding.Growing.Page3
  },
  {
    uri: '/breeding/growing/4',
    page: Breeding.Growing.Page4
  },
  {
    uri: '/breeding/growing/5',
    page: Breeding.Growing.Page5
  },
  {
    uri: '/breeding/growing/6',
    page: Breeding.Growing.Page6
  },
  {
    uri: '/breeding/growing/7',
    page: Breeding.Growing.Page7
  },
  {
    uri: '/breeding/growing/8',
    page: Breeding.Growing.Page8
  },
  {
    uri: '/breeding/growing/9',
    page: Breeding.Growing.Page9
  },
  {
    uri: '/breeding/growing/10',
    page: Breeding.Growing.Page10
  },
  {
    uri: '/breeding/growing/11',
    page: Breeding.Growing.Page11
  },
  {
    uri: '/breeding/growing/12',
    page: Breeding.Growing.Page12
  },
  {
    uri: '/breeding/growing/13',
    page: Breeding.Growing.Page13
  },
  {
    uri: '/breeding/growing/14',
    page: Breeding.Growing.Page14
  },
  {
    uri: '/breeding/growing/15',
    page: Breeding.Growing.Page15
  },
  {
    uri: '/breeding/growing/16',
    page: Breeding.Growing.Page16
  },
  {
    uri: '/breeding/growing/17',
    page: Breeding.Growing.Page17
  },
  {
    uri: '/breeding/growing/18',
    page: Breeding.Growing.Page18
  },
  {
    uri: '/breeding/growing/19',
    page: Breeding.Growing.Page19
  },
  {
    uri: '/breeding/growing/20',
    page: Breeding.Growing.Page20
  },
  {
    uri: '/breeding/growing/21',
    page: Breeding.Growing.Page21
  },
  {
    uri: '/breeding/growing/22',
    page: Breeding.Growing.Page22
  },
  {
    uri: '/breeding/growing/23',
    page: Breeding.Growing.Page23
  },
  {
    uri: '/breeding/growing/24',
    page: Breeding.Growing.Page24
  },
  {
    uri: '/breeding/growing/25',
    page: Breeding.Growing.Page25
  },
  {
    uri: '/breeding/growing/26',
    page: Breeding.Growing.Page26
  },
  {
    uri: '/breeding/growing/27',
    page: Breeding.Growing.Page27
  },
  {
    uri: '/breeding/growing/28',
    page: Breeding.Growing.Page28
  },
  {
    uri: '/breeding/growing/29',
    page: Breeding.Growing.Page29
  },
  {
    uri: '/breeding/growing/30',
    page: Breeding.Growing.Page30
  },

  {
    uri: '/breeding/egg/0',
    page: Breeding.Egg.Page0
  },
  {
    uri: '/breeding/egg/1',
    page: Breeding.Egg.Page1
  },
  {
    uri: '/breeding/egg/2',
    page: Breeding.Egg.Page2
  },
  {
    uri: '/breeding/egg/3',
    page: Breeding.Egg.Page3
  },
  {
    uri: '/breeding/egg/4',
    page: Breeding.Egg.Page4
  },
  {
    uri: '/breeding/egg/5',
    page: Breeding.Egg.Page5
  },
  {
    uri: '/breeding/egg/6',
    page: Breeding.Egg.Page6
  },
  {
    uri: '/breeding/egg/7',
    page: Breeding.Egg.Page7
  },
  {
    uri: '/breeding/egg/8',
    page: Breeding.Egg.Page8
  },
  {
    uri: '/breeding/egg/9',
    page: Breeding.Egg.Page9
  },
  {
    uri: '/breeding/egg/10',
    page: Breeding.Egg.Page10
  },
  {
    uri: '/breeding/egg/11',
    page: Breeding.Egg.Page11
  },
  {
    uri: '/breeding/egg/12',
    page: Breeding.Egg.Page12
  },
  {
    uri: '/breeding/egg/13',
    page: Breeding.Egg.Page13
  },
  {
    uri: '/breeding/egg/14',
    page: Breeding.Egg.Page14
  },
  {
    uri: '/breeding/egg/15',
    page: Breeding.Egg.Page15
  },
  {
    uri: '/breeding/egg/16',
    page: Breeding.Egg.Page16
  },
  {
    uri: '/breeding/egg/17',
    page: Breeding.Egg.Page17
  },
  {
    uri: '/breeding/egg/18',
    page: Breeding.Egg.Page18
  },
  {
    uri: '/breeding/egg/19',
    page: Breeding.Egg.Page19
  },
  {
    uri: '/breeding/egg/20',
    page: Breeding.Egg.Page20
  },
  {
    uri: '/breeding/egg/21',
    page: Breeding.Egg.Page21
  },
  {
    uri: '/breeding/egg/22',
    page: Breeding.Egg.Page22
  },
  {
    uri: '/breeding/egg/23',
    page: Breeding.Egg.Page23
  },
  {
    uri: '/breeding/egg/24',
    page: Breeding.Egg.Page24
  },
  {
    uri: '/breeding/egg/25',
    page: Breeding.Egg.Page25
  },
  {
    uri: '/breeding/egg/26',
    page: Breeding.Egg.Page26
  },
  {
    uri: '/breeding/egg/27',
    page: Breeding.Egg.Page27
  },
  {
    uri: '/breeding/egg/28',
    page: Breeding.Egg.Page28
  },
  {
    uri: '/breeding/egg/29',
    page: Breeding.Egg.Page29
  },
  {
    uri: '/breeding/egg/30',
    page: Breeding.Egg.Page30
  },

  {
    uri: '/breeding/release/0',
    page: Breeding.Release.Page0
  },
  {
    uri: '/breeding/release/1',
    page: Breeding.Release.Page1
  },
  {
    uri: '/breeding/release/2',
    page: Breeding.Release.Page2
  },
  {
    uri: '/breeding/release/3',
    page: Breeding.Release.Page3
  },
  {
    uri: '/breeding/release/4',
    page: Breeding.Release.Page4
  },
  {
    uri: '/breeding/release/5',
    page: Breeding.Release.Page5
  },
  {
    uri: '/breeding/release/6',
    page: Breeding.Release.Page6
  },
  {
    uri: '/breeding/release/7',
    page: Breeding.Release.Page7
  },
  {
    uri: '/breeding/release/8',
    page: Breeding.Release.Page8
  },
  {
    uri: '/breeding/release/9',
    page: Breeding.Release.Page9
  },
  {
    uri: '/breeding/release/10',
    page: Breeding.Release.Page10
  },
  {
    uri: '/breeding/release/11',
    page: Breeding.Release.Page11
  },
  {
    uri: '/breeding/release/12',
    page: Breeding.Release.Page12
  },
  {
    uri: '/breeding/release/13',
    page: Breeding.Release.Page13
  },
  {
    uri: '/breeding/release/14',
    page: Breeding.Release.Page14
  },
  {
    uri: '/breeding/release/15',
    page: Breeding.Release.Page15
  },
  {
    uri: '/breeding/release/16',
    page: Breeding.Release.Page16
  },
  {
    uri: '/breeding/release/17',
    page: Breeding.Release.Page17
  },
  {
    uri: '/breeding/release/18',
    page: Breeding.Release.Page18
  },
  {
    uri: '/breeding/release/19',
    page: Breeding.Release.Page19
  },
  {
    uri: '/breeding/release/20',
    page: Breeding.Release.Page20
  },
  {
    uri: '/breeding/release/21',
    page: Breeding.Release.Page21
  },
  {
    uri: '/breeding/release/22',
    page: Breeding.Release.Page22
  },
  {
    uri: '/breeding/release/23',
    page: Breeding.Release.Page23
  },
  {
    uri: '/breeding/release/24',
    page: Breeding.Release.Page24
  },
  {
    uri: '/breeding/release/25',
    page: Breeding.Release.Page25
  },
  {
    uri: '/breeding/release/26',
    page: Breeding.Release.Page26
  },
  {
    uri: '/breeding/release/27',
    page: Breeding.Release.Page27
  },
  {
    uri: '/breeding/release/28',
    page: Breeding.Release.Page28
  },
  {
    uri: '/breeding/release/29',
    page: Breeding.Release.Page29
  },
  {
    uri: '/breeding/release/30',
    page: Breeding.Release.Page30
  }
];

export default BreedingRouteList;
