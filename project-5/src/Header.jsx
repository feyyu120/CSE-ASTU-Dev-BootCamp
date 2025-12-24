import { NavLink } from "react-router-dom";
import React from "react";
import { FaHome, FaChartBar, FaMoon, FaSun } from "react-icons/fa";
import "./index.css";
function Header({ dark, setDark }) {
  return (
    <nav>
      <NavLink className="navLink" to="/">
        <FaHome className="headerIcon" /> Home
      </NavLink>
      <NavLink className="navLink" to="/statics">
        <FaChartBar className="headerIcon" /> Statics
      </NavLink>
      <button className="themebtn" onClick={() => setDark(!dark)}>
        {dark ? (
          <FaSun className="headerIcon" />
        ) : (
          <FaMoon className="headerIcon" />
        )}
      </button>
    </nav>
  );
}

export default Header;
