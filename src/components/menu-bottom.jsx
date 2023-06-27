/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';
import '../menubottom.css';

function MenuBottom() {
  return (
    <div className="menu-bottom">
      <ul className="menu-list">
        <Link style={{ textDecoration: 'none' }} to="/">
          <li className="menu-row">
            <div><HomeIcon /></div><div></div></li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about">
          <li className="menu-row">
            <div><PersonIcon /></div>
            <div></div></li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/projects">
          <li className="menu-row">
            <div><WorkOutlineIcon /></div>
            <div className="linktext"></div>
          </li>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/contact">
          <li className="menu-row">
            <div><ContactPageIcon /></div>
            <div></div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default MenuBottom;
