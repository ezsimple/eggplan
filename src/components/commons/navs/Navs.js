import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import './Navs.module.scss';

import {
  CommonRouteList,
  BreedingRouteList,
  BroilerRouteList,
  HatcheryRouteList
} from 'route/';

class Navs extends Component {
  constructor(props) {
    super(props);
    console.log('Navs:props', this.props);
  }
  render() {
    console.log('Navs : ', this.props);
    return (
      <Fragment>
        <div>MEMBER(사용자)</div>
        <table style={{ width: '100%' }}>
          <thead>
            <col style={{ width: '20px' }}></col>
            <col></col>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  ID
                </Button>
              </td>
              <td>
                <Link to="/common/member/00">00,</Link>
                <Link to="/common/member/01">01,</Link>
                <Link to="/common/member/02">02,</Link>
                <Link to="/common/member/03">03,</Link>
                <Link to="/common/member/04">04,</Link>
                <Link to="/common/member/05">05,</Link>
                <Link to="/common/member/06">06,</Link>
                <Link to="/common/member/07">07,</Link>
                <Link to="/common/member/08">08,</Link>
                <Link to="/common/member/09">09,</Link>
                <Link to="/common/member/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROUP
                </Button>
              </td>
              <td>
                <Link to="/common/group/00">00,</Link>
                <Link to="/common/group/01">01,</Link>
                <Link to="/common/group/02">02,</Link>
                <Link to="/common/group/03">03,</Link>
                <Link to="/common/group/04">04,</Link>
                <Link to="/common/group/05">05,</Link>
                <Link to="/common/group/06">06,</Link>
                <Link to="/common/group/07">07,</Link>
                <Link to="/common/group/08">08,</Link>
                <Link to="/common/group/09">09,</Link>
                <Link to="/common/group/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  ROLL
                </Button>
              </td>
              <td>
                <Link to="/common/roll/00">00,</Link>
                <Link to="/common/roll/01">01,</Link>
                <Link to="/common/roll/02">02,</Link>
                <Link to="/common/roll/03">03,</Link>
                <Link to="/common/roll/04">04,</Link>
                <Link to="/common/roll/05">05,</Link>
                <Link to="/common/roll/06">06,</Link>
                <Link to="/common/roll/07">07,</Link>
                <Link to="/common/roll/08">08,</Link>
                <Link to="/common/roll/09">09,</Link>
                <Link to="/common/roll/10">10,</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>BREEDING(종계)</div>
        <table style={{ width: '100%' }}>
          <thead>
            <col style={{ width: '20px' }}></col>
            <col></col>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  STANDARD
                </Button>
              </td>
              <td>
                <Link to="/breeding/standard/00">00,</Link>
                <Link to="/breeding/standard/01">01,</Link>
                <Link to="/breeding/standard/02">02,</Link>
                <Link to="/breeding/standard/03">03,</Link>
                <Link to="/breeding/standard/04">04,</Link>
                <Link to="/breeding/standard/05">05,</Link>
                <Link to="/breeding/standard/06">06,</Link>
                <Link to="/breeding/standard/07">07,</Link>
                <Link to="/breeding/standard/08">08,</Link>
                <Link to="/breeding/standard/09">09,</Link>
                <Link to="/breeding/standard/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  WORK SCHEDULE
                </Button>
              </td>
              <td>
                <Link to="/breeding/work/00">00,</Link>
                <Link to="/breeding/work/01">01,</Link>
                <Link to="/breeding/work/02">02,</Link>
                <Link to="/breeding/work/03">03,</Link>
                <Link to="/breeding/work/04">04,</Link>
                <Link to="/breeding/work/05">05,</Link>
                <Link to="/breeding/work/06">06,</Link>
                <Link to="/breeding/work/07">07,</Link>
                <Link to="/breeding/work/08">08,</Link>
                <Link to="/breeding/work/09">09,</Link>
                <Link to="/breeding/work/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  MATRIALS
                </Button>
              </td>
              <td>
                <Link to="/breeding/matrials/00">00,</Link>
                <Link to="/breeding/matrials/01">01,</Link>
                <Link to="/breeding/matrials/02">02,</Link>
                <Link to="/breeding/matrials/03">03,</Link>
                <Link to="/breeding/matrials/04">04,</Link>
                <Link to="/breeding/matrials/05">05,</Link>
                <Link to="/breeding/matrials/06">06,</Link>
                <Link to="/breeding/matrials/07">07,</Link>
                <Link to="/breeding/matrials/08">08,</Link>
                <Link to="/breeding/matrials/09">09,</Link>
                <Link to="/breeding/matrials/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE
                </Button>
              </td>
              <td>
                <Link to="/breeding/receive/00">00,</Link>
                <Link to="/breeding/receive/01">01,</Link>
                <Link to="/breeding/receive/02">02,</Link>
                <Link to="/breeding/receive/03">03,</Link>
                <Link to="/breeding/receive/04">04,</Link>
                <Link to="/breeding/receive/05">05,</Link>
                <Link to="/breeding/receive/06">06,</Link>
                <Link to="/breeding/receive/07">07,</Link>
                <Link to="/breeding/receive/08">08,</Link>
                <Link to="/breeding/receive/09">09,</Link>
                <Link to="/breeding/receive/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROWING LOG
                </Button>
              </td>
              <td>
                <Link to="/breeding/growing/00">00,</Link>
                <Link to="/breeding/growing/01">01,</Link>
                <Link to="/breeding/growing/02">02,</Link>
                <Link to="/breeding/growing/03">03,</Link>
                <Link to="/breeding/growing/04">04,</Link>
                <Link to="/breeding/growing/05">05,</Link>
                <Link to="/breeding/growing/06">06,</Link>
                <Link to="/breeding/growing/07">07,</Link>
                <Link to="/breeding/growing/08">08,</Link>
                <Link to="/breeding/growing/09">09,</Link>
                <Link to="/breeding/growing/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  EGG PRODUCTION
                </Button>
              </td>
              <td>
                <Link to="/breeding/egg/00">00,</Link>
                <Link to="/breeding/egg/01">01,</Link>
                <Link to="/breeding/egg/02">02,</Link>
                <Link to="/breeding/egg/03">03,</Link>
                <Link to="/breeding/egg/04">04,</Link>
                <Link to="/breeding/egg/05">05,</Link>
                <Link to="/breeding/egg/06">06,</Link>
                <Link to="/breeding/egg/07">07,</Link>
                <Link to="/breeding/egg/08">08,</Link>
                <Link to="/breeding/egg/09">09,</Link>
                <Link to="/breeding/egg/10">10,</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RELEASE
                </Button>
              </td>
              <td>
                <Link to="/breeding/release/00">00,</Link>
                <Link to="/breeding/release/01">01,</Link>
                <Link to="/breeding/release/02">02,</Link>
                <Link to="/breeding/release/03">03,</Link>
                <Link to="/breeding/release/04">04,</Link>
                <Link to="/breeding/release/05">05,</Link>
                <Link to="/breeding/release/06">06,</Link>
                <Link to="/breeding/release/07">07,</Link>
                <Link to="/breeding/release/08">08,</Link>
                <Link to="/breeding/release/09">09,</Link>
                <Link to="/breeding/release/10">10,</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>HATCHERY(부화장)</div>
        <table style={{ width: '100%' }}>
          <thead>
            <col style={{ width: '20px' }}></col>
            <col></col>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE(입고관리)
                </Button>
              </td>
              <td>입고관리</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE(입고목록/입란)
                </Button>
              </td>
              <td>입고목록/입란</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  CANDLING
                </Button>
              </td>
              <td>캔들링</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  HATCHER
                </Button>
              </td>
              <td>해쳐</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANSFER(계란)
                </Button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANFER(병아리)
                </Button>
              </td>
              <td>병아리</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  CUTTING
                </Button>
              </td>
              <td>커팅</td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>육계</div>
        <table style={{ width: '100%' }}>
          <thead>
            <col style={{ width: '20px' }}></col>
            <col></col>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE
                </Button>
              </td>
              <td>입고</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROWING
                </Button>
              </td>
              <td>성장일지</td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANSFER
                </Button>
              </td>
              <td>출고</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Navs;
