import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import LogoGreen from 'images/logo/Blocery_logo_green.png';
// import LogoWhite from 'images/logo/Blocery_logo_white.png';
// import LogoBlack from 'images/logo/Blocery_logo_black.png';
// import LogoGreenVertical from 'images/logo/Blocery_logo_green_vertical.png';
// import SymbolGreen from 'images/logo/Blocery_symbol_green.png';

import PigLogoImg from 'images/logo.png';
import PigMenuBtnImg from 'images/menubar.png';

//import styles from './Logo.module.scss';

// const BloceryLogoGreen = props => <img src={LogoGreen} style={props.style} />;
// const BloceryLogoWhite = props => <img src={LogoWhite} style={props.style} />;
// const BloceryLogoBlack = props => <img src={LogoBlack} style={props.style} />;
// const BloceryLogoGreenVertical = props => (
//   <img src={LogoGreenVertical} style={props.style} />
// );
// const BlocerySymbolGreen = props => (
//   <img src={SymbolGreen} style={props.style} />
// );

// import styled from 'styled-components';
// const PigLogoStyle = styled.div`
//   .navbar {
//     position: relative;
//     text-align: center !important;
//     padding: 0 !important;
//     display: block;
//   }
//   .navbar .btnmenu {
//     position: absolute;
//     left: 0;
//     top: 5px;
//   }
//   .navbar .btnmenu img {
//     width: 28px;
//   }
//   .navbar .btnmenu i {
//     font-size: 24px;
//   }
//   .navbar h1 {
//     text-align: center !important;
//     line-height: inherit;
//   }
//   .navbar h1 img {
//     width: 180px;
//   }
// `;

const PigLogo = () => (
  <div className="navbar">
    <h1>
      <img src={PigLogoImg} alt={'logo'} />
    </h1>
    <div className="btnmenu">
      <Link to="/popup/common/3">
        <p href="#">
          <img src={PigMenuBtnImg} alt={'menubar'} />
        </p>
      </Link>
    </div>
  </div>
);

PigLogo.defaultProps = {
  outerClassName: 'navbar',
  innerClassName: 'btnmenu',
};

// BloceryLogoGreen.propTypes = {
//   style: PropTypes.object,
// };
// BloceryLogoGreen.defaultProps = {
//   style: { width: '100px', height: '100%' },
// };
// BloceryLogoWhite.propTypes = {
//   style: PropTypes.object,
// };
// BloceryLogoWhite.defaultProps = {
//   style: { width: '100px', height: '100%' },
// };
// BloceryLogoBlack.propTypes = {
//   style: PropTypes.object,
// };
// BloceryLogoBlack.defaultProps = {
//   style: { width: '100px', height: '100%' },
// };
// BloceryLogoGreenVertical.propTypes = {
//   style: PropTypes.object,
// };
// BloceryLogoGreenVertical.defaultProps = {
//   style: { width: '100px', height: '100%' },
// };
// BlocerySymbolGreen.propTypes = {
//   style: PropTypes.object,
// };
// BlocerySymbolGreen.defaultProps = {
//   style: { width: '100px', height: '100%' },
// };
export {
  // BloceryLogoGreen,
  // BloceryLogoWhite,
  // BloceryLogoBlack,
  // BloceryLogoGreenVertical,
  // BlocerySymbolGreen,
  PigLogo,
};
