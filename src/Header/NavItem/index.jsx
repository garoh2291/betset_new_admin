import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavItem = ({ label, link }) => {
  return (
    <li className="nav_item">
      <NavLink
        end
        to={`/${link}`}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {label}
      </NavLink>
    </li>
  );
};
