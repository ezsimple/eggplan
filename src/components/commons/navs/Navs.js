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
    const width = '300px';
    return (
      <Fragment>
        <div>
          <Button outline color="warning">
            MEMBER(사용자)
          </Button>
        </div>
        <table style={{ width: '100%' }}>
          <colgroup>
            <col style={{ width: width }}></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  ID
                </Button>
              </td>
              <td>
                <Link to="/common/member/0">0,</Link>
                <Link to="/common/member/1">1,</Link>
                <Link to="/common/member/2">2,</Link>
                <Link to="/common/member/3">3,</Link>
                <Link to="/common/member/4">4,</Link>
                <Link to="/common/member/5">5,</Link>
                <Link to="/common/member/6">6,</Link>
                <Link to="/common/member/7">7,</Link>
                <Link to="/common/member/8">8,</Link>
                <Link to="/common/member/9">9,</Link>
                <Link to="/common/member/10">10,</Link>
                <Link to="/common/member/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROUP
                </Button>
              </td>
              <td>
                <Link to="/common/group/0">0,</Link>
                <Link to="/common/group/1">1,</Link>
                <Link to="/common/group/2">2,</Link>
                <Link to="/common/group/3">3,</Link>
                <Link to="/common/group/4">4,</Link>
                <Link to="/common/group/5">5,</Link>
                <Link to="/common/group/6">6,</Link>
                <Link to="/common/group/7">7,</Link>
                <Link to="/common/group/8">8,</Link>
                <Link to="/common/group/9">9,</Link>
                <Link to="/common/group/10">10,</Link>
                <Link to="/common/group/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  ROLL
                </Button>
              </td>
              <td>
                <Link to="/common/roll/0">0,</Link>
                <Link to="/common/roll/1">1,</Link>
                <Link to="/common/roll/2">2,</Link>
                <Link to="/common/roll/3">3,</Link>
                <Link to="/common/roll/4">4,</Link>
                <Link to="/common/roll/5">5,</Link>
                <Link to="/common/roll/6">6,</Link>
                <Link to="/common/roll/7">7,</Link>
                <Link to="/common/roll/8">8,</Link>
                <Link to="/common/roll/9">9,</Link>
                <Link to="/common/roll/10">10,</Link>
                <Link to="/common/roll/30">...30</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>
          <Button outline color="warning">
            BREEDING(종계)
          </Button>
        </div>
        <table style={{ width: '100%' }}>
          <colgroup>
            <col style={{ width: width }}></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  STANDARD
                </Button>
              </td>
              <td>
                <Link to="/breeding/standard/0">0,</Link>
                <Link to="/breeding/standard/1">1,</Link>
                <Link to="/breeding/standard/2">2,</Link>
                <Link to="/breeding/standard/3">3,</Link>
                <Link to="/breeding/standard/4">4,</Link>
                <Link to="/breeding/standard/5">5,</Link>
                <Link to="/breeding/standard/6">6,</Link>
                <Link to="/breeding/standard/7">7,</Link>
                <Link to="/breeding/standard/8">8,</Link>
                <Link to="/breeding/standard/9">9,</Link>
                <Link to="/breeding/standard/10">10,</Link>
                <Link to="/breeding/standard/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  WORK SCHEDULE
                </Button>
              </td>
              <td>
                <Link to="/breeding/work/0">0,</Link>
                <Link to="/breeding/work/1">1,</Link>
                <Link to="/breeding/work/2">2,</Link>
                <Link to="/breeding/work/3">3,</Link>
                <Link to="/breeding/work/4">4,</Link>
                <Link to="/breeding/work/5">5,</Link>
                <Link to="/breeding/work/6">6,</Link>
                <Link to="/breeding/work/7">7,</Link>
                <Link to="/breeding/work/8">8,</Link>
                <Link to="/breeding/work/9">9,</Link>
                <Link to="/breeding/work/10">10,</Link>
                <Link to="/breeding/work/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  MATERIALS
                </Button>
              </td>
              <td>
                <Link to="/breeding/materials/0">0,</Link>
                <Link to="/breeding/materials/1">1,</Link>
                <Link to="/breeding/materials/2">2,</Link>
                <Link to="/breeding/materials/3">3,</Link>
                <Link to="/breeding/materials/4">4,</Link>
                <Link to="/breeding/materials/5">5,</Link>
                <Link to="/breeding/materials/6">6,</Link>
                <Link to="/breeding/materials/7">7,</Link>
                <Link to="/breeding/materials/8">8,</Link>
                <Link to="/breeding/materials/9">9,</Link>
                <Link to="/breeding/materials/10">10,</Link>
                <Link to="/breeding/materials/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE
                </Button>
              </td>
              <td>
                <Link to="/breeding/receive/0">0,</Link>
                <Link to="/breeding/receive/1">1,</Link>
                <Link to="/breeding/receive/2">2,</Link>
                <Link to="/breeding/receive/3">3,</Link>
                <Link to="/breeding/receive/4">4,</Link>
                <Link to="/breeding/receive/5">5,</Link>
                <Link to="/breeding/receive/6">6,</Link>
                <Link to="/breeding/receive/7">7,</Link>
                <Link to="/breeding/receive/8">8,</Link>
                <Link to="/breeding/receive/9">9,</Link>
                <Link to="/breeding/receive/10">10,</Link>
                <Link to="/breeding/receive/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROWING LOG
                </Button>
              </td>
              <td>
                <Link to="/breeding/growing/0">0,</Link>
                <Link to="/breeding/growing/1">1,</Link>
                <Link to="/breeding/growing/2">2,</Link>
                <Link to="/breeding/growing/3">3,</Link>
                <Link to="/breeding/growing/4">4,</Link>
                <Link to="/breeding/growing/5">5,</Link>
                <Link to="/breeding/growing/6">6,</Link>
                <Link to="/breeding/growing/7">7,</Link>
                <Link to="/breeding/growing/8">8,</Link>
                <Link to="/breeding/growing/9">9,</Link>
                <Link to="/breeding/growing/10">10,</Link>
                <Link to="/breeding/growing/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  EGG PRODUCTION
                </Button>
              </td>
              <td>
                <Link to="/breeding/egg/0">0,</Link>
                <Link to="/breeding/egg/1">1,</Link>
                <Link to="/breeding/egg/2">2,</Link>
                <Link to="/breeding/egg/3">3,</Link>
                <Link to="/breeding/egg/4">4,</Link>
                <Link to="/breeding/egg/5">5,</Link>
                <Link to="/breeding/egg/6">6,</Link>
                <Link to="/breeding/egg/7">7,</Link>
                <Link to="/breeding/egg/8">8,</Link>
                <Link to="/breeding/egg/9">9,</Link>
                <Link to="/breeding/egg/10">10,</Link>
                <Link to="/breeding/egg/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RELEASE
                </Button>
              </td>
              <td>
                <Link to="/breeding/release/0">0,</Link>
                <Link to="/breeding/release/1">1,</Link>
                <Link to="/breeding/release/2">2,</Link>
                <Link to="/breeding/release/3">3,</Link>
                <Link to="/breeding/release/4">4,</Link>
                <Link to="/breeding/release/5">5,</Link>
                <Link to="/breeding/release/6">6,</Link>
                <Link to="/breeding/release/7">7,</Link>
                <Link to="/breeding/release/8">8,</Link>
                <Link to="/breeding/release/9">9,</Link>
                <Link to="/breeding/release/10">10,</Link>
                <Link to="/breeding/release/30">...30</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>
          <Button outline color="warning">
            HATCHERY(부화장)
          </Button>
        </div>
        <table style={{ width: '100%' }}>
          <colgroup>
            <col style={{ width: width }}></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE(입고관리)
                </Button>
              </td>
              <td>
                <Link to="/hatchery/rcvmng/0">0,</Link>
                <Link to="/hatchery/rcvmng/1">1,</Link>
                <Link to="/hatchery/rcvmng/2">2,</Link>
                <Link to="/hatchery/rcvmng/3">3,</Link>
                <Link to="/hatchery/rcvmng/4">4,</Link>
                <Link to="/hatchery/rcvmng/5">5,</Link>
                <Link to="/hatchery/rcvmng/6">6,</Link>
                <Link to="/hatchery/rcvmng/7">7,</Link>
                <Link to="/hatchery/rcvmng/8">8,</Link>
                <Link to="/hatchery/rcvmng/9">9,</Link>
                <Link to="/hatchery/rcvmng/10">10,</Link>
                <Link to="/hatchery/rcvmng/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE(입고목록/입란)
                </Button>
              </td>
              <td>
                <Link to="/hatchery/rcvlist/0">0,</Link>
                <Link to="/hatchery/rcvlist/1">1,</Link>
                <Link to="/hatchery/rcvlist/2">2,</Link>
                <Link to="/hatchery/rcvlist/3">3,</Link>
                <Link to="/hatchery/rcvlist/4">4,</Link>
                <Link to="/hatchery/rcvlist/5">5,</Link>
                <Link to="/hatchery/rcvlist/6">6,</Link>
                <Link to="/hatchery/rcvlist/7">7,</Link>
                <Link to="/hatchery/rcvlist/8">8,</Link>
                <Link to="/hatchery/rcvlist/9">9,</Link>
                <Link to="/hatchery/rcvlist/10">10,</Link>
                <Link to="/hatchery/rcvlist/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  CANDLING
                </Button>
              </td>
              <td>
                <Link to="/hatchery/candling/0">0,</Link>
                <Link to="/hatchery/candling/1">1,</Link>
                <Link to="/hatchery/candling/2">2,</Link>
                <Link to="/hatchery/candling/3">3,</Link>
                <Link to="/hatchery/candling/4">4,</Link>
                <Link to="/hatchery/candling/5">5,</Link>
                <Link to="/hatchery/candling/6">6,</Link>
                <Link to="/hatchery/candling/7">7,</Link>
                <Link to="/hatchery/candling/8">8,</Link>
                <Link to="/hatchery/candling/9">9,</Link>
                <Link to="/hatchery/candling/10">10,</Link>
                <Link to="/hatchery/candling/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  HATCHER
                </Button>
              </td>
              <td>
                <Link to="/hatchery/hatcher/0">0,</Link>
                <Link to="/hatchery/hatcher/1">1,</Link>
                <Link to="/hatchery/hatcher/2">2,</Link>
                <Link to="/hatchery/hatcher/3">3,</Link>
                <Link to="/hatchery/hatcher/4">4,</Link>
                <Link to="/hatchery/hatcher/5">5,</Link>
                <Link to="/hatchery/hatcher/6">6,</Link>
                <Link to="/hatchery/hatcher/7">7,</Link>
                <Link to="/hatchery/hatcher/8">8,</Link>
                <Link to="/hatchery/hatcher/9">9,</Link>
                <Link to="/hatchery/hatcher/10">10,</Link>
                <Link to="/hatchery/hatcher/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANSFER(계란)
                </Button>
              </td>
              <td>
                <Link to="/hatchery/transegg/0">0,</Link>
                <Link to="/hatchery/transegg/1">1,</Link>
                <Link to="/hatchery/transegg/2">2,</Link>
                <Link to="/hatchery/transegg/3">3,</Link>
                <Link to="/hatchery/transegg/4">4,</Link>
                <Link to="/hatchery/transegg/5">5,</Link>
                <Link to="/hatchery/transegg/6">6,</Link>
                <Link to="/hatchery/transegg/7">7,</Link>
                <Link to="/hatchery/transegg/8">8,</Link>
                <Link to="/hatchery/transegg/9">9,</Link>
                <Link to="/hatchery/transegg/10">10,</Link>
                <Link to="/hatchery/transegg/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANFER(병아리)
                </Button>
              </td>
              <td>
                <Link to="/hatchery/transchick/1">1,</Link>
                <Link to="/hatchery/transchick/2">2,</Link>
                <Link to="/hatchery/transchick/3">3,</Link>
                <Link to="/hatchery/transchick/4">4,</Link>
                <Link to="/hatchery/transchick/5">5,</Link>
                <Link to="/hatchery/transchick/6">6,</Link>
                <Link to="/hatchery/transchick/7">7,</Link>
                <Link to="/hatchery/transchick/8">8,</Link>
                <Link to="/hatchery/transchick/9">9,</Link>
                <Link to="/hatchery/transchick/10">10,</Link>
                <Link to="/hatchery/transchick/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  CUTTING
                </Button>
              </td>
              <td>
                <Link to="/hatchery/cutting/1">1,</Link>
                <Link to="/hatchery/cutting/2">2,</Link>
                <Link to="/hatchery/cutting/3">3,</Link>
                <Link to="/hatchery/cutting/4">4,</Link>
                <Link to="/hatchery/cutting/5">5,</Link>
                <Link to="/hatchery/cutting/6">6,</Link>
                <Link to="/hatchery/cutting/7">7,</Link>
                <Link to="/hatchery/cutting/8">8,</Link>
                <Link to="/hatchery/cutting/9">9,</Link>
                <Link to="/hatchery/cutting/10">10,</Link>
                <Link to="/hatchery/cutting/30">...30</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br>
        <div>
          <Button outline color="warning">
            BROILER(육계)
          </Button>
        </div>
        <table style={{ width: '100%' }}>
          <colgroup>
            <col style={{ width: width }}></col>
            <col></col>
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  RECEIVE
                </Button>
              </td>
              <td>
                <Link to="/broiler/receive/0">0,</Link>
                <Link to="/broiler/receive/1">1,</Link>
                <Link to="/broiler/receive/2">2,</Link>
                <Link to="/broiler/receive/3">3,</Link>
                <Link to="/broiler/receive/4">4,</Link>
                <Link to="/broiler/receive/5">5,</Link>
                <Link to="/broiler/receive/6">6,</Link>
                <Link to="/broiler/receive/7">7,</Link>
                <Link to="/broiler/receive/8">8,</Link>
                <Link to="/broiler/receive/9">9,</Link>
                <Link to="/broiler/receive/10">10,</Link>
                <Link to="/broiler/receive/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  GROWING
                </Button>
              </td>
              <td>
                <Link to="/broiler/growing/0">0,</Link>
                <Link to="/broiler/growing/1">1,</Link>
                <Link to="/broiler/growing/2">2,</Link>
                <Link to="/broiler/growing/3">3,</Link>
                <Link to="/broiler/growing/4">4,</Link>
                <Link to="/broiler/growing/5">5,</Link>
                <Link to="/broiler/growing/6">6,</Link>
                <Link to="/broiler/growing/7">7,</Link>
                <Link to="/broiler/growing/8">8,</Link>
                <Link to="/broiler/growing/9">9,</Link>
                <Link to="/broiler/growing/10">10,</Link>
                <Link to="/broiler/growing/30">...30</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Button outline color="primary" className="ml2 fl">
                  TRANSFER
                </Button>
              </td>
              <td>
                <Link to="/broiler/transfer/0">0,</Link>
                <Link to="/broiler/transfer/1">1,</Link>
                <Link to="/broiler/transfer/2">2,</Link>
                <Link to="/broiler/transfer/3">3,</Link>
                <Link to="/broiler/transfer/4">4,</Link>
                <Link to="/broiler/transfer/5">5,</Link>
                <Link to="/broiler/transfer/6">6,</Link>
                <Link to="/broiler/transfer/7">7,</Link>
                <Link to="/broiler/transfer/8">8,</Link>
                <Link to="/broiler/transfer/9">9,</Link>
                <Link to="/broiler/transfer/10">10,</Link>
                <Link to="/broiler/transfer/30">...30</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Navs;
