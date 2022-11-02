import React from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "../NavItem";
import "./styles.css";

const { new_ordinar, ordinar_board, new_express, express_board } = NAVBAR_PAGES;

export const Navbar = () => {
  return (
    <ul className="navigation_list">
      <NavItem label={new_ordinar.label} link={new_ordinar.link} />
      <NavItem label={ordinar_board.label} link={ordinar_board.link} />
      <NavItem label={new_express.label} link={new_express.link} />
      <NavItem label={express_board.label} link={express_board.link} />
    </ul>
  );
};
