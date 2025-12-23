import { NavLink } from "react-router-dom";
import React from "react";
import "./index.css";
function Header({ dark, setDark }) {
  return (
    <nav>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/statics">
        Statics
      </NavLink>
      <button className="themebtn" onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Header;
