import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import EggLogoImg from 'images/logo.png';
import EggMenuBtnImg from 'images/menubar.png';

const EggLogo = () => (
  <div className="navbar">
    <h1>
      <img src={EggLogoImg} alt={'logo'} />
    </h1>
    <div className="btnmenu">
      <Link to="/popup/common/3">
        <p href="#">
          <img src={EggMenuBtnImg} alt={'menubar'} />
        </p>
      </Link>
    </div>
  </div>
);

EggLogo.defaultProps = {
  outerClassName: 'navbar',
  innerClassName: 'btnmenu'
};

export { EggLogo };
